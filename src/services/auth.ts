import { supabase } from '@src/supabaseClient'

export const signInWithGoogle = async () => {
  return await supabase.auth.signInWithOAuth({
    provider: 'google'
  })
}

export const signOutWithGoogle = async () => {
  return await supabase.auth.signOut()
}
