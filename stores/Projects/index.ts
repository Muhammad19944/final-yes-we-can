import { useClientFetch } from '~/composables/useClientFetch'
import type { ProjectCreateRequestEntity, ProjectCreateResponseEntity, ProjectRequestEntity } from './types'

export const useProjectStore = defineStore('useProjectStore', () => {
  const projectRequest = ref<ProjectRequestEntity>({})

  const createProject = async ({ title }: ProjectCreateRequestEntity) => {
    await useClientFetch<ProjectCreateResponseEntity>('/job/create/', {
      method: 'post',
      body: title
    })
  }

  const patchProject = async (payload: ProjectRequestEntity) => {
    console.log('payload', payload)
  }

  return {
    projectRequest,
    createProject,
    patchProject
  }
})
