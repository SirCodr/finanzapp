import AuthButton from '@src/components/auth-button'
import useAuth from '@src/hooks/useAuth'
import { getAppTitle } from '@src/utils/app'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Navigate } from 'react-router-dom'

const Login = () => {
  const { getUserSession } = useAuth()
  const { t } = useTranslation('pages')

  const {
    isLoading: userSessionLoading,
    error: userSessionError,
    data: userSession
  } = useQuery({
    queryKey: ['userSession'],
    queryFn: getUserSession
  })

  useEffect(() => {
    document.title = getAppTitle(t('login'))
  }, [])

  if (userSession?.session) {
    return <Navigate to='/transactions' />
  }

  return (
    <div className='w-screen h-screen grid place-items-center'>
      <form action=''>
        <AuthButton userLogged={false} />
      </form>
    </div>
  )
}

export default Login
