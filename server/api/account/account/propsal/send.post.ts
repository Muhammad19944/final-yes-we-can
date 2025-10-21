import { useServerHttp } from '~/server/composables/useServerHttp'

interface SendCodeRequestEntity {
  email: string
  forget: boolean
}

interface SendCodeResponseEntity {
  message: string
}

export default defineEventHandler(async (event) => {
  const http = useServerHttp(event)
  const body: SendCodeRequestEntity = await readBody(event)

  return await http<SendCodeResponseEntity>(`account/submit-proposal/`, {
    method: 'post',
    body
  })
})
