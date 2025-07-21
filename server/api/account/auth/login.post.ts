import { useServerHttp } from '~/server/composables/useServerHttp'

interface LoginRequestEntity {
  email: string
  password: string
}

export default defineEventHandler(async (event) => {
  const http = useServerHttp(event)
  const body = await readBody(event)

  const response = await http<LoginRequestEntity>(`account/login/`, {
    method: 'post',
    body
  })

  console.log('response', response)
})
