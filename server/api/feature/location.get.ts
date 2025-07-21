import { useServerHttp } from '~/server/composables/useServerHttp'
import type { FetchResponseWrapperEntity } from '~/shared/types/utils'
import type { LocationModelEntity } from '~/shared/types/location'

export default defineEventHandler(async (event) => {
  const http = useServerHttp(event)
  const data = await http<FetchResponseWrapperEntity<LocationModelEntity>>(`feature/location/`, { method: 'get' })

  return {
    ...data,
    results: data.results.map((item) => ({ ...item, label: item.city }))
  }
})
