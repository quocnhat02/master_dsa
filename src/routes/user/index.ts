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
import { authenticate } from '../../middlewares/auth';
import { checkAccess } from '../../middlewares/rbac';

const router = Router();

// Public routes
router.post('/', validate(createUserSchema), asyncHandler(createUser));

// Protected routes
router.use(authenticate);

// Routes accessible by all authenticated users
router.get(
  '/:id',
  validateParams(getUserByIdSchema),
  checkAccess('readAny', 'profile'),
  asyncHandler(getUserById),
);

// Routes for users with 'user' role and above
router.get('/', checkAccess('readAny', 'profile'), asyncHandler(getUsers));
router.put(
  '/:id',
  validateParams(getUserByIdSchema),
  validate(updateUserSchema),
  checkAccess('updateAny', 'profile'),
  asyncHandler(updateUser),
);

// Admin only routes
router.post('/:id/block', checkAccess('updateAny', 'profile'), asyncHandler(blockUser));
router.post('/:id/unblock', checkAccess('updateAny', 'profile'), asyncHandler(unblockUser));
router.post('/:id/deactivate', checkAccess('updateAny', 'profile'), asyncHandler(deactivateUser));
router.post('/:id/reactivate', checkAccess('updateAny', 'profile'), asyncHandler(reactivateUser));

export default router;
