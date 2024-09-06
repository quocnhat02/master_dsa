import { Router } from 'express';
// import userRoutes from './userRoutes';
import profileRoutes from './profile';
import rbacRoutes from './rbac';

const router = Router();

// router.use('/users', userRoutes);
router.use('/rbac', rbacRoutes);
router.use('/profile', profileRoutes);
// Add other route groups here as they are created

export default router;
