export interface ApiResponseEntity<T> {
  count: number
  results: T[]
}

export interface OptionEntity {
  id: number
  name: string
}
