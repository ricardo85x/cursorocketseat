import * as Yup from 'yup';
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

    const appointment = await Appointment.create({
      user_id: req.userId,
      provider_id,
      date,
    });

    return res.json(appointment);
  }
}

export default new AppointmentController();
