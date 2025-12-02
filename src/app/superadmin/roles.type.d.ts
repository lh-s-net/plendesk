export {}

// Create a type for the roles
export type Roles = 'pd_superadmin' | 'pd_planner' | 'pd_calc' | 'pd_mypd'

declare global {
  interface CustomJwtSessionClaims {
    publicMetadata: {
      roles?: Roles[]
    }
  }
}
