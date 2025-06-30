export default {
  selectMenu: {
    variants: {
      variant: {
        subtle: 'bg-[var(--color-greyscale-50)] ring-[var(--color-greyscale-200)]'
      },
      color: {
        primary: 'data-[state=open]:ring-2 data-[state=open]:ring-(--color-green-500) data-[state=open]:bg-(--color-green-50)',
        secondary: 'data-[state=open]:ring-2 data-[state=open]:ring-(--bg-blue-50) data-[state=open]:bg-(--bg-blue-50)',
        success: 'data-[state=open]:ring-2 data-[state=open]:ring-(--bg-green-50) data-[state=open]:bg-(--bg-green-50)',
        info: 'data-[state=open]:ring-2 data-[state=open]:ring-(--bg-blue-50) data-[state=open]:bg-(--bg-blue-50)',
        warning: 'data-[state=open]:ring-2 data-[state=open]:ring-(--bg-yellow-50) data-[state=open]:bg-(--bg-yellow-50)',
        error: 'data-[state=open]:ring-2 data-[state=open]:ring-(--bg-red-50) data-[state=open]:bg-(--bg-red-50)',
        neutral: 'data-[state=open]:ring-2 data-[state=open]:ring-(--bg-slate-50) data-[state=open]:bg-(--bg-slate-50)'
      }
    }
  }
}
