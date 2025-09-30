export default {
  avatar: {
    slots: {
      fallback: 'flex items-center justify-center w-full h-full rounded-full',
      icon: 'w-1/2 h-1/2'
    },
    variants: {
      size: {
        '3xs': {
          root: 'size-4 text-[8px]'
        },
        '2xs': {
          root: 'size-5 text-[10px]'
        },
        xs: {
          root: 'size-6 text-xs'
        },
        sm: {
          root: 'size-7 text-sm'
        },
        md: {
          root: 'size-8 text-base'
        },
        lg: {
          root: 'size-9 text-base'
        },
        xl: {
          root: 'size-10 text-base'
        },
        '2xl': {
          root: 'size-11 text-[22px]'
        },
        '3xl': {
          root: 'size-12 text-2xl'
        }
      }
    }
  }
}
