import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { UnauthorizedError, ForbiddenError } from '../utils/errors';
import config from '../config/config';
import { getUserById } from '../services/userService';
import { IUser } from '../models/User';

declare global {
  namespace Express {
    interface Request {
      user?: IUser;
    }
  }
}

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

    if (user.usr_status === 'block') {
      throw new ForbiddenError(`Your account has been blocked. Reason: ${user.blockedReason}`);
    }

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
