import { setup } from '@storybook/vue3'
import { i18n } from './i18n'
import type { Preview } from '@storybook/vue3'

setup((app) => {
  if (!app.config.globalProperties.$i18n) {
    app.use(i18n)
  }
})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

export default preview
