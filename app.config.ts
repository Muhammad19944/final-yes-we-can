import containerTheme from '~/theme/container'
import formFieldTheme from '~/theme/formField'
import inputTheme from '~/theme/input'
import inputMenuTheme from '~/theme/inputMenu'
import inputTagsTheme from '~/theme/inputTags'
import modalTheme from '~/theme/modal'
import pinInputTheme from '~/theme/pinInput'
import radioGroupTheme from '~/theme/radioGroup'
import selectMenuTheme from '~/theme/selectMenu'
import stepperTheme from '~/theme/stepper'
import tableTheme from '~/theme/table'
import tabsTheme from '~/theme/tabs'
import textareaTheme from '~/theme/textarea'
import tooltipTheme from '~/theme/tooltip'

export default defineAppConfig({
  ui: {
    ...containerTheme,
    ...formFieldTheme,
    ...inputTheme,
    ...inputMenuTheme,
    ...inputTagsTheme,
    ...modalTheme,
    ...pinInputTheme,
    ...radioGroupTheme,
    ...selectMenuTheme,
    ...stepperTheme,
    ...tableTheme,
    ...tabsTheme,
    ...textareaTheme,
    ...tooltipTheme
  }
})
