import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import ar from './locales/ar.json'

// Start with the saved language, or Arabic the first time.
const savedLanguage = localStorage.getItem('lang')
const language = savedLanguage === 'en' || savedLanguage === 'ar' ? savedLanguage : 'ar'

export const i18n = createI18n({
  legacy: false,
  locale: language,
  fallbackLocale: 'en',
  messages: { en, ar }
})

export function setLanguage(language) {
  i18n.global.locale.value = language
  localStorage.setItem('lang', language)
  document.documentElement.lang = language
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
  document.title = i18n.global.t('pageTitle')
}

setLanguage(language)
