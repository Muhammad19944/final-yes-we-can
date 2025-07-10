export default {
  stepper: {
    slots: {
      trigger: 'bg-(--color-greyscale-300) text-white',
      title: 'text-(--color-greyscale-400) group-data-[state=active]:text-(--color-greyscale-900) group-data-[state=completed]:text-(--color-greyscale-900)'
    },
    variants: {
      size: {
        md: {
          wrapper: '!mt-2'
        }
      }
    }
  }
}
