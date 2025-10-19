import type { AccountModelEntity } from '~/shared/types/account'

const defaultAccount = {
  username: undefined,
  first_name: undefined,
  last_name: undefined,
  email: undefined,
  info: {
    avatar: undefined,
    profession: undefined,
    location: undefined,
    visible: true,
    level: undefined,
    technologies: [],
    balance: 0
  },
  phone: undefined,
  role: undefined
}

export const useAccountStore = defineStore('useAccountStore', () => {
  const account = ref<AccountModelEntity>(JSON.parse(JSON.stringify(defaultAccount)))

  const isLoggedIn = computed(() => account.value.email)
  const isCustomer = computed(() => account.value.role === 'customer')
  const isDeveloper = computed(() => account.value.role === 'developer')
  const accountName = computed(() => {
    if (account.value?.last_name || account.value?.first_name) {
      return `${account.value.first_name} ${account.value.last_name}`
    }

    return account.value?.username
  })

  const getAccount = async () => {
    const { data } = await useFetch<AccountModelEntity>('/api/account/account/me', { method: 'get' })

    if (data.value) {
      account.value = data.value
    }
  }

  const logOut = () => {
    account.value = JSON.parse(JSON.stringify(defaultAccount))
  }

  return {
    account,
    isLoggedIn,
    isCustomer,
    isDeveloper,
    accountName,
    getAccount,
    logOut
  }
})
