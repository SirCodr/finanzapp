import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { DEFAULT_LANG } from '@consts/langs'
import enResources from './en/resources'
import esResources from './es/resources'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    preload: [DEFAULT_LANG],
    load: 'languageOnly',
    debug: false,
    fallbackLng: DEFAULT_LANG,
    lowerCaseLng: true,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage']
    },
    resources: {
      en: enResources,
      es: esResources
    }
  })

export default i18n
