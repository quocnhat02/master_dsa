import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import { BadRequestError } from '../utils/errors';
import { logger } from '../utils';

export const validate = (schema: Joi.ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      const errorMessage = error.details.map((detail) => detail.message).join(', ');
      logger.error(errorMessage, {
        context: req.path,
        requestId: req.requestId,
        data: req.body,
      });
      throw new BadRequestError(errorMessage);
    }

    next();
  };
};

export const validateParams = (schema: Joi.ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.params, { abortEarly: false });

    if (error) {
      const errorMessage = error.details.map((detail) => detail.message).join(', ');
      logger.error(errorMessage, {
        context: req.path,
        requestId: req.requestId,
        data: req.params,
      });
      throw new BadRequestError(errorMessage);
    }

    next();
  };
};
