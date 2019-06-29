import * as Yup from 'yup';
import { startOfHour, parseISO, isBefore, endOfHour, format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { Op } from 'sequelize';
import Appointment from '../models/Appointment';
import User from '../models/Users';
import File from '../models/File';
import Notification from '../schemas/notification';

class AppointmentController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const appointments = await Appointment.findAll({
      where: {
        user_id: req.userID,
        canceled_at: null,
      },
      order: ['date'],
      attributes: ['id', 'date'],
      limit: 20,
      offset: (page - 1) * 20, // pagina 1 = 1 a 20, pagina 2 = da pagina 2(conta ) ate +  20
      include: [
        {
          model: User,
          as: 'provider',
          attributes: ['name', 'email', 'id'],
          include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['url', 'name', 'id', 'path'],
            },
          ],
        },
      ],
    });

    return res.json(appointments);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      date: Yup.date().required(),
      provider_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'validatation error' });
    }

    const { provider_id, date } = req.body;

    /*
     * Check if provider_id is a provider
     */
    const is_provider = await User.findOne({
      where: {
        provider: true,
        id: provider_id,
      },
    });

    if (!is_provider) {
      return res
        .status(401)
        .json({ error: 'You can only create appointment with a provider' });
    }

    /**
     * Check for past date
     */
    // zera os minutos e segundos da hora ex: 10:31 vira 10:00
    const hourStart = startOfHour(parseISO(date));
    const hourEnd = endOfHour(parseISO(date));

    if (isBefore(hourStart, new Date())) {
      return res.status(400).json({
        error:
          'It is not possible to create appointment before current time or same hour as now',
      });
    }

    /**
     * Check date availability
     */
    // const hourStart = startOfHour(parseISO(date));
    // const hourEnd = endOfHour(parseISO(date));

    const checkAvailability = await Appointment.findOne({
      where: {
        provider_id,
        canceled_at: null,
        date: {
          [Op.between]: [hourStart, hourEnd],
        },
      },
    });

    if (checkAvailability) {
      return res
        .status(400)
        .json({ error: 'Appointment data is not available' });
    }

    const appointment = await Appointment.create({
      user_id: req.userID,
      provider_id,
      date,
    });

    /**
     * Notify appointment provider
     */

    const user = await User.findByPk(req.userID);
    const formattedDate = format(
      hourStart,
      "'dia' dd 'de' MMMM', às' HH:mm'h'",
      {
        locale: pt,
      }
    );

    await Notification.create({
      content: `Novo agendamento de ${user.name} para o ${formattedDate}`,
      user: provider_id,
    });

    return res.json(appointment);
  }
}

export default new AppointmentController();
