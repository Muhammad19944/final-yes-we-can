import containerTheme from '~/theme/container'
import formFieldTheme from '~/theme/formField'
import inputTheme from '~/theme/input'
import inputTagsTheme from '~/theme/inputTags'
import selectMenuTheme from '~/theme/selectMenu'
import tableTheme from '~/theme/table'
import tabsTheme from '~/theme/tabs'
import tooltipTheme from '~/theme/tooltip'

export default defineAppConfig({
  ui: {
    ...containerTheme,
    ...formFieldTheme,
    ...inputTheme,
    ...inputTagsTheme,
    ...selectMenuTheme,
    ...tableTheme,
    ...tabsTheme,
    ...tooltipTheme
  }
})
