import AuthButton from '@src/components/auth-button'
import useAuth from '@src/hooks/useAuth'
import { useQuery } from '@tanstack/react-query'
import { Navigate } from 'react-router-dom'

const Login = () => {
  const { getUserSession } = useAuth()

  const {
    isLoading: userSessionLoading,
    error: userSessionError,
    data: userSession
  } = useQuery({
    queryKey: ['userSession'],
    queryFn: getUserSession
  })

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
