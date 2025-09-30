import { useServerHttp } from '~/server/composables/useServerHttp'
import type { PrePublishStepTypes, ProjectDurationType, ProjectLevelType, ProjectSizeType, ProjectType } from '~/shared/types/project'

interface RequestEntity {
  body: {
    duration: ProjectDurationType
    level: ProjectLevelType
    size: ProjectSizeType
    type: ProjectType
  }
  step: PrePublishStepTypes
  id: string
}

export default defineEventHandler(async (event) => {
  const http = useServerHttp(event)
  const { body, step, id }: RequestEntity = await readBody(event)

  return await http(`job/${id}/`, {
    method: 'patch',
    body: {
      duration: body.duration,
      level: body.level,
      size: body.size,
      type: body.type,
      step
    }
  })
})
