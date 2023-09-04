import { supabase } from '@src/supabaseClient'
import { useNavigate } from 'react-router-dom'

const useAuth = () => {
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    navigate('/login')
  }

  const getUserSession = async () => {
    const res = await supabase.auth.getSession()
    return res.data
  }

  return (
    { handleSignOut, getUserSession }
  )
}

export default useAuth
