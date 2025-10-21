import { useServerHttp } from '~/server/composables/useServerHttp'
import type { ProjectModelResponseEntity } from '~/shared/types/project'
import type { FetchResponseWrapperEntity } from '~/shared/types/utils'

export default defineEventHandler(async (event) => {
  const http = useServerHttp(event)
  const params = getRouterParams(event)

  return await http<FetchResponseWrapperEntity<ProjectModelResponseEntity>>(`account/${params.slug}/jobs`, {
    method: 'get'
  })
})
