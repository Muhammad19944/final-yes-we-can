export default {
  input: {
    variants: {
      variant: {
        subtle: 'bg-[var(--color-greyscale-50)] ring-[var(--color-greyscale-200)]'
      },
      color: {
        primary: 'focus:bg-[var(--color-green-50)] focus:border-[var(--color-green-500)]',
        secondary: 'focus:bg-blue-50 focus:border-blue-500',
        success: 'focus:bg-green-50 focus:border-green-500',
        info: 'focus:bg-blue-50 focus:border-blue-500',
        warning: 'focus:bg-yellow-50 focus:border-yellow-500',
        error: 'focus:bg-red-50 focus:border-red-500',
        neutral: 'focus:bg-slate-50 focus:border-slate-500'
      }
    }
  }
}
