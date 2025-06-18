import containerTheme from '~/theme/container'
import inputTheme from '~/theme/input'

export default defineAppConfig({
  ui: {
    ...containerTheme,
    ...inputTheme
  }
})
