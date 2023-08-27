import React, { Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { Route, Routes } from 'react-router-dom'

const Welcome = React.lazy(() => import('./pages/Welcome'))
const PageNotFound = React.lazy(() => import('./components/PageNotFound'))

function App () {
  const { t } = useTranslation('utils')
  return (
    <Suspense fallback={<div>{t('loading.suspense')}</div>}>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='*' element={<PageNotFound />} />
    </Routes>
    </Suspense>
  )
}

export default App
