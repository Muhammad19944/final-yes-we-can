// import type { StorybookConfig } from '@storybook/vue3-vite'
import type { StorybookConfig } from '@storybook-vue/nuxt'
// import vue from '@vitejs/plugin-vue'
// import path from 'path'

const config: StorybookConfig = {
  stories: ['../components/**/*.stories.ts'],
  staticDirs: ['../public'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook-vue/nuxt',
    options: {}
  },
  async viteFinal(config) {
    config.define = {
      ...config.define,
      // mock cdnURL or other nuxtApp.config values
      __NUXT_APP__: JSON.stringify({
        cdnURL: '',
        baseURL: '/',
        buildAssetsDir: '/_nuxt/'
      })
    }
    return config
  },
  // framework: {
  //   name: '@storybook/vue3-vite',
  //   options: {
  //     docgen: 'vue-component-meta'
  //   }
  // },
  docs: {
    autodocs: 'tag'
  }
  // viteFinal: async (config) => {
  //   config.plugins = [...(config.plugins || []), vue()]
  //   config.resolve = {
  //     ...config.resolve,
  //     alias: {
  //       ...config.resolve?.alias,
  //       '@': path.resolve(__dirname, '../'),
  //       '~': path.resolve(__dirname, '../')
  //     }
  //   }
  //   return config
  // }
}
export default config
