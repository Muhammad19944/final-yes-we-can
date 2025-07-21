import type { AccountModelEntity } from '~/shared/types/account'

export const useAccountStore = defineStore('useAccountStore', () => {
  const account = ref<AccountModelEntity | null>(null)

  const getAccount = async () => {
    try {
      account.value = await useClientFetch<AccountModelEntity>('/api/account/account/me', { method: 'get' })
    } catch (error) {
      console.error('Error fetching user:', error)
    }
  }

  return {
    account,
    getAccount
  }
})
