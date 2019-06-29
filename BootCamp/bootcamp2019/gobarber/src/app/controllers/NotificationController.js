import Notification from '../schemas/notification';
import User from '../models/Users';

class NotificationController {
  async index(req, res) {
    const checkProvider = await User.findOne({
      where: {
        id: req.userID,
        provider: true,
      },
    });

    if (!checkProvider) {
      return res.status(401).json({ error: 'only for providers, sorry' });
    }

    const notifications = await Notification.find({
      user: req.userID,
    })
      .sort({
        createdAt: 'desc',
      })
      .limit(20);

    return res.json(notifications);
  }
}

export default new NotificationController();
