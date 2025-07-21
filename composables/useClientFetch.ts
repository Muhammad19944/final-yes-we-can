import type { NitroFetchRequest, NitroFetchOptions } from 'nitropack'
import { Locale, Token } from '~/shared/const'

export const useClientFetch = async <
  DefaultT = unknown,
  DefaultR extends NitroFetchRequest = NitroFetchRequest,
  T = DefaultT,
  R extends NitroFetchRequest = DefaultR,
  C extends NitroFetchOptions<R> = NitroFetchOptions<R>
>(
  url: R,
  options?: C & { onUploadProgress?: (progressEvent: ProgressEvent) => void }
) => {
  const { runWithContext, $toast } = useNuxtApp()
  const accessToken = useCookie(Token.Access)
  const locale = useCookie(Locale) || 'uz'

  const api = $fetch.create({
    headers: {
      Accept: 'application/json',
      'Accept-Language': locale.value,
      Authorization: accessToken.value ? `Bearer ${accessToken.value}` : ''
    } as HeadersInit,
    async onResponseError({ response }) {
      const message = response?._data.message
      const splitMessage = (message as string).split('|')

      if (response.status === 401) {
        await runWithContext(() => navigateTo('/auth/login'))
      }

      for (const text in splitMessage) {
        $toast({ title: splitMessage[text], color: 'error', icon: 'i-heroicons-exclamation-triangle' })
      }

      throw createError({
        statusCode: response.status,
        message: message ?? 'Unexpected error'
      })
    }
  })

  return await api<T>(url, options)
}
