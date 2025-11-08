import {auth} from '@clerk/nextjs/server'
import { Roles } from "./roles.type"

export const checkRole = async (role: Roles) => {
  const {sessionClaims} = await auth()
  const userRoles = sessionClaims?.publicMetadata?.roles || []
  return userRoles.includes(role)
}