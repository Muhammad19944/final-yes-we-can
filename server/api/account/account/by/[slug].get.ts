import { useServerHttp } from '~/server/composables/useServerHttp'
import type { AccountModelEntity } from '~/shared/types/account'

export default defineEventHandler(async (event) => {
  const http = useServerHttp(event)
  const params = getRouterParams(event)

  return await http<AccountModelEntity>(`account/${params.slug}/`, {
    method: 'get'
  })
})
