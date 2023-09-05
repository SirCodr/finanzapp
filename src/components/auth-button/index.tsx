import useAuth from '@src/hooks/useAuth'
import { signInWithGoogle } from '@src/services/auth'
import GoogleIcon from '@icons/GoogleIcon'
import { useTranslation } from 'react-i18next'

type Props = {
  userLogged: boolean
}

const AuthButton = ({ userLogged }: Props) => {
  const { handleSignOut } = useAuth()
  const { t } = useTranslation('auth')

  if (!userLogged) {
    return (
      <button
        type='button'
        onClick={signInWithGoogle}
        className='text-white bg-blue-primary hover:bg-blue-primary/90 focus:ring-4 focus:outline-none focus:ring-blue-primary/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-blue-primary/55 mr-2 mb-2'
      >
        <GoogleIcon />
        {t('signIn.with')} Google
      </button>
    )
  }

  return (
    <button
      type='button'
      onClick={handleSignOut}
      className='text-white bg-red-primary hover:bg-red-primary/90 focus:ring-4 focus:outline-none focus:ring-red-primary/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-red-primary/55 mr-2 mb-2'
    >
      <GoogleIcon />
      {t('signOut')}
    </button>
  )
}

export default AuthButton
