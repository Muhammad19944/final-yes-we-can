import type { ProjectModelRequestEntity } from '~/shared/types/project'

const projectModel = {
  price: '',
  price_from: '',
  price_to: '',
  type: '',
  duration: '',
  size: '',
  title: '',
  profession: '',
  step: '',
  location: '',
  technologies: [],
  files: []
}

export const useProjectStore = defineStore('useProjectStore', () => {
  const projectRequest = ref<ProjectModelRequestEntity>(JSON.parse(JSON.stringify(projectModel)))

  const fetchProjectGetById = async (id: string) => {
    const data = await useClientFetch(`/api/project/by/${id}`, {
      method: 'get'
    })

    projectRequest.value = JSON.parse(JSON.stringify(data))
  }

  const actionProjectResetModel = () => {
    projectRequest.value = JSON.parse(JSON.stringify(projectModel))
  }

  return {
    projectRequest,
    fetchProjectGetById,
    actionProjectResetModel
  }
})
