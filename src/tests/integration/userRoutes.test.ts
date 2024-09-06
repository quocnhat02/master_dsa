// import request from 'supertest';
// import mongoose from 'mongoose';
// import { MongoMemoryServer } from 'mongodb-memory-server';
// import app from '../../app';
// import User from '../../models/User';

// let mongoServer: MongoMemoryServer;

// beforeAll(async () => {
//   mongoServer = await MongoMemoryServer.create();
//   const mongoUri = mongoServer.getUri();
//   await mongoose.connect(mongoUri);
// });

// afterAll(async () => {
//   await mongoose.disconnect();
//   await mongoServer.stop();
// });

// describe('User Routes', () => {
//   beforeEach(async () => {
//     await User.deleteMany({});
//   });

//   describe('POST /api/users', () => {
//     it('should create a new user', async () => {
//       const userData = {
//         name: 'John Doe',
//         email: 'john@example.com',
//         password: 'password123',
//       };

//       const res = await request(app).post('/api/users').send(userData).expect(201);

//       expect(res.body.data.name).toBe(userData.name);
//       expect(res.body.data.email).toBe(userData.email);
//       expect(res.body.data.password).toBeUndefined();
//     });

//     it('should return 400 if required fields are missing', async () => {
//       const userData = {
//         name: 'John Doe',
//       };

//       const res = await request(app).post('/api/users').send(userData).expect(400);

//       expect(res.body.error).toBeDefined();
//     });
//   });

//   describe('GET /api/users', () => {
//     it('should return all users', async () => {
//       await User.create([
//         { name: 'John Doe', email: 'john@example.com', password: 'password123' },
//         { name: 'Jane Doe', email: 'jane@example.com', password: 'password456' },
//       ]);

//       const res = await request(app).get('/api/users').expect(200);

//       expect(res.body.data.length).toBe(2);
//       expect(res.body.data[0].name).toBe('John Doe');
//       expect(res.body.data[1].name).toBe('Jane Doe');
//     });
//   });

//   describe('GET /api/users/:id', () => {
//     it('should return a user by id', async () => {
//       const user = await User.create({
//         name: 'John Doe',
//         email: 'john@example.com',
//         password: 'password123',
//       });

//       const res = await request(app).get(`/api/users/${user._id}`).expect(200);

//       expect(res.body.data.name).toBe('John Doe');
//       expect(res.body.data.email).toBe('john@example.com');
//     });

//     it('should return 404 if user is not found', async () => {
//       const nonExistentId = new mongoose.Types.ObjectId();
//       await request(app).get(`/api/users/${nonExistentId}`).expect(404);
//     });
//   });

//   describe('PUT /api/users/:id', () => {
//     it('should update a user', async () => {
//       const user = await User.create({
//         name: 'John Doe',
//         email: 'john@example.com',
//         password: 'password123',
//       });

//       const updateData = {
//         name: 'John Updated',
//       };

//       const res = await request(app).put(`/api/users/${user._id}`).send(updateData).expect(200);

//       expect(res.body.data.name).toBe(updateData.name);
//       expect(res.body.data.email).toBe(user.email);
//     });

//     it('should return 404 if user is not found', async () => {
//       const nonExistentId = new mongoose.Types.ObjectId();
//       const updateData = {
//         name: 'John Updated',
//       };

//       await request(app).put(`/api/users/${nonExistentId}`).send(updateData).expect(404);
//     });
//   });
// });
