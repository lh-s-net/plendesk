'use client'

import { useState, useTransition } from 'react'
import { Badge } from "@/components/ui/badge"
import { toggleRole } from './_actions'
import { roleConfigs } from "./roles.config"

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
      {roleConfigs.map((config) => {
        const Icon = config.icon
        const isActive = userRoles.includes(config.role)
        const isEditable = config.isEditable !== false // Default to true if not specified
        
        // For non-editable roles (like superadmin), render badge without button wrapper
        if (!isEditable) {
          return (
            <Badge 
              key={config.role}
              className={`flex items-center gap-1 cursor-default ${
                isActive ? config.activeColor.replace(/hover:bg-\S+/g, '').replace(/hover:shadow-lg/g, '') : config.inactiveColor.replace(/hover:bg-\S+/g, '').replace(/hover:text-\S+/g, '').replace(/hover:border-\S+/g, '')
              }`}
              title={`${config.label} role (managed via Clerk Portal only)`}
            >
              <Icon className={`h-3 w-3 ${isActive ? 'text-white' : 'text-gray-400'}`} />
              {config.label}
            </Badge>
          )
        }
        
        // For editable roles, render with button wrapper
        return (
          <button 
            key={config.role}
            onClick={() => handleRoleToggle(config.role)}
            disabled={isPending}
            className="transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50"
            title={isActive ? `Remove ${config.label} role` : `Add ${config.label} role`}
          >
            <Badge 
              className={`flex items-center gap-1 cursor-pointer transition-all duration-200 ${
                isActive ? config.activeColor : config.inactiveColor
              }`}
            >
              <Icon className={`h-3 w-3 ${isActive ? 'text-white' : 'text-gray-400'}`} />
              {config.label}
            </Badge>
          </button>
        )
      })}
    </div>
  )
}