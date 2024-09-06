import { Request, Response, NextFunction } from 'express';
import { ForbiddenError } from '../utils/errors';
import { ac } from './roleMiddleware';
import { getListRoles } from '../services/rbac.service';
import { logger } from '../utils';

// Add more roles and permissions as needed

/**
 * Check access
 * @param action
 * @param resource
 * @returns
 */
export const checkAccess = (action: string, resource: string) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Fetch and set roles only if not already set
      if (Object.keys(ac.getGrants()).length === 0) {
        const roles = await getListRoles({});
        ac.setGrants(roles);
      }

      // Use the authenticated user's role instead of query parameter
      const userRole = req.query?.role as string;
      if (!userRole) {
        return next(new ForbiddenError('User role not found'));
      }
      logger.info(`User role: ${userRole}, Action: ${action}, Resource: ${resource}`);

      const permission = ac.can(userRole)[action](resource);
      logger.info(`Permission granted: ${permission.granted}`);

      if (!permission.granted) {
        return next(new ForbiddenError('You do not have permission to perform this action'));
      }

      // Optionally attach permission to request for use in controllers
      // req.permission = permission;

      next();
    } catch (error) {
      logger.error('RBAC Error:', error);
      next(new ForbiddenError('An error occurred while checking permissions'));
    }
  };
};
