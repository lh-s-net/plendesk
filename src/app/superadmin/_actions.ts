'use server'

import {clerkClient} from '@clerk/nextjs/server'
import { checkRole } from "./roles"
import { Roles } from "./roles.type"

export async function setRole(formData: FormData): Promise<void> {
  // Check that the user trying to set the role is a superadmin
  if (!(await checkRole('superadmin'))) {
    throw new Error('Not Authorized')
  }

  try {
    const userId = formData.get('id') as string
    const newRole = formData.get('role') as string
    
    // Get current user to access existing roles
    const client = await clerkClient()
    const user = await client.users.getUser(userId)
    const currentRoles = (user.publicMetadata.roles as string[]) || ['user']
    
    // Add new role to roles array if not already present
    const updatedRoles = currentRoles.includes(newRole) 
      ? currentRoles 
      : [...currentRoles.filter(role => role !== 'user'), newRole] // Remove 'user' when adding specific roles
    
    await client.users.updateUserMetadata(userId, {
      publicMetadata: { roles: updatedRoles },
    })
  } catch (err) {
    console.error('Error setting role:', err)
    throw new Error('Failed to set role')
  }
}

export async function removeRole(formData: FormData): Promise<void> {
  // Check that the user trying to remove the role is a superadmin
  if (!(await checkRole('superadmin'))) {
    throw new Error('Not Authorized')
  }

  try {
    const userId = formData.get('id') as string
    
    // Get current user to access existing roles
    const client = await clerkClient()
    const user = await client.users.getUser(userId)
    const currentRoles = (user.publicMetadata.roles as string[]) || ['user']
    
    // Remove all special roles, keep only 'user' or default to ['user']
    const validRoles: Roles[] = ['superadmin', 'member', 'pd_planner', 'pd_cal', 'pd_mypd']
    const updatedRoles = currentRoles.filter(role => !validRoles.includes(role as Roles))
    const finalRoles = updatedRoles.length > 0 ? updatedRoles : ['user']
    
    await client.users.updateUserMetadata(userId, {
      publicMetadata: { roles: finalRoles },
    })
  } catch (err) {
    console.error('Error removing role:', err)
    throw new Error('Failed to remove role')
  }
}

export async function toggleRole(formData: FormData): Promise<void> {
  // Check that the user trying to toggle the role is a superadmin
  if (!(await checkRole('superadmin'))) {
    throw new Error('Not Authorized')
  }

  try {
    const userId = formData.get('id') as string
    const roleToToggle = formData.get('role') as string
    
    const validRoles: Roles[] = ['superadmin', 'member', 'pd_planner', 'pd_cal', 'pd_mypd']
    if (!validRoles.includes(roleToToggle as Roles)) {
      throw new Error('Invalid role')
    }
    
    // Get current user to access existing roles
    const client = await clerkClient()
    const user = await client.users.getUser(userId)
    const currentRoles = (user.publicMetadata.roles as string[]) || ['user']
    
    let updatedRoles: string[]
    
    if (currentRoles.includes(roleToToggle)) {
      // Remove the role
      updatedRoles = currentRoles.filter(role => role !== roleToToggle)
      // Remove 'user' role if it exists, as users can have no roles
      updatedRoles = updatedRoles.filter(role => role !== 'user')
    } else {
      // Add the role
      updatedRoles = [...currentRoles.filter(role => role !== 'user'), roleToToggle]
    }
    
    await client.users.updateUserMetadata(userId, {
      publicMetadata: { roles: updatedRoles },
    })
  } catch (err) {
    console.error('Error toggling role:', err)
    throw new Error('Failed to toggle role')
  }
}

export async function deleteUser(formData: FormData): Promise<void> {
  // Check that the user trying to delete is a superadmin
  if (!(await checkRole('superadmin'))) {
    throw new Error('Not Authorized')
  }

  try {
    const userId = formData.get('id') as string
    
    if (!userId) {
      throw new Error('User ID is required')
    }
    
    const client = await clerkClient()
    await client.users.deleteUser(userId)
  } catch (err) {
    console.error('Error deleting user:', err)
    throw new Error('Failed to delete user')
  }
}
