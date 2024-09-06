import { Request, Response, NextFunction } from 'express';
import { ForbiddenError } from '../utils/errors';
import { ac } from './roleMiddleware';

// Add more roles and permissions as needed

export const checkAccess = (action: string, resource: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const userRole = req.query.role as string;
    const permission = ac.can(userRole)[action](resource);

    if (!permission.granted) {
      return next(new ForbiddenError('You do not have permission to perform this action'));
    }

    next();
  };
};
