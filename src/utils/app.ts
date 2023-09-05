import { APP_NAME } from '@src/consts/app'

export const getAppTitle = (currentPage: string | undefined = undefined): string => {
  if (currentPage) return `${currentPage} | ${APP_NAME}`

  return APP_NAME
}
