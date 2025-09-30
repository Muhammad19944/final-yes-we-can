import { useServerHttp } from '~/server/composables/useServerHttp'
import type { ProjectCreateRequestEntity, ProjectCreateResponseEntity } from '~/shared/types/project'

export default defineEventHandler(async (event) => {
  const http = useServerHttp(event)
  const body: ProjectCreateRequestEntity = await readBody(event)

  return await http<ProjectCreateResponseEntity>(`job/create/`, {
    method: 'post',
    body
  })
})
