import type { H3Event } from 'h3'
import { isBackendError } from '~/server/types/error'
import { Token, Locale } from '~/shared/const'

export const useServerHttp = (event: H3Event) => {
  const accessToken = getCookie(event, Token.Access)
  const locale = getCookie(event, Locale) || 'uz'

  console.log('accessToken', accessToken)

  return $fetch.create({
    baseURL: 'https://api-dev.cando.uz/api/v1/',
    headers: {
      Accept: 'application/json',
      'Accept-Language': locale,
      Authorization: accessToken ? `Bearer ${accessToken}` : ''
    } as HeadersInit,
    onResponseError({ response }) {
      if (isBackendError(response?._data)) {
        const errors = response?._data.errors

        throw createError({
          statusCode: response.status,
          message: errors.map((e) => e.detail).join('|')
        })
      }
    }
  })
}
