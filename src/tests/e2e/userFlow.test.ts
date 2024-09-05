import request from 'supertest';
import { app } from './setup';
import User from '../../models/User';

describe('User Flow', () => {
  let authToken: string;
  let userId: string;

  beforeEach(async () => {
    await User.deleteMany({});
  });

  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
      })
      .expect(201);

    expect(res.body.data).toHaveProperty('_id');
    expect(res.body.data.name).toBe('John Doe');
    expect(res.body.data.email).toBe('john@example.com');
    expect(res.body.data).not.toHaveProperty('password');
  });

  it('should not register a user with an existing email', async () => {
    await request(app)
      .post('/api/auth/register')
      .send({
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
      })
      .expect(201);

    const res = await request(app)
      .post('/api/auth/register')
      .send({
        name: 'Jane Doe',
        email: 'john@example.com',
        password: 'password456',
      })
      .expect(400);

    expect(res.body.error).toContain('Email already exists');
  });

  it('should login a user and return a token', async () => {
    await request(app).post('/api/auth/register').send({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
    });

    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'john@example.com',
        password: 'password123',
      })
      .expect(200);

    expect(res.body.data).toHaveProperty('token');
    authToken = res.body.data.token;
  });

  it('should not login with incorrect credentials', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'john@example.com',
        password: 'wrongpassword',
      })
      .expect(401);

    expect(res.body.error).toContain('Invalid credentials');
  });

  it('should get user profile', async () => {
    const res = await request(app)
      .get('/api/users/me')
      .set('Authorization', `Bearer ${authToken}`)
      .expect(200);

    expect(res.body.data.name).toBe('John Doe');
    expect(res.body.data.email).toBe('john@example.com');
    userId = res.body.data._id;
  });

  it('should update user profile', async () => {
    const res = await request(app)
      .put('/api/users/me')
      .set('Authorization', `Bearer ${authToken}`)
      .send({
        name: 'John Updated',
      })
      .expect(200);

    expect(res.body.data.name).toBe('John Updated');
  });

  it('should not update user email to an existing email', async () => {
    await request(app).post('/api/auth/register').send({
      name: 'Jane Doe',
      email: 'jane@example.com',
      password: 'password456',
    });

    const res = await request(app)
      .put('/api/users/me')
      .set('Authorization', `Bearer ${authToken}`)
      .send({
        email: 'jane@example.com',
      })
      .expect(400);

    expect(res.body.error).toContain('Email already exists');
  });

  it('should change user password', async () => {
    await request(app)
      .post('/api/auth/change-password')
      .set('Authorization', `Bearer ${authToken}`)
      .send({
        currentPassword: 'password123',
        newPassword: 'newpassword123',
      })
      .expect(200);

    // Try logging in with the new password
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'john@example.com',
        password: 'newpassword123',
      })
      .expect(200);

    expect(res.body.data).toHaveProperty('token');
  });

  it('should delete user account', async () => {
    await request(app)
      .delete('/api/users/me')
      .set('Authorization', `Bearer ${authToken}`)
      .expect(204);

    // Try to get the deleted user profile
    await request(app).get('/api/users/me').set('Authorization', `Bearer ${authToken}`).expect(401);
  });

  it('should handle rate limiting', async () => {
    const loginAttempts = Array(110)
      .fill(null)
      .map(() =>
        request(app).post('/api/auth/login').send({
          email: 'john@example.com',
          password: 'password123',
        }),
      );

    const results = await Promise.all(loginAttempts);
    const tooManyRequestsCount = results.filter((res) => res.status === 429).length;

    expect(tooManyRequestsCount).toBeGreaterThan(0);
  });

  it('should refresh the access token', async () => {
    const loginRes = await request(app).post('/api/auth/login').send({
      email: 'john@example.com',
      password: 'password123',
    });

    const refreshToken = loginRes.body.data.refreshToken;

    const res = await request(app)
      .post('/api/auth/refresh-token')
      .send({ refreshToken })
      .expect(200);

    expect(res.body.data).toHaveProperty('token');
    expect(res.body.data).toHaveProperty('refreshToken');
  });

  it('should logout and invalidate the refresh token', async () => {
    const logoutRes = await request(app)
      .post('/api/auth/logout')
      .set('Authorization', `Bearer ${authToken}`)
      .expect(204);

    // Try to use the refresh token after logout
    const refreshRes = await request(app)
      .post('/api/auth/refresh-token')
      .send({ refreshToken: logoutRes.body.data.refreshToken })
      .expect(401);

    expect(refreshRes.body.error).toContain('Invalid refresh token');
  });
});
