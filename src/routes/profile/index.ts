import { Router } from 'express';
import { getAllProfiles, getOwnProfile } from '../../controllers/profileController';
import { asyncHandler } from '../../utils';

const router = Router();

// admin
router.get('/view-any', asyncHandler(getAllProfiles));

// shop
router.get('/view-own', asyncHandler(getOwnProfile));

export default router;
