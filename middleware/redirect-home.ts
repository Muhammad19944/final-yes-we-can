export default defineNuxtRouteMiddleware((to) => {
  console.log('Redirect middleware triggered')
  const localePath = useLocalePath()
  const removeSlash = to.fullPath.slice(1)

  if (['uz', 'ru', 'en'].includes(removeSlash as string)) {
    return navigateTo(localePath('/jobs'), { redirectCode: 301 })
  }
})
