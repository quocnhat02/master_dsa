import { Router, Request, Response, NextFunction } from 'express';
import profileRoutes from './profile';
import rbacRoutes from './rbac';
import { v4 as uuidv4 } from 'uuid';
import { logger } from '../utils';

declare global {
  namespace Express {
    interface Request {
      requestId?: string;
    }
  }
}

const router = Router();

router.use((req: Request, res: Response, next: NextFunction) => {
  const requestId = req.header('x-request-id');
  req.requestId = requestId || uuidv4();

  logger.info(`Route accessed ${req.method}`, {
    context: `/api${req.path}`,
    requestId: req.requestId,
    data: req.method === 'POST' ? JSON.stringify(req.body) : req.query,
  });
  next();
});

router.use('/rbac', rbacRoutes);
router.use('/profile', profileRoutes);

export default router;
