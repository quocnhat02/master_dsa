// import mongoose from 'mongoose';
// import { MongoMemoryServer } from 'mongodb-memory-server';
// import * as userService from '../../services/userService';
// import User, { IUser } from '../../models/User';

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

// describe('User Service', () => {
//   beforeEach(async () => {
//     await User.deleteMany({});
//   });

//   describe('createUser', () => {
//     it('should create a new user', async () => {
//       const userData = {
//         name: 'John Doe',
//         email: 'john@example.com',
//         password: 'password123',
//       };

//       const user = await userService.createUser(userData);

//       expect(user.name).toBe(userData.name);
//       expect(user.email).toBe(userData.email);
//       expect(user.password).not.toBe(userData.password); // Password should be hashed
//     });

//     it('should throw an error if email already exists', async () => {
//       const userData = {
//         name: 'John Doe',
//         email: 'john@example.com',
//         password: 'password123',
//       };

//       await userService.createUser(userData);

//       await expect(userService.createUser(userData)).rejects.toThrow();
//     });
//   });

//   describe('getUserById', () => {
//     it('should return a user by id', async () => {
//       const userData = {
//         name: 'John Doe',
//         email: 'john@example.com',
//         password: 'password123',
//       };

//       const createdUser = await userService.createUser(userData);
//       const user = await userService.getUserById(createdUser._id);

//       expect(user).toBeDefined();
//       expect(user?.name).toBe(userData.name);
//       expect(user?.email).toBe(userData.email);
//     });

//     it('should return null for non-existent user', async () => {
//       const nonExistentId = new mongoose.Types.ObjectId();
//       const user = await userService.getUserById(nonExistentId.toString());

//       expect(user).toBeNull();
//     });
//   });

//   describe('getAllUsers', () => {
//     it('should return all users', async () => {
//       const userData1 = { name: 'John Doe', email: 'john@example.com', password: 'password123' };
//       const userData2 = { name: 'Jane Doe', email: 'jane@example.com', password: 'password456' };

//       await userService.createUser(userData1);
//       await userService.createUser(userData2);

//       const filter = {}; // You can add filters based on query params if needed
//       const options = {
//         page: 1,
//         limit: 10,
//         sort: '',
//         fields: '',
//       };

//       const result = await userService.getAllUsers(filter, options);

//       expect(result.results.length).toBe(2);
//       expect(result.results[0].name).toBe(userData1.name);
//       expect(result.results[1].name).toBe(userData2.name);
//     });
//   });

//   describe('updateUser', () => {
//     it('should update a user', async () => {
//       const userData = { name: 'John Doe', email: 'john@example.com', password: 'password123' };
//       const createdUser = await userService.createUser(userData);

//       const updateData = { name: 'John Updated' };
//       const updatedUser = await userService.updateUser(createdUser._id, updateData);

//       expect(updatedUser).toBeDefined();
//       expect(updatedUser?.name).toBe(updateData.name);
//       expect(updatedUser?.email).toBe(userData.email);
//     });

//     it('should return null for non-existent user', async () => {
//       const nonExistentId = new mongoose.Types.ObjectId();
//       const updateData = { name: 'John Updated' };
//       const updatedUser = await userService.updateUser(nonExistentId.toString(), updateData);

//       expect(updatedUser).toBeNull();
//     });
//   });
// });
