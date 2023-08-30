import { supabase } from '@src/supabaseClient'

export const getAllTransactionsByUser = async (userId: number, langCode: string) => {
  try {
    const { data, error } = await supabase.rpc('get_all_transactions_by_user', {
      user_id_param: userId,
      lang_code: langCode
    })

    if (error) throw new Error(error.message)

    return data
  } catch (error) {
    console.error('Error on transactions load: ', error)
  }
}

export const getAllTransactionTypes = async (langCode: string) => {
  try {
    const { data, error } = await supabase.rpc('get_all_transaction_types', {
      lang_code: langCode
    })

    if (error) throw new Error(error.message)

    return data
  } catch (error) {
    console.error('Error on transaction types load: ', error)
  }
}
