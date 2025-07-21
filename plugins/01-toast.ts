import type { ToastProps } from '@nuxt/ui'

type ToastType = ToastProps | ToastProps[]

export default defineNuxtPlugin(() => {
  const $toast = useToast()

  const toast = (input: ToastType) => {
    const toasts = Array.isArray(input) ? input : [input]

    toasts.forEach(({ title, description, color, icon }) => {
      $toast.add({
        id: crypto.randomUUID(),
        title,
        description,
        color,
        icon
      })
    })
  }

  return {
    provide: {
      toast
    }
  }
})
