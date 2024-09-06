import { Request, Response, NextFunction } from 'express';
import { ForbiddenError } from '../utils/errors';
import { IUser } from '../models/User';

// Extend the Express Request type to include the user property
declare global {
  namespace Express {
    interface Request {
      user?: IUser;
    }
  }
}

export const authorize = (...allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return next(new ForbiddenError('You are not logged in'));
    }

    const userRole = req.user.usr_role.toString();

    if (!allowedRoles.includes(userRole)) {
      return next(new ForbiddenError('You do not have permission to perform this action'));
    }

    next();
  };
};
