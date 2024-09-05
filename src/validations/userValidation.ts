import Joi from 'joi';

export const createUserSchema = Joi.object({
  name: Joi.string().required().min(2).max(50),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6).max(30),
  age: Joi.number().integer().min(18).max(120),
  role: Joi.string().valid('user', 'admin').default('user'),
});

export const updateUserSchema = Joi.object({
  name: Joi.string().min(2).max(50),
  email: Joi.string().email(),
  age: Joi.number().integer().min(18).max(120),
  role: Joi.string().valid('user', 'admin'),
}).min(1); // At least one field must be present

export const getUserByIdSchema = Joi.object({
  id: Joi.string()
    .required()
    .regex(/^[0-9a-fA-F]{24}$/), // Assuming MongoDB ObjectId
});
