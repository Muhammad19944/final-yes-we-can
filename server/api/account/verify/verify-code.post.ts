import { useServerHttp } from '~/server/composables/useServerHttp'

interface VerifyCodeRequestEntity {
  email: string
  code: string
}

interface VerifyCodeResponseEntity {
  account_id: string
  email: string
}

export default defineEventHandler(async (event) => {
  const http = useServerHttp(event)
  const body: VerifyCodeRequestEntity = await readBody(event)

  const { account_id, email } = await http<VerifyCodeResponseEntity>(`account/verify-code/`, {
    method: 'post',
    body
  })

  return {
    account_id,
    email
  }
})
