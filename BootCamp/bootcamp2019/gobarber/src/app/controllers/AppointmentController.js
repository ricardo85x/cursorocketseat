import * as Yup from 'yup';
import { startOfHour, parseISO, isBefore, endOfHour } from 'date-fns';
import { Op } from 'sequelize';
import Appointment from '../models/Appointment';
import User from '../models/Users';

class AppointmentController {
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
      user_id: req.userId,
      provider_id,
      date,
    });

    return res.json(appointment);
  }
}

export default new AppointmentController();
