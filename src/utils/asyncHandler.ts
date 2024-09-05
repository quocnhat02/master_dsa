import { Request, Response, NextFunction } from 'express';
import { AppError } from './errors';

type AsyncFunction = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any>;

export const asyncHandler =
  (fn: AsyncFunction) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => {
      if (!(err instanceof AppError)) {
        err = new AppError(err.message || 'Internal Server Error', 500);
      }
      next(err);
    });
  };
