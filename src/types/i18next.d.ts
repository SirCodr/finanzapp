import type resources from '../i18n/es/resources'

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: typeof resources
  }
}
