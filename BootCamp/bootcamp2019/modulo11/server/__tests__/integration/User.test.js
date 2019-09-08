import request from 'supertest';

import app from '../../src/app';
import truncate from '../util/truncate';

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able to register', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'Ricardo God',
        email: 'ricardo@a.com',
        password_hash: '123456',
      });

    expect(response.body).toHaveProperty('id');
  });
  it('should return error if user alread exists', async () => {
    await request(app)
      .post('/users')
      .send({
        name: 'Ricardo God',
        email: 'ricardo@a.com',
        password_hash: '123456',
      });

    const responseDuplicate = await request(app)
      .post('/users')
      .send({
        name: 'Ricardo God',
        email: 'ricardo@a.com',
        password_hash: '123456',
      });

    expect(responseDuplicate.status).toBe(400);
  });
});
