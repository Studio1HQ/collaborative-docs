'use server';

import { PERMITIO_CLIENT } from '@/lib/permitio';

// permit.io actions

interface User {
  email: string;
  key: string;
}

interface ResourceInstance {
  key: string;
  resource: string;
}

interface ResourceInstanceRole {
  user: string;
  role: string;
  resource_instance: string;
}

interface ResourcePermission {
  user: string;
  resource_instance: string;
  permission: string;
}

/**
 *
 * @param user `{email: string, key: string}`
 */
export async function syncUserWithPermit(user: User) {
  try {
    const syncedUser = await PERMITIO_CLIENT.api.syncUser(user);

    console.log('User synced with permit.io', syncedUser.email);
  } catch (error) {
    console.error(error);
  }
}

/**
 *
 * @param resourceInstance `{key: string, resource: string}`
 * @returns createdInstance
 */
export async function createResourceInstance(
  resourceInstance: ResourceInstance
) {
  console.log('Creating a resource instance...');
  try {
    const createdInstance = await PERMITIO_CLIENT.api.resourceInstances.create({
      key: resourceInstance.key,
      tenant: 'default',
      resource: resourceInstance.resource,
    });

    console.log(`Resource instance created: ${createdInstance.key}`);
    return createdInstance;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log('An unknown error occurred');
    }

    return null;
  }
}

/**
 *
 * @param resourceInstanceRole `{user: string, role: string, resource_instance: string}`
 * @returns assignedRole
 */
export async function assignResourceInstanceRoleToUser(
  resourceInstanceRole: ResourceInstanceRole
) {
  try {
    const assignedRole = await PERMITIO_CLIENT.api.roleAssignments.assign({
      user: resourceInstanceRole.user,
      role: resourceInstanceRole.role,
      resource_instance: resourceInstanceRole.resource_instance,
      tenant: 'default',
    });

    console.log(`Role assigned: ${assignedRole.role} to ${assignedRole.user}`);

    return assignedRole;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log('An unknown error occurred');
    }

    return null;
  }
}

/**
 *
 * @param resourcePermission `{user: string, resource_instance: string, permission: string}`
 * @returns permitted
 */
export async function checkResourcePermission(
  resourcePermission: ResourcePermission
) {
  try {
    const permitted = await PERMITIO_CLIENT.check(
      resourcePermission.user,
      resourcePermission.permission,
      resourcePermission.resource_instance
    );

    return permitted;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log('An unknown error occurred');
    }

    return false;
  }
}