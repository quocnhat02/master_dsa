import { AccessControl } from 'accesscontrol';

export const grantList = [
  {
    role: 'admin',
    resource: 'profile',
    action: 'read:any',
    attributes: '*, !views',
  },
  {
    role: 'shop',
    resource: 'profile',
    action: 'read:own',
    attributes: '*',
  },
];

export const ac = new AccessControl(grantList);
