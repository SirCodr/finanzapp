import React, { Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { Navigate, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/routes/ProtectedRoute'
import Login from './pages/login'

const TransactionsPage = React.lazy(async () => await import('./pages/transactions'))
const CreateTransactionPage = React.lazy(async () => await import('./pages/transactions/Create'))
const PageNotFound = React.lazy(async () => await import('./components/PageNotFound'))

function App () {
  const { t } = useTranslation('utils')
  return (
    <Suspense fallback={<div>{t('loading.suspense')}</div>}>
        <Routes>
          <Route path='/' element={<ProtectedRoute />}>
            <Route path='' element={<Navigate to='/transactions' />} />
            <Route path='transactions' element={<TransactionsPage />} />
            <Route path='transactions/create' element={<CreateTransactionPage />} />
            <Route path='*' element={<PageNotFound />} />
          </Route>
          <Route path='login' element={<Login />} />
      </Routes>
    </Suspense>
  )
}

export default App
