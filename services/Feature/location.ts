import { useApiFetch } from '~/composables/useServerFetch'
import type { ApiResponseEntity } from '~/types/utils'

export interface LocationEntity {
  id?: number
  continent?: string
  country?: string
  city?: string
}

export const getLocation = async () => {
  return await useApiFetch<ApiResponseEntity<LocationEntity[]>>('/feature/profession/')
}
