import React, { Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'

const Welcome = React.lazy(() => import('./pages/Welcome'))
const TransactionsPage = React.lazy(() => import('./pages/transactions'))
const CreateTransactionPage = React.lazy(() => import('./pages/transactions/Create'))
const PageNotFound = React.lazy(() => import('./components/PageNotFound'))

function App () {
  const { t } = useTranslation('utils')
  return (
    <Suspense fallback={<div>{t('loading.suspense')}</div>}>
      <Layout>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='transactions' element={<TransactionsPage />} />
          <Route path='transactions/create' element={<CreateTransactionPage />} />
          <Route path='*' element={<PageNotFound />} />
      </Routes>
      </Layout>
    </Suspense>
  )
}

export default App
