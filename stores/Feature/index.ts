import { useApiFetch } from '~/composables/useApiFetch'
import type { ApiResponseEntity } from '~/types/utils'
import type { FeatureStoreEntity, ProfessionEntity } from './types'

export const useFeatureStore = defineStore('useFeatureStore', (): FeatureStoreEntity => {
  const profession = ref<ProfessionEntity[]>([])

  const getProfession = async () => {
    const { data } = await useApiFetch<ApiResponseEntity<ProfessionEntity>>('/feature/profession/')

    if (data.value) {
      profession.value = data.value?.results
    }
  }

  return {
    profession,
    getProfession
  }
})
