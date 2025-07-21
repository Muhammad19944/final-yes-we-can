import { useServerHttp } from '~/server/composables/useServerHttp'
import type { AccountModelEntity } from '~/shared/types/account'

export default defineEventHandler(async (event) => {
  const http = useServerHttp(event)
  const body: AccountModelEntity = await readBody(event)

  return await http<AccountModelEntity>(`account/me/`, {
    method: 'patch',
    body
  })
})
