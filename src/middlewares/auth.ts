import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { UnauthorizedError, ForbiddenError } from '../utils/errors';
import config from '../config/config';
import { getUserById } from '../services/userService';

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      throw new UnauthorizedError('No token provided');
    }

    const decoded = jwt.verify(token, config.jwt.secret) as { id: string };
    const user = await getUserById(decoded.id);

    if (!user) {
      throw new UnauthorizedError('User not found');
    }

    if (user.isBlocked) {
      throw new ForbiddenError(`Your account has been blocked. Reason: ${user.blockedReason}`);
    }

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
