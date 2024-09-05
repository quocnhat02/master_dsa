import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/errors';
import logger from '../utils/logger';
import { NODE_ENV } from '../config/constants';
import { MongoError } from 'mongodb';

const errorHandler = (
  err: Error | MongoError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let error = err as AppError;
  error.message = err.message;

  // Log the error
  logger.error(`${error.message}\n${error.stack}`);

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    const message = `Resource not found`;
    error = new AppError(message, 404);
  }

  // Mongoose duplicate key
  if ('code' in err && err.code === 11000) {
    const message = 'Duplicate field value entered';
    error = new AppError(message, 400);
  }

  // Mongoose validation error
  if (err.name === 'ValidationError' && 'errors' in err) {
    const message = Object.values(
      err.errors as Record<string, { message: string }>
    ).map((val) => val.message);
    error = new AppError(message.join(', '), 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error',
    ...(NODE_ENV === 'development' && { stack: error.stack }),
  });
};

export default errorHandler;
