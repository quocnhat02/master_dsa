import { Router } from 'express';
import {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  blockUser,
  unblockUser,
  deactivateUser,
  reactivateUser,
} from '../../controllers/userController';
import { asyncHandler } from '../../utils';
import { validate, validateParams } from '../../middlewares/validate';
import {
  createUserSchema,
  updateUserSchema,
  getUserByIdSchema,
} from '../../validations/userValidation';
import { authenticate, authorize } from '../../middlewares/auth';

const router = Router();

// Public routes
router.post('/', validate(createUserSchema), asyncHandler(createUser));

// Protected routes
router.use(authenticate);

// Routes accessible by all authenticated users
router.get('/:id', validateParams(getUserByIdSchema), asyncHandler(getUserById));

// Routes for users with 'user' role and above
router.get('/', authorize(['user', 'admin']), asyncHandler(getUsers));
router.put(
  '/:id',
  authorize(['user', 'admin']),
  validateParams(getUserByIdSchema),
  validate(updateUserSchema),
  asyncHandler(updateUser),
);

// Admin only routes
router.use(authorize(['admin']));
router.post('/:id/block', asyncHandler(blockUser));
router.post('/:id/unblock', asyncHandler(unblockUser));
router.post('/:id/deactivate', asyncHandler(deactivateUser));
router.post('/:id/reactivate', asyncHandler(reactivateUser));

export default router;
