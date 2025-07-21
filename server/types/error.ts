export interface BackendErrorEntity {
  type: 'validation_error'
  errors: {
    code: string
    detail: string
    attr: string
  }[]
}

export const isBackendError = (error: unknown): error is BackendErrorEntity => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return typeof error === 'object' && error !== null && 'type' in error && (error as any).type === 'validation_error' && Array.isArray((error as any).errors)
}
