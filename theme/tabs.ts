export default {
  tabs: {
    slots: {
      trigger: ['data-[state=inactive]:text-(--color-greyscale-500)']
    },
    variants: {
      variant: {
        pill: {
          list: 'bg-(--color-greyscale-100) ring ring-(--color-greyscale-200)'
        }
      }
    }
  }
}
