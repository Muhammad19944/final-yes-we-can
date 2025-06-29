import type { UseFetchOptions } from 'nuxt/app'

export const useApiFetch = <T>(url: string | (() => string), options: UseFetchOptions<T> = {}) => {
  const token = useCookie<string | null>('Authorization')

  return useFetch(url, {
    baseURL: 'https://api-dev.cando.uz/api/v1',
    headers: {
      Accept: 'application/json',
      ...(token.value && { Authorization: `Bearer ${token.value}` })
    },
    ...options
  })
}
