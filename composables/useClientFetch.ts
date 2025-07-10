import type { NitroFetchRequest, NitroFetchOptions } from 'nitropack'

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
  const { runWithContext } = useNuxtApp()
  const token = useCookie<string | null>('Authorization')

  const api = $fetch.create({
    baseURL: 'https://api-dev.cando.uz/api/v1',
    headers: {
      Accept: 'application/json',
      ...(token.value && { Authorization: `Bearer ${token.value}` })
    } as HeadersInit,
    async onResponseError({ response }) {
      // if (response.status === 401) {
      //   await runWithContext(() => navigateTo('/auth/login'))
      // }
    }
  })

  return await api<T>(url, options)
}
