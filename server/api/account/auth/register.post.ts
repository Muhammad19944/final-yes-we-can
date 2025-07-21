import { useServerHttp } from '~/server/composables/useServerHttp'

interface RegisterModel {
  email: string
  password: number
}

interface RegisterRequestEntity extends RegisterModel {
  password2: number
}

export default defineEventHandler(async (event) => {
  const http = useServerHttp(event)
  const body: RegisterRequestEntity = await readBody(event)

  const { email, password } = await http<RegisterModel>(`account/register/`, {
    method: 'post',
    body
  })

  return {
    email,
    password
  }
})
