import { Request, Response } from 'express';
import * as userService from '../services/userService';
import { ResponseHandler } from '../utils';
import { NotFoundError } from '../utils/errors';

export const getUsers = async (req: Request, res: Response) => {
  const filter = {}; // You can add filters based on query params if needed
  const options = {
    page: parseInt(req.query.page as string) || 1,
    limit: parseInt(req.query.limit as string) || 10,
    sort: req.query.sort as string,
    fields: req.query.fields as string,
  };

  const result = await userService.getAllUsers(filter, options);
  ResponseHandler.success(res, result, 'Users retrieved successfully');
};

export const createUser = async (req: Request, res: Response) => {
  const user = await userService.createUser(req.body);
  ResponseHandler.created(res, user, 'User created successfully');
};

export const getUserById = async (req: Request, res: Response) => {
  const user = await userService.getUserById(req.params.id);
  if (!user) {
    throw new NotFoundError('User not found');
  }
  ResponseHandler.success(res, user, 'User retrieved successfully');
};

export const updateUser = async (req: Request, res: Response) => {
  const updatedUser = await userService.updateUser(req.params.id, req.body);
  if (!updatedUser) {
    throw new NotFoundError('User not found');
  }
  ResponseHandler.success(res, updatedUser, 'User updated successfully');
};

export const blockUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { reason } = req.body;
  const blockedUser = await userService.blockUser(id, reason);
  if (!blockedUser) {
    throw new NotFoundError('User not found');
  }
  ResponseHandler.success(res, blockedUser, 'User blocked successfully');
};

export const unblockUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const unblockedUser = await userService.unblockUser(id);
  if (!unblockedUser) {
    throw new NotFoundError('User not found');
  }
  ResponseHandler.success(res, unblockedUser, 'User unblocked successfully');
};

export const deactivateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deactivatedUser = await userService.deactivateUser(id);
  if (!deactivatedUser) {
    throw new NotFoundError('User not found');
  }
  ResponseHandler.success(res, deactivatedUser, 'User deactivated successfully');
};

export const reactivateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const reactivatedUser = await userService.reactivateUser(id);
  if (!reactivatedUser) {
    throw new NotFoundError('User not found');
  }
  ResponseHandler.success(res, reactivatedUser, 'User reactivated successfully');
};
