import type { H3Event } from 'h3'
import { isBackendError } from '~/server/types/error'

export const useServerHttp = (event: H3Event) => {
  const accessToken = getCookie(event, 'access_token')
  const currentLanguage = getCookie(event, 'current_language')

  return $fetch.create({
    baseURL: 'https://api-dev.cando.uz/api/v1/',
    headers: {
      Accept: 'application/json',
      'Accept-Language': currentLanguage ?? 'uz',
      ...(accessToken && { Authorization: `Bearer ${accessToken}` })
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
