import type { AccountModelEntity } from '~/shared/types/account'

export const defaultAccount = {
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
    balance: 0,
    connection: 0
  },
  phone: undefined,
  role: undefined
}

export const useAccountStore = defineStore('useAccountStore', () => {
  const account = ref<AccountModelEntity>(JSON.parse(JSON.stringify(defaultAccount)))
  const accountById = ref<AccountModelEntity>(JSON.parse(JSON.stringify(defaultAccount)))

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

  const fetchGetAccountById = async (id: number = 0) => {
    const { data } = await useFetch<AccountModelEntity>(`/api/account/account/by/${id}`, { method: 'get' })

    if (data.value) {
      accountById.value = data.value
    }
  }

  const actionResetAccountByIdModel = () => {
    accountById.value = JSON.parse(JSON.stringify(defaultAccount))
  }

  const logOut = () => {
    account.value = JSON.parse(JSON.stringify(defaultAccount))
  }

  const actionAccountName = (model: AccountModelEntity) => {
    if (model.last_name || model.first_name) {
      return `${model.first_name} ${model.last_name}`
    }

    return model.username
  }

  return {
    account,
    accountById,
    isLoggedIn,
    isCustomer,
    isDeveloper,
    accountName,
    getAccount,
    fetchGetAccountById,
    actionResetAccountByIdModel,
    logOut,
    actionAccountName
  }
})
