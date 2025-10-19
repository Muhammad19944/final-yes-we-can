export const accountRoleType = ['customer', 'developer'] as const
export type AccountRoleType = (typeof accountRoleType)[number]

export interface AccountModelEntity {
  username?: string
  first_name?: string
  last_name?: string
  email?: string
  info?: {
    avatar?: number
    profession?: string
    location?: number
    visible?: boolean
    level?: string
    technologies?: number[]
    balance?: string
  }
  phone?: string
  role?: AccountRoleType
}
