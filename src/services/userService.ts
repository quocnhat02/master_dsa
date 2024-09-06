import User, { IUser } from '../models/User';
import APIFeatures from '../utils/ApiFeatures';
import { PaginationOptions, QueryResult } from '../interfaces';
import redisService from './redis.service';

const USER_CACHE_EXPIRY = 3600; // 1 hour in seconds

export const signup = async (userData: Partial<IUser>): Promise<IUser> => {
  const user = new User(userData);
  return user.save();
};

export const getAllUsers = async (
  filter: Record<string, any> = {},
  options: PaginationOptions,
): Promise<QueryResult<IUser>> => {
  const finalFilter = { ...filter, usr_status: 'active' };
  const cacheKey = `users:${JSON.stringify(finalFilter)}:${JSON.stringify(options)}`;
  const cachedResult = await redisService.get(cacheKey);

  if (cachedResult) {
    return JSON.parse(cachedResult);
  }

  const features = new APIFeatures(User.find(finalFilter), options as Record<string, string>)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const users = await features.query;
  const count = await User.countDocuments(finalFilter);

  const result = {
    results: users,
    page: options.page,
    limit: options.limit,
    totalPages: Math.ceil(count / options.limit),
    totalResults: count,
  };

  await redisService.set(cacheKey, JSON.stringify(result), 300);

  return result;
};

export const createUser = async (userData: Partial<IUser>): Promise<IUser> => {
  const user = new User(userData);
  return user.save();
};

export const getUserById = async (id: string): Promise<IUser | null> => {
  const cachedUser = await redisService.get(`user:${id}`);
  if (cachedUser) {
    const user = JSON.parse(cachedUser);
    return user.usr_status === 'active' ? user : null;
  }

  const user = await User.findOne({ _id: id, usr_status: 'active' });

  if (user) {
    await redisService.set(`user:${id}`, JSON.stringify(user), USER_CACHE_EXPIRY);
  }

  return user;
};

export const updateUser = async (id: string, updateData: Partial<IUser>): Promise<IUser | null> => {
  const updatedUser = await User.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });

  if (updatedUser) {
    await redisService.set(`user:${id}`, JSON.stringify(updatedUser), USER_CACHE_EXPIRY);
  }

  return updatedUser;
};

export const deactivateUser = async (userId: string): Promise<IUser | null> => {
  const user = await User.findByIdAndUpdate(userId, { usr_status: 'block' }, { new: true });

  if (user) {
    await redisService.del(`user:${userId}`);
  }

  return user;
};

export const reactivateUser = async (userId: string): Promise<IUser | null> => {
  const user = await User.findByIdAndUpdate(userId, { usr_status: 'active' }, { new: true });

  if (user) {
    await redisService.set(`user:${userId}`, JSON.stringify(user), USER_CACHE_EXPIRY);
  }

  return user;
};

export const blockUser = async (userId: string, reason: string): Promise<IUser | null> => {
  const user = await User.findByIdAndUpdate(
    userId,
    {
      usr_status: 'block',
      blockedReason: reason,
      blockedAt: new Date(),
    },
    { new: true },
  );

  if (user) {
    await redisService.del(`user:${userId}`);
  }

  return user;
};

export const unblockUser = async (userId: string): Promise<IUser | null> => {
  const user = await User.findByIdAndUpdate(
    userId,
    {
      usr_status: 'active',
      $unset: { blockedReason: 1, blockedAt: 1 },
    },
    { new: true },
  );

  if (user) {
    await redisService.set(`user:${userId}`, JSON.stringify(user), USER_CACHE_EXPIRY);
  }

  return user;
};

// Remove blockUser and unblockUser functions as they're no longer needed
