export type CrudType = 'create' | 'read' | 'update' | 'delete'

export interface FetchResponseWrapperEntity<T> {
  count: number
  next: string | null
  previous: string | null
  results: T[]
}

export interface OptionEntity {
  id: number
  name: string
}
