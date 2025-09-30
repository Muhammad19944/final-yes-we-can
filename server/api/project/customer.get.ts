import { useServerHttp } from '~/server/composables/useServerHttp'
import type { ProjectModelResponseEntity, ProjectCustomerFilterEntity } from '~/shared/types/project'
import type { FetchResponseWrapperEntity } from '~/shared/types/utils'

export default defineEventHandler(async (event) => {
  const http = useServerHttp(event)
  const query: ProjectCustomerFilterEntity = getQuery(event)

  return await http<FetchResponseWrapperEntity<ProjectModelResponseEntity>>(`job/my/`, {
    method: 'get',
    query
  })
})
