import { useServerHttp } from '~/server/composables/useServerHttp'
import { Token } from '~/shared/const'

interface LoginRequestEntity {
  email: string
  password: string
}

interface LoginResponseEntity {
  access: string
  refresh: string
  expires_in: string
  account_id: string
}

export default defineEventHandler(async (event) => {
  const http = useServerHttp(event)
  const body: LoginRequestEntity = await readBody(event)

  const { access, refresh, expires_in, account_id } = await http<LoginResponseEntity>(`account/login/`, {
    method: 'post',
    body
  })

  setCookie(event, Token.Access, access)
  setCookie(event, Token.Refresh, refresh)
  setCookie(event, Token.Expires, expires_in)
  setCookie(event, Token.Account, account_id)

  return {
    access,
    refresh,
    expires_in,
    account_id
  }
})
