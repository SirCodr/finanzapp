import { supabase } from '@src/supabaseClient'

export const getAllTransactionsByUser = async (userId: number) => {
  try {
    const { data, error } = await supabase.rpc('get_all_transactions_by_user', {
      user_id_param: userId,
      lang_code: 'es'
    })

    if (error) throw new Error(error.message)

    return data
  } catch (error) {
    console.error('Error on transactions load: ', error)
  }
}
