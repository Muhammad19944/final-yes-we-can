import { useServerHttp } from '~/server/composables/useServerHttp'
import type { ProjectModelResponseEntity } from '~/shared/types/project'

export default defineEventHandler(async (event) => {
  const http = useServerHttp(event)
  const params = getRouterParams(event)

  return await http<ProjectModelResponseEntity>(`job/${params.slug}/`, {
    method: 'get'
  })
})
