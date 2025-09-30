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
    technologies: []
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

    // const { data } = await useFetch<AccountModelEntity>('https://api-dev.cando.uz/api/v1/account/me/', {
    //   headers: {
    //     Authorization:
    //       'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzUzMjYyMDE5LCJpYXQiOjE3NTMxNzU2MTksImp0aSI6IjIwZGU0MzVlNjNmNDRkYzE5YmZmOGQ4ZTA5MjZlZDE2IiwidXNlcl9pZCI6OX0.yTPbfuxYiCynHPkapJIKSjjy4RkidWFO56pLUCE0XuU'
    //   },
    //   method: 'get'
    // })
    // console.log('data.value', data.value)

    // if (data.value) {
    //   account.value = data.value
    // }
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
