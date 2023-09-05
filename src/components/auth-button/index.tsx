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
        className='text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2'
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
      className='text-white bg-[#E70D0D] hover:bg-[#E70D0D]/90 focus:ring-4 focus:outline-none focus:ring-[#E70D0D]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#E70D0D]/55 mr-2 mb-2'
    >
      <GoogleIcon />
      {t('signOut')}
    </button>
  )
}

export default AuthButton
