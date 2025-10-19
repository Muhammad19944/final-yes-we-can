import { useServerHttp } from '~/server/composables/useServerHttp'
import type { StepTypes } from '~/shared/types/project'

interface RequestEntity {
  step: StepTypes
  id: string
}

export default defineEventHandler(async (event) => {
  const http = useServerHttp(event)
  const { step, id }: RequestEntity = await readBody(event)

  return await http(`job/${id}/`, {
    method: 'patch',
    body: {
      step
    }
  })
})
