export interface UserModelEntity {
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
  }
  phone?: string
  role?: 'customer' | 'developer'
}
