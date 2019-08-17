import { startOfDay, endOfDay, parseISO } from 'date-fns';
import { Op } from 'sequelize';
import Appointment from '../models/Appointment';
import User from '../models/Users';

class ScheduleController {
  async index(req, res) {
    const checkProvider = await User.findOne({
      where: {
        id: req.userID,
        provider: true,
      },
    });

    if (!checkProvider) {
      res.status(401).json({ error: 'user is not a provider' });
    }

    const { date } = req.query;
    const parsedDate = parseISO(date);

    const startDay = startOfDay(parsedDate);
    const endDay = endOfDay(parsedDate);

    const appointments = await Appointment.findAll({
      where: {
        provider_id: req.userID,
        canceled_at: null,
        date: {
          [Op.between]: [startDay, endDay],
        },
      },
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['name'],
        },
      ],
      order: ['date'],
    });

    console.log('vamos parar por aqui', req.userID, startDay, endDay);

    return res.json(appointments);
  }
}

export default new ScheduleController();
