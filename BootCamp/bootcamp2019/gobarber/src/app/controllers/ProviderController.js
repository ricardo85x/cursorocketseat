import User from '../models/Users';
import File from '../models/File';

class ProviderController {
  async index(req, res) {
    const providers = await User.findAll({
      where: {
        provider: true,
      },
      attributes: ['name', 'email', 'id', 'avatar_id'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'id', 'path', 'url'],
        },
      ],
    });

    return res.json(providers);
  }
}

export default new ProviderController();
