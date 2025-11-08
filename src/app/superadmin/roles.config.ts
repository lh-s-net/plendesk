import {Calendar, CalendarCheck, ClipboardList, Crown} from "lucide-react"
import {Roles} from "./roles.type"

export interface RolesConfig {
  role: Roles
  label: string
  icon: typeof Crown
  activeColor: string
  hoverColor: string
  inactiveColor: string
  isEditable?: boolean // false for roles that can only be edited via Clerk Portal
}

// !!! Roles müssen auch in globals.d.ts gepflegt werden !!!

export const roleConfigs: RolesConfig[] = [
  {
    role: 'pd_superadmin',
    label: 'pd_superadmin',
    icon: Crown,
    activeColor: 'bg-red-600 hover:bg-red-700 text-white border-red-600 shadow-md hover:shadow-lg',
    hoverColor: 'text-white',
    inactiveColor: 'bg-gray-100 hover:bg-gray-200 text-gray-400 border-gray-300 hover:text-gray-600 hover:border-gray-400',
    isEditable: false // Can only be edited via Clerk Portal for security reasons
  },
  {
    role: 'pd_planner',
    label: 'pd_planner',
    icon: ClipboardList,
    activeColor: 'bg-blue-600 hover:bg-blue-700 text-white border-blue-600 shadow-md hover:shadow-lg',
    hoverColor: 'text-white',
    inactiveColor: 'bg-gray-100 hover:bg-gray-200 text-gray-400 border-gray-300 hover:text-gray-600 hover:border-gray-400'
  },
  {
    role: 'pd_cal',
    label: 'pd_cal',
    icon: Calendar,
    activeColor: 'bg-green-600 hover:bg-green-700 text-white border-green-600 shadow-md hover:shadow-lg',
    hoverColor: 'text-white',
    inactiveColor: 'bg-gray-100 hover:bg-gray-200 text-gray-400 border-gray-300 hover:text-gray-600 hover:border-gray-400'
  },
  {
    role: 'pd_mypd',
    label: 'pd_mypd',
    icon: CalendarCheck,
    activeColor: 'bg-purple-600 hover:bg-purple-700 text-white border-purple-600 shadow-md hover:shadow-lg',
    hoverColor: 'text-white',
    inactiveColor: 'bg-gray-100 hover:bg-gray-200 text-gray-400 border-gray-300 hover:text-gray-600 hover:border-gray-400'
  }
]
