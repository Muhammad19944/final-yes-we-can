import { useServerHttp } from '~/server/composables/useServerHttp'
import type { FetchResponseWrapperEntity } from '~/shared/types/utils'
import type { ProfessionModelEntity } from '~/shared/types/profession'

export default defineEventHandler(async (event) => {
  const http = useServerHttp(event)

  return await http<FetchResponseWrapperEntity<ProfessionModelEntity>>(`feature/profession/`, { method: 'get' })
})
