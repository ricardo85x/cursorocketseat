import request from 'supertest';
import bcrypt from 'bcryptjs';
import app from '../../src/app';
import factory from '../factories';

// import User from '../../src/app/models/User';
import truncate from '../util/truncate';

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should encrypt user password then new user created', async () => {
    const user = await factory.create('User', {
      password: '123456',
    });

    const compareHash = await bcrypt.compare('123456', user.password_hash);

    expect(compareHash).toBe(true);
  });

  it('should be able to register', async () => {
    const user = await factory.attrs('User');

    const response = await request(app)
      .post('/users')
      .send(user);

    expect(response.body).toHaveProperty('id');
  });
  it('should return error if user alread exists', async () => {
    const user = await factory.attrs('User');

    await request(app)
      .post('/users')
      .send(user);

    const responseDuplicate = await request(app)
      .post('/users')
      .send(user);

    expect(responseDuplicate.status).toBe(400);
  });
});
