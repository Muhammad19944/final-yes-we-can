// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  /**
   * Config
   */
  devtools: { enabled: true },
  /**
   * Modules @nuxtjs/i18n
   */
  modules: ['@nuxtjs/storybook', '@nuxt/ui', '@nuxtjs/i18n', '@nuxt/eslint', '@nuxt/icon', '@nuxt/image', '@nuxt/scripts', '@nuxt/test-utils', '@nuxt/content'],
  /**
   * Styles
   */
  css: ['~/assets/css/main.css'],
  /**
   * UI
   */
  ui: {
    colorMode: false,
    fonts: false
  },
  compatibilityDate: '2024-11-01',
  /*
   * ESLint
   * */
  // eslint: {
  //   config: {
  //     stylistic: {
  //       indent: 'tab',
  //       semi: false,
  //       commaDangle: 'never'
  //     }
  //   }
  // },
  /**
   * I18n
   */
  i18n: {
    baseUrl: 'https://asakabank.uz',
    locales: [
      {
        name: 'Uz',
        code: 'uz',
        iso: 'uz-UZ',
        file: 'uz.json'
      },
      {
        name: 'Ру',
        code: 'ru',
        iso: 'ru-RU',
        file: 'ru.json'
      },
      {
        name: 'En',
        code: 'en',
        iso: 'en-US',
        file: 'en.json'
      }
    ],
    langDir: 'locales',
    lazy: true,
    defaultLocale: 'uz',
    strategy: 'prefix',
    detectBrowserLanguage: {
      useCookie: false,
      redirectOn: 'root'
    },
    rootRedirect: {
      statusCode: 301,
      path: 'uz'
    }
  },
  /**
   * Storybook
   */
  storybook: {
    host: 'http://localhost:6006',
    port: 6006
  }
})
