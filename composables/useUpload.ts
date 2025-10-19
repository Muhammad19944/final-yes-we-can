import { useClientFetch } from '~/composables/useClientFetch'

export interface UploadResponseEntity {
  id: number
  file: string
  path: string
  extension: string
  name: string
  size: number
}

export interface MockupsEntity {
  file?: File
  path?: string
}

export type FileType = UploadResponseEntity | MockupsEntity

export const useUpload = () => {
  const upload = async (files: FileList): Promise<UploadResponseEntity[]> => {
    const formData = new FormData()
    const collection: UploadResponseEntity[] = []

    for (const file of files) {
      formData.append('file', file)

      const data = await useClientFetch<UploadResponseEntity>('/api/feature/upload/', {
        method: 'post',
        body: file
      })

      collection.push(data)
    }

    return collection
  }

  const mockup = async (files: FileList): Promise<MockupsEntity[]> => {
    const collection: MockupsEntity[] = []

    for (const file of files) {
      const path = await new Promise<string>((resolve) => {
        const reader = new FileReader()

        reader.onload = () => {
          resolve(URL.createObjectURL(file))
        }
        reader.readAsDataURL(file)
      })

      collection.push({ file, path })
    }

    return collection
  }

  const isUploadFile = (file: FileType): file is UploadResponseEntity => 'id' in file

  const fileToFileList = (files: File[]): FileList => {
    const dataTransfer = new DataTransfer()

    files.forEach((file) => dataTransfer.items.add(file))

    return dataTransfer.files
  }

  return {
    upload,
    mockup,
    isUploadFile,
    fileToFileList
  }
}
