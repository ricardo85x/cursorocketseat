import User from '../models/User';

class UserController {
  async store(req, res) {
    const { email } = req.body;

    const user_exists = await User.findOne({ where: { email } });

    if (user_exists) {
      return res.status(400).json({ error: 'usuario existe' });
    }
    const user = await User.create(req.body);
    return res.json(user);
  }
}

export default new UserController();
