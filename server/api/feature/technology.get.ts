import { useServerHttp } from '~/server/composables/useServerHttp'
import type { FetchResponseWrapperEntity, OptionEntity } from '~/shared/types/utils'

export default defineEventHandler(async (event) => {
  const http = useServerHttp(event)

  return await http<FetchResponseWrapperEntity<OptionEntity>>(`feature/technology/`, { method: 'get' })
})
