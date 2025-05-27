import { createI18n } from 'vue-i18n'

export const i18n = createI18n({
  legacy: false,
  locale: 'uz',
  fallbackLocale: 'uz',
  messages: {
    uz: {
      hello: 'Salom'
    },
    ru: {
      hello: 'Привет'
    },
    en: {
      hello: 'Hello'
    }
  }
})
