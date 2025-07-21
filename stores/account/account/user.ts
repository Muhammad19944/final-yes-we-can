import type { UserModelEntity } from '~/shared/types/user'

export const useUserStore = defineStore('useUserStore', () => {
  const account = ref<UserModelEntity | null>(null)

  const getAccount = async () => {
    try {
      const response = await useClientFetch<UserModelEntity>('/api/account/account/me', {
        method: 'get'
      })

      account.value = response

      console.log('User fetched:', response)
    } catch (error) {
      console.error('Error fetching user:', error)
    }
  }

  return {
    account,
    getAccount
  }
})
