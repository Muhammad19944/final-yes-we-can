import { Token } from '~/shared/const'

export default defineEventHandler(async (event) => {
  deleteCookie(event, Token.Access)
  deleteCookie(event, Token.Refresh)
  deleteCookie(event, Token.Expires)
  deleteCookie(event, Token.Account)

  return 200
})
