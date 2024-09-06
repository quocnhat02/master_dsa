import { Request, Response, NextFunction } from 'express';
import { ResponseHandler } from '../utils';

const profiles = [
  {
    usr_id: 1,
    usr_name: 'John Doe',
    usr_email: 'john.doe@example.com',
    usr_phone: '081234567890',
    usr_avatar: 'https://example.com/avatar.jpg',
    usr_date_of_birth: new Date('1990-01-01'),
    usr_sex: 'male',
    usr_role: 'admin',
    usr_status: 'active',
  },
  {
    usr_id: 2,
    usr_name: 'Jane Doe',
    usr_email: 'jane.doe@example.com',
    usr_phone: '081234567890',
    usr_avatar: 'https://example.com/avatar.jpg',
    usr_date_of_birth: new Date('1990-01-01'),
    usr_sex: 'female',
    usr_role: 'admin',
    usr_status: 'active',
  },
];

const profile = {
  usr_id: 1,
  usr_name: 'Light Code SE',
  usr_email: 'light.codese@example.com',
  usr_phone: '081234567890',
  usr_avatar: 'https://example.com/avatar.jpg',
  usr_date_of_birth: new Date('1990-01-01'),
  usr_sex: 'male',
  usr_role: 'shop',
  usr_status: 'active',
};

export const getAllProfiles = async (req: Request, res: Response, next: NextFunction) => {
  try {
    ResponseHandler.success(res, profiles, 'View Any Profiles successfully');
  } catch (error) {
    next(error);
  }
};

export const getOwnProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    ResponseHandler.success(res, profile, 'View Own Profile successfully');
  } catch (error) {
    next(error);
  }
};
