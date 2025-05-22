// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  /*
   * ESLint
   * */
  eslint: {
    config: {
      stylistic: {
        indent: 'tab',
        semi: false,
        commaDangle: 'never'
      }
    }
  },
  /**
   * UI
   */
  ui: {
    colorMode: false
  },
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
   * Styles
   */
  css: ['~/assets/css/main.css'],
  /**
   * Modules
   */
  modules: ['@nuxt/ui', '@nuxtjs/i18n', '@nuxt/eslint', '@nuxt/icon', '@nuxt/image', '@nuxt/scripts', '@nuxt/test-utils', '@nuxt/content']
})
