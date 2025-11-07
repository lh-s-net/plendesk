import {auth} from '@clerk/nextjs/server'
import { Roles } from "../types/globals"

export const checkRole = async (role: Roles) => {
  const {sessionClaims} = await auth()
  const userRoles = sessionClaims?.publicMetadata?.roles || []
  return userRoles.includes(role)
}