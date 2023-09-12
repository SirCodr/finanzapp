import type { Database } from './supabase'

export type TransactionEntity = Omit<Database['public']['Tables']['transactions']['Row'], 'created_at'>

export type TransactionCreationType = Omit<Database['public']['Tables']['transactions']['Row'], 'id' | 'date' | 'created_at'> & {
  date: Date
}

export type TransactionCreateOptionsType = keyof TransactionCreationType

export type TransactionItemDisplay = {
  transaction_type: string
  description: string
  amount: string
}

export type TransactionType = {
  id: number
  name: string
}

export type AccountTypeEntity = {
  id: number
  name: string
}

export default TransactionEntity
