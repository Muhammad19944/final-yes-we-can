import { useServerHttp } from '~/server/composables/useServerHttp'
import type { PrePublishStepTypes } from '~/shared/types/project'

interface RequestEntity {
  body: {
    technologies: number[]
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
      technologies: body.technologies,
      step
    }
  })
})
