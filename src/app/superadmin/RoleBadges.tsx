'use client'

import { useState, useTransition } from 'react'
import { Badge } from "@/components/ui/badge"
import { Crown, Shield, Users } from "lucide-react"
import { toggleRole } from './_actions'

interface RoleBadgesProps {
  userId: string
  userRoles: string[]
}

export function RoleBadges({ userId, userRoles: initialRoles }: RoleBadgesProps) {
  const [userRoles, setUserRoles] = useState<string[]>(initialRoles)
  const [isPending, startTransition] = useTransition()

  const handleRoleToggle = (roleToToggle: string) => {
    // Optimistic update - immediately update the UI
    const currentlyHasRole = userRoles.includes(roleToToggle)
    let newRoles: string[]
    
    if (currentlyHasRole) {
      // Remove the role
      newRoles = userRoles.filter(role => role !== roleToToggle)
      // Remove 'user' role if it exists, as users can have no roles
      newRoles = newRoles.filter(role => role !== 'user')
    } else {
      // Add the role
      newRoles = [...userRoles.filter(role => role !== 'user'), roleToToggle]
    }
    
    setUserRoles(newRoles)

    // Then perform the server action
    startTransition(async () => {
      try {
        const formData = new FormData()
        formData.append('id', userId)
        formData.append('role', roleToToggle)
        await toggleRole(formData)
      } catch (error) {
        // If server action fails, revert the optimistic update
        setUserRoles(initialRoles)
        console.error('Failed to toggle role:', error)
      }
    })
  }

  return (
    <div className="flex flex-wrap items-center gap-1">
      {/* SuperAdmin Badge */}
      <button 
        onClick={() => handleRoleToggle('superadmin')}
        disabled={isPending}
        className="transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50"
        title={userRoles.includes('superadmin') ? 'Remove SuperAdmin role' : 'Add SuperAdmin role'}
      >
        <Badge 
          className={`flex items-center gap-1 cursor-pointer transition-all duration-200 ${
            userRoles.includes('superadmin') 
              ? 'bg-red-600 hover:bg-red-700 text-white border-red-600 shadow-md hover:shadow-lg' 
              : 'bg-gray-100 hover:bg-gray-200 text-gray-400 border-gray-300 hover:text-gray-600 hover:border-gray-400'
          }`}
        >
          <Crown className={`h-3 w-3 ${userRoles.includes('superadmin') ? 'text-white' : 'text-gray-400'}`} />
          superadmin
        </Badge>
      </button>
      
      {/* Admin Badge */}
      <button 
        onClick={() => handleRoleToggle('admin')}
        disabled={isPending}
        className="transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50"
        title={userRoles.includes('admin') ? 'Remove Admin role' : 'Add Admin role'}
      >
        <Badge 
          className={`flex items-center gap-1 cursor-pointer transition-all duration-200 ${
            userRoles.includes('admin') 
              ? 'bg-blue-600 hover:bg-blue-700 text-white border-blue-600 shadow-md hover:shadow-lg' 
              : 'bg-gray-100 hover:bg-gray-200 text-gray-400 border-gray-300 hover:text-gray-600 hover:border-gray-400'
          }`}
        >
          <Shield className={`h-3 w-3 ${userRoles.includes('admin') ? 'text-white' : 'text-gray-400'}`} />
          admin
        </Badge>
      </button>
      
      {/* Member Badge */}
      <button 
        onClick={() => handleRoleToggle('member')}
        disabled={isPending}
        className="transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50"
        title={userRoles.includes('member') ? 'Remove Member role' : 'Add Member role'}
      >
        <Badge 
          className={`flex items-center gap-1 cursor-pointer transition-all duration-200 ${
            userRoles.includes('member') 
              ? 'bg-green-600 hover:bg-green-700 text-white border-green-600 shadow-md hover:shadow-lg' 
              : 'bg-gray-100 hover:bg-gray-200 text-gray-400 border-gray-300 hover:text-gray-600 hover:border-gray-400'
          }`}
        >
          <Users className={`h-3 w-3 ${userRoles.includes('member') ? 'text-white' : 'text-gray-400'}`} />
          member
        </Badge>
      </button>
    </div>
  )
}