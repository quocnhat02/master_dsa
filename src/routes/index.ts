import { Router } from 'express';
// import userRoutes from './userRoutes';
import profileRoutes from './profile';

const router = Router();

// router.use('/users', userRoutes);
router.use('/profiles', profileRoutes);

// Add other route groups here as they are created

export default router;
