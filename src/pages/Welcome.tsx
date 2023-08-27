import { useTranslation } from 'react-i18next'

const Welcome = () => {
  const { t } = useTranslation('welcome')

  return (
    <div>{t('title')}</div>
  )
}
export default Welcome
