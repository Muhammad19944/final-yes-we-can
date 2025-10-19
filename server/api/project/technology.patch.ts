import { useServerHttp } from '~/server/composables/useServerHttp'
import type { PrePublishStepTypes } from '~/shared/types/project'
import type { OptionEntity } from '~/shared/types/utils'

interface BaseEntity {
  step: PrePublishStepTypes
}

interface BodyEntity extends BaseEntity {
  body: {
    technologies: OptionEntity[]
  }
  id: string
}

interface RequestEntiry extends BaseEntity {
  technologies: number[]
}

export default defineEventHandler(async (event) => {
  const http = useServerHttp(event)
  const { body, step, id }: BodyEntity = await readBody(event)

  const model: RequestEntiry = {
    step,
    technologies: body.technologies.map((tech) => tech.id)
  }

  return await http(`job/${id}/`, {
    method: 'patch',
    body: model
  })
})
