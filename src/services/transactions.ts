import { supabase } from '@src/supabaseClient'
import { type TransactionCreationType } from '@src/types/transactions'

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

export const InsertTransactionAndReturnId = async (transaction: TransactionCreationType, lang_code: string) => {
  try {
    const { data, error } = await supabase.rpc('insert_and_return_transaction', { ...transaction, lang_code })

    if (error) throw new Error(error.message)

    return data
  } catch (error) {
    console.error('Error on transaction insert: ', error)
  }
}

export const getAllAccountTypes = async (langCode: string) => {
  try {
    const { data, error } = await supabase.rpc('get_all_account_types', {
      lang_code: langCode
    })

    if (error) throw new Error(error.message)

    return data
  } catch (error) {
    console.error('Error on account types load: ', error)
  }
}

export const getTransactionEditById = async (id: number) => {
  try {
    const { data, error } = await supabase.rpc('get_edit_transaction_by_id', {
      id_param: id
    })

    if (error) throw new Error(error.message)

    return data
  } catch (error) {
    console.error('Error on transaction edit load: ', error)
  }
}