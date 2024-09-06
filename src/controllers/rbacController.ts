import { Request, Response, NextFunction } from 'express';
import { ResponseHandler } from '../utils';
import * as rbacService from '../services/rbac.service';

export const createResource = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, slug, description } = req.body;
    const resource = await rbacService.createResource({ name, slug, description });

    ResponseHandler.success(res, resource, 'Create New Resource successfully');
  } catch (error) {
    next(error);
  }
};

export const createRole = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, slug, description, grants } = req.body;
    const role = await rbacService.createRole({ name, slug, description, grants });

    ResponseHandler.success(res, role, 'Create New Role successfully');
  } catch (error) {
    next(error);
  }
};

export const getAllResources = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.query.userId ? parseInt(req.query.userId as string, 10) : undefined;
    const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : undefined;
    const offset = req.query.offset ? parseInt(req.query.offset as string, 10) : undefined;
    const search = req.query.search as string;

    const resources = await rbacService.getListResource({ userId, limit, offset, search });

    ResponseHandler.success(res, resources, 'Get All Resources successfully');
  } catch (error) {
    next(error);
  }
};

export const getAllRoles = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.query.userId ? parseInt(req.query.userId as string, 10) : undefined;
    const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : undefined;
    const offset = req.query.offset ? parseInt(req.query.offset as string, 10) : undefined;
    const search = req.query.search as string;
    const roles = await rbacService.getListRoles({ userId, limit, offset, search });

    ResponseHandler.success(res, roles, 'Get All Roles successfully');
  } catch (error) {
    next(error);
  }
};
