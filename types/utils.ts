export type ProjectType = 'hourly' | 'salary' | 'contract'

export type ProjectLevelType = 'junior' | 'middle' | 'senior' | 'expert'

export type ProjectDurationType = 'one_to_three' | 'three_to_six' | 'more_than_six'

export type ProjectSizeType = 'large' | 'medium' | 'small'

export const stepTypes = ['title', 'technologies', 'size', 'description', 'overview', 'published'] as const

export type StepTypes = (typeof stepTypes)[number]

export type PrePublishStepTypes = Exclude<StepTypes, 'published'>

export type CrudType = 'create' | 'read' | 'update' | 'delete'

export interface ApiResponseEntity<T> {
  count: number
  results: T[]
}

export interface OptionEntity {
  id: number
  name: string
}
