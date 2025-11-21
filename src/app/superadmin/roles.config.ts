import {Calendar, CalendarCheck, ClipboardList, Crown} from "lucide-react"
import {Roles} from "./roles.type"

export interface RolesConfig {
  role: Roles
  icon: typeof Crown
  activeColor: string // Full Tailwind CSS classes for active state
  isEditable?: boolean // false for roles that can only be edited via Clerk Portal
}

// Helper function to generate inactive color classes (always the same)
export function getInactiveColorClasses(): string {
  return 'bg-gray-100 hover:bg-gray-200 text-gray-400 border-gray-300 hover:text-gray-600 hover:border-gray-400'
}

// !!! Roles müssen auch in globals.d.ts gepflegt werden !!!

export const roleConfigs: RolesConfig[] = [
  {
    role: 'pd_superadmin',
    icon: Crown,
    activeColor: 'bg-red-600 hover:bg-red-700 text-white border-red-600 shadow-md hover:shadow-lg',
    isEditable: false // Can only be edited via Clerk Portal for security reasons
  },
  {
    role: 'pd_planner',
    icon: ClipboardList,
    activeColor: 'bg-blue-600 hover:bg-blue-700 text-white border-blue-600 shadow-md hover:shadow-lg',
    isEditable: true
  },
  {
    role: 'pd_calc',
    icon: Calendar,
    activeColor: 'bg-green-600 hover:bg-green-700 text-white border-green-600 shadow-md hover:shadow-lg',
    isEditable: true
  },
  {
    role: 'pd_mypd',
    icon: CalendarCheck,
    activeColor: 'bg-yellow-600 hover:bg-yellow-700 text-white border-yellow-600 shadow-md hover:shadow-lg',
    isEditable: true
  }
]
