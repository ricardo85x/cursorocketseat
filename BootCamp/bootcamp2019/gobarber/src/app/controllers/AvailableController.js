import {
  startOfDay,
  endOfDay,
  setHours,
  setMinutes,
  setSeconds,
  format,
  isAfter,
} from 'date-fns';
import { Op } from 'sequelize';
import Appointment from '../models/Appointment';

class AvailableController {
  async index(req, res) {
    const { date } = req.query;

    if (!date) {
      return res.status(401).json({ error: 'Invalid Date' });
    }

    const searchDate = Number(date);

    const appointment = await Appointment.findAll({
      where: {
        provider_id: req.params.providerID,
        canceled_at: null,
        date: {
          [Op.between]: [startOfDay(searchDate), endOfDay(searchDate)],
        },
      },
    });

    const schedule = [
      '08:00',
      '09:00',
      '10:00',
      '11:00',
      '13:00',
      '14:00',
      '15:00',
      '16:00',
      '17:00',
      '18:00',
    ];

    const availabe = schedule.map(time => {
      const [hour, minutes] = time.split(':');
      const value = setSeconds(
        setMinutes(setHours(searchDate, hour), minutes),
        0
      );

      return {
        time,
        value: format(value, "yyyy-MM-dd'T'HH:mm:ssxxx "),
        availabe:
          isAfter(value, new Date()) &&
          !appointment.find(
            a => format(setMinutes(a.date, 0), 'HH:mm') === time
          ),
      };
    });

    return res.json(availabe);
  }
}

export default new AvailableController();
