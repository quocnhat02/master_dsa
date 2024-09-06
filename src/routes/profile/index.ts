import { Router } from 'express';
import { getAllProfiles, getOwnProfile } from '../../controllers/profileController';
import { asyncHandler } from '../../utils';
import { checkAccess } from '../../middlewares/rbac';

const router = Router();

// admin
router.get('/view-any', checkAccess('readAny', 'profile'), asyncHandler(getAllProfiles));

// shop
router.get('/view-own', checkAccess('readOwn', 'profile'), asyncHandler(getOwnProfile));

export default router;
