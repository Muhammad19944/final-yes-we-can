import type { Ref } from 'vue'
import type { OptionEntity } from '~/types/utils'

export interface ProfessionEntity extends OptionEntity {
  technologies: OptionEntity[]
}

export interface FeatureStoreEntity {
  profession: Ref<ProfessionEntity[]>
  // technology: Ref<OptionEntity[]>
  getProfession: () => Promise<void>
  // getTechnology: (search: string | undefined) => Promise<ProfessionEntity[]>
}
