import type { CookieEntity } from '~/shared/types/cookie'
import { Token, Locale } from '~/shared/const'

export default defineEventHandler(async (event) => {
  return {
    [Token.Access]: getCookie(event, Token.Access),
    [Token.Refresh]: getCookie(event, Token.Refresh),
    [Token.Expires]: getCookie(event, Token.Expires),
    [Token.Account]: getCookie(event, Token.Account),
    Locale: getCookie(event, Locale)
  } as CookieEntity
})
