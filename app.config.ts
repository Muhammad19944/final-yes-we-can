import containerTheme from '~/theme/container'
import inputTheme from '~/theme/input'
import inputTagsTheme from '~/theme/inputTags'

export default defineAppConfig({
  ui: {
    ...containerTheme,
    ...inputTheme,
    ...inputTagsTheme
  }
})
