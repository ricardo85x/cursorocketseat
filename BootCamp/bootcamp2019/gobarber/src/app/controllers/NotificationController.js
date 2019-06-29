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

  async update(req, res) {
    // const notification = await Notification.find({
    //   user: req.userID,

    // })

    console.log('id usuario: ', req.params.id);
    const notification = await Notification.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.userID,
      },
      { read: true },
      { new: true } // retorna o item alterado
    );

    if (!notification) {
      return res.status(400).json({
        error: 'notificacao nao encontrada para seu usuario',
      });
    }

    return res.json(notification);
  }
}

export default new NotificationController();
