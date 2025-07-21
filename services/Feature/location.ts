import { useClientFetch } from '~/composables/useClientFetch'
import type { ApiResponseEntity } from '~/types/utils'

export interface LocationEntity {
  id?: number
  continent?: string
  country?: string
  city?: string
}

export const getLocation = async () => {
  return await useClientFetch<ApiResponseEntity<LocationEntity[]>>('/feature/profession/')
}
