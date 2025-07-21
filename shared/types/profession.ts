import type { OptionEntity } from './utils'

export interface ProfessionModelEntity extends OptionEntity {
  technologies: OptionEntity[]
}
