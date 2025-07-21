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

  const { message } = await http<SendCodeResponseEntity>(`account/send-code/`, {
    method: 'post',
    body
  })

  return {
    message
  }
})
