import { useServerHttp } from '~/server/composables/useServerHttp'
import type { ProjectModelResponseEntity } from '~/shared/types/project'
import type { FetchResponseWrapperEntity } from '~/shared/types/utils'

export default defineEventHandler(async (event) => {
  const http = useServerHttp(event)

  return await http<FetchResponseWrapperEntity<ProjectModelResponseEntity>>(`job/`, {
    method: 'get'
  })
})
