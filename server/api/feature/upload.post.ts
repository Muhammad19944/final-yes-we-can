import { useServerHttp } from '~/server/composables/useServerHttp'

export interface UploadResponseEntity {
  id: number
  file: string
  path: string
  extension: string
  name: string
  size: number
}

export default defineEventHandler(async (event) => {
  const http = useServerHttp(event)
  const body = await readMultipartFormData(event)

  return await http<UploadResponseEntity>(`feature/upload/`, {
    method: 'post',
    body
  })
})
