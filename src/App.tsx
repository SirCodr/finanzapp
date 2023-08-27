import { useTranslation } from 'react-i18next'

function App () {
  const { t } = useTranslation('welcome')

  return <div>{t('title')}</div>
}

export default App
