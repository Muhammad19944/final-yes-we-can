import { useServerHttp } from '~/server/composables/useServerHttp'
import type { AccountModelEntity } from '~/shared/types/account'

export default defineEventHandler(async (event) => {
  const http = useServerHttp(event)

  // return {
  //   username: 'ibragimov',
  //   first_name: 'Ibragimov',
  //   last_name: 'Muhammad',
  //   email: 'imuhammadibragimov1994@gmail.com',
  //   info: {
  //     avatar: {
  //       src: 'https://example.com/avatar.png',
  //       alt: 'User Avatar',
  //       text: 'User Avatar'
  //     },
  //     profession: 'Mock Frontend developer',
  //     location: 1,
  //     visible: true,
  //     level: '',
  //     technologies: []
  //   },
  //   phone: '+1234567890',
  //   role: 'developer'
  // }

  return await http<AccountModelEntity>(`account/me/`, {
    method: 'get'
  })
})
