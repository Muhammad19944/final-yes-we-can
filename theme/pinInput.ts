export default {
  pinInput: {
    slots: {
      root: 'w-full',
      tagsItem: 'gap-1.5 bg-white rounded-[80px] shadow-10 ring-0 py-1.5 pl-3 pr-2',
      tagsItemDelete: 'justify-center w-5 h-5 bg-(--color-greyscale-200) hover:bg-(--color-greyscale-300) text-(--color-greyscale-600) rounded-full cursor-pointer',
      tagsItemDeleteIcon: '!size-3.5',
      item: 'cursor-pointer',
      itemLabel: '!text-[15px]',
      itemTrailingIcon: '!size-5'
    },
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
