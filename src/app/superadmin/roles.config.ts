import {Calendar, CalendarCheck, ClipboardList, Crown} from "lucide-react"
import {Roles} from "./roles.type"

export interface RolesConfig {
  role: Roles
  icon: typeof Crown
  activeColor: string // Simple color name like 'red', 'blue', 'green', 'purple'
  isEditable?: boolean // false for roles that can only be edited via Clerk Portal
}

// Helper function to generate active color classes from a simple color name
export function getActiveColorClasses(color: string): string {
  return `bg-${color}-600 hover:bg-${color}-700 text-white border-${color}-600 shadow-md hover:shadow-lg`
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
    activeColor: 'red',
    isEditable: false // Can only be edited via Clerk Portal for security reasons
  },
  {
    role: 'pd_planner',
    icon: ClipboardList,
    activeColor: 'blue',
    isEditable: true
  },
  {
    role: 'pd_cal',
    icon: Calendar,
    activeColor: 'green',
    isEditable: true
  },
  {
    role: 'pd_mypd',
    icon: CalendarCheck,
    activeColor: 'purple',
    isEditable: true
  }
]
