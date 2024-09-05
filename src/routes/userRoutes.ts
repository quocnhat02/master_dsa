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
} from '../controllers/userController';
import { asyncHandler } from '../utils';
import { validate, validateParams } from '../middlewares/validate';
import {
  createUserSchema,
  updateUserSchema,
  getUserByIdSchema,
} from '../validations/userValidation';
import { authenticate } from '../middlewares/auth';
import { checkUserBlocked } from '../middlewares/checkUserBlocked';

const router = Router();

router.post('/', validate(createUserSchema), asyncHandler(createUser));

// Protected routes
router.use(authenticate);
router.use(checkUserBlocked);

router.get('/', asyncHandler(getUsers));
router.get('/:id', validateParams(getUserByIdSchema), asyncHandler(getUserById));
router.put(
  '/:id',
  validateParams(getUserByIdSchema),
  validate(updateUserSchema),
  asyncHandler(updateUser),
);

// Admin only routes
router.post('/:id/block', asyncHandler(blockUser));
router.post('/:id/unblock', asyncHandler(unblockUser));
router.post('/:id/deactivate', asyncHandler(deactivateUser));
router.post('/:id/reactivate', asyncHandler(reactivateUser));

export default router;
