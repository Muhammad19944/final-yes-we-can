import { useServerHttp } from '~/server/composables/useServerHttp'

interface ModelEntity {
  email: string
  password: number
}

interface ModelRequestEntity extends ModelEntity {
  password2: number
}

interface ModelResponseEntity {
  detail: string
}

export default defineEventHandler(async (event) => {
  const http = useServerHttp(event)
  const body: ModelRequestEntity = await readBody(event)

  const { detail } = await http<ModelResponseEntity>(`account/change-password/`, {
    method: 'put',
    body
  })

  return { detail }
})
