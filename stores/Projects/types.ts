import type { ProjectType, ProjectLevelType, ProjectDurationType, ProjectSizeType, StepTypes } from '~/shared/types/project'

export interface ProjectCreateRequestEntity {
  title?: string
}

export interface ProjectCreateResponseEntity extends ProjectCreateRequestEntity {
  id?: string
  steps?: StepTypes
}

export interface ProjectTechnologyRequestEntity {
  technologies?: number[]
}

export interface ProjectBaseEntity {
  price?: string
  price_from?: string
  price_to?: string
  type?: ProjectType
  level?: ProjectLevelType
  duration?: ProjectDurationType
  size?: ProjectSizeType
  title?: string
  profession?: string
  step?: StepTypes
}

export interface ProjectRequestEntity extends ProjectBaseEntity {
  location?: number
  technologies: number[]
  files?: number[]
}
