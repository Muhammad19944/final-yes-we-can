import containerTheme from '~/theme/container'
import inputTheme from '~/theme/input'
import inputTagsTheme from '~/theme/inputTags'
import selectMenuTheme from '~/theme/selectMenu'

export default defineAppConfig({
  ui: {
    ...containerTheme,
    ...inputTheme,
    ...inputTagsTheme,
    ...selectMenuTheme
  }
})
