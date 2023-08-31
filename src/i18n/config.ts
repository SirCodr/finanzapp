import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import { DEFAULT_LANG } from '@consts/langs'
import enResources from './en/resources'
import esResources from './es/resources'
import { getLangFromBrowser } from '@src/utils/lang'

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    preload: [DEFAULT_LANG],
    load: 'languageOnly',
    debug: false,
    fallbackLng: getLangFromBrowser(),
    lowerCaseLng: true,
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: enResources,
      es: esResources
    }
  })

export default i18n
