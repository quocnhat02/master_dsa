import { IResource } from '../interfaces';
import Resource from '../models/Resource';
import Role from '../models/Role';
/**
 * Create a new resource
 * @param {string} name - The name of the resource
 * @param {string} slug - The slug of the resource
 * @param {string} description - The description of the resource
 * @returns {IResource} resource - The resource
 */
export const createResource = async ({ name, slug, description }: IResource) => {
  try {
    if (!name || !slug || !description) {
      throw new Error('All fields are required');
    }
    if (await Resource.findOne({ src_slug: slug })) {
      throw new Error('Resource already exists');
    }
    const resource = await Resource.create({
      src_name: name,
      src_slug: slug,
      src_description: description,
    });
    return resource;
  } catch (error) {
    throw error;
  }
};

/**
 * Get list of resources
 * @param {number} userId - The id of the user
 * @param {number} limit - The limit of the resources
 * @param {number} offset - The offset of the resources
 * @param {string} search - The search of the resources
 * @returns {IResource[]} list of resources
 */
interface IGetListResource {
  userId?: number;
  limit?: number;
  offset?: number;
  search?: string;
}
export const getListResource = async ({
  userId = 0,
  limit = 30,
  offset = 0,
  search = '',
}: IGetListResource) => {
  try {
    // Check if user exists and is an admin
    // const user = await User.findOne({ usr_id: userId }).populate('usr_role');
    // if (!user) {
    //   throw new Error('User not found');
    // }
    // if (!user.usr_role || (user.usr_role as any).role_name !== 'admin') {
    //   throw new Error('User is not an admin');
    // }

    // Implement search, limit, and offset
    const resources = await Resource.aggregate([
      {
        $project: {
          _id: 0,
          name: '$src_name',
          slug: '$src_slug',
          description: '$src_description',
          resourceId: '$_id',
          createdAt: 1,
        },
      },
    ]);

    return resources;
  } catch (error) {
    return [];
  }
};

/**
 * Create a new role
 * @param {string} name - The name of the role
 * @param {string} slug - The slug of the role
 * @param {string} description - The description of the role
 * @param {any} grants - The grants of the role
 * @returns {IRole} role - The role
 */
interface ICreateRole {
  name: string;
  slug: string;
  description: string;
  grants: any;
}
export const createRole = async ({
  name = 'shop',
  slug = 's00001',
  description = 'extend from shop or user',
  grants = [],
}: ICreateRole) => {
  try {
    //   check if role is exist
    const role = await Role.findOne({ rol_slug: slug });
    if (role) {
      throw new Error('Role already exists');
    }

    const newRole = await Role.create({
      rol_name: name,
      rol_slug: slug,
      rol_description: description,
      rol_grants: grants,
    });
    return newRole;
  } catch (error) {
    return error;
  }
};

/**
 * Get list of roles
 * @returns {IRole[]} list of roles
 */
interface IGetListRoles {
  userId?: number;
  limit?: number;
  offset?: number;
  search?: string;
}
export const getListRoles = async ({
  userId = 0,
  limit = 30,
  offset = 0,
  search = '',
}: IGetListRoles) => {
  try {
    // Check if user exists and is an admin
    // const user = await User.findOne({ usr_id: userId }).populate('usr_role');
    // if (!user) {
    //   throw new Error('User not found');
    // }
    // if (!user.usr_role || (user.usr_role as any).role_name !== 'admin') {
    //   throw new Error('User is not an admin');
    // }
    const roles = await Role.aggregate([
      {
        $unwind: '$rol_grants',
      },
      {
        $lookup: {
          from: 'resources',
          localField: 'rol_grants.resource',
          foreignField: '_id',
          as: 'resource',
        },
      },
      {
        $unwind: '$resource',
      },
      {
        $project: {
          role: '$rol_name',
          slug: '$rol_slug',
          description: '$rol_description',
          resource: '$resource.src_name',
          action: '$rol_grants.actions',
          attributes: '$rol_grants.attributes',
        },
      },
      {
        $unwind: '$action',
      },
      {
        $project: {
          _id: 0,
          role: 1,
          resource: 1,
          action: '$action',
          attributes: 1,
        },
      },
    ]);

    return roles;
  } catch (error) {
    return [];
  }
};
