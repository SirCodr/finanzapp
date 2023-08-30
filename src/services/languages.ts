import { supabase } from '@src/supabaseClient'

export const getAllLanguages = async (langCode: string) => {
  try {
    const { data, error } = await supabase.rpc('get_all_languages', {
      lang_code: langCode
    })

    if (error) throw new Error(error.message)

    return data
  } catch (error) {
    console.error('Error on transactions load: ', error)
  }
}
