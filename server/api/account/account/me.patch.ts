import { useServerHttp } from '~/server/composables/useServerHttp'
import type { UserModelEntity } from '~/shared/types/user'

export default defineEventHandler(async (event) => {
  const http = useServerHttp(event)
  const body: UserModelEntity = await readBody(event)

  console.log('body', body)

  // const response = await http<UserModelEntity>(`account/me/`, {
  //   method: 'patch',
  //   body
  // })

  return 201
  // return response
})
