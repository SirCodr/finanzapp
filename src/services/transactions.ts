import { supabase } from "/src/supabaseClient"

export const getAllTransactions = async () => {
  try {
    const { data, error } = await supabase.rpc('Get_all_transactions', {
      lang_code: 'es'
    })

    if (error) throw new Error(error.message)

    return data
  } catch (error) {
    console.error('Error on transactions load: ', error)
  }
}
