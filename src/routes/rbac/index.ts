import { Router } from 'express';
import { asyncHandler } from '../../utils';
import * as rbacController from '../../controllers/rbacController';

const router = Router();

router.post('/role', asyncHandler(rbacController.createRole));
router.get('/roles', asyncHandler(rbacController.getAllRoles));

router.post('/resource', asyncHandler(rbacController.createResource));
router.get('/resources', asyncHandler(rbacController.getAllResources));

export default router;
