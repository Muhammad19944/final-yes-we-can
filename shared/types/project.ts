import type { LocationModelEntity } from './location'
import type { OptionEntity } from './utils'
import type { FilterBaseEntity } from './filters'

export type ProjectStatusType = 'draft' | 'announce' | 'contract' | 'closed'

export type ProjectType = 'hourly' | 'salary' | 'contract'

export type ProjectLevelType = 'junior' | 'middle' | 'senior' | 'expert'

export type ProjectDurationType = 'one_to_three' | 'three_to_six' | 'more_than_six'

export type ProjectSizeType = 'large' | 'medium' | 'small'

export const stepTypes = ['title', 'technologies', 'size', 'description', 'overview', 'published'] as const

export type StepTypes = (typeof stepTypes)[number]

export type PrePublishStepTypes = Exclude<StepTypes, 'published'>

export interface ProjectModelResponseEntity {
  id: string
  price: string
  price_to: string
  price_from: string
  price_measure: string
  type: ProjectType
  level: ProjectLevelType
  duration: ProjectDurationType
  size: ProjectSizeType
  step: StepTypes
  location: LocationModelEntity
  profession: string
  title: string
  technologies: OptionEntity[]
  payment_verified: boolean
  updated_at: string
  status: ProjectStatusType
}

export interface ProjectCustomerFilterEntity extends FilterBaseEntity {
  status?: string
}

export interface ProjectCreateRequestEntity {
  title?: string
}

export interface ProjectPatchRequestEntity {
  technologies?: []
}

export interface ProjectCreateResponseEntity extends ProjectCreateRequestEntity {
  id?: string
  steps?: StepTypes
}
