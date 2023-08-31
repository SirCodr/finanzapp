export const getLangFromBrowser = (): string => {
  return navigator.language.split('-')[0]
}