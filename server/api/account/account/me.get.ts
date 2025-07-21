import { useServerHttp } from '~/server/composables/useServerHttp'
import type { UserModelEntity } from '~/shared/types/user'

export default defineEventHandler(async (event) => {
  const http = useServerHttp(event)
  const body: UserModelEntity = await readBody(event)

  const response = await http<UserModelEntity>(`account/me/`, {
    method: 'get',
    body
  })

  return response
})
