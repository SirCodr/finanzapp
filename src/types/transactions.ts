import type { Database } from './supabase'

export type TransactionEntity = Omit<Database['public']['Tables']['transactions']['Row'], 'id' | 'created_at'>

export type TransactionCreateOptionsType = keyof TransactionEntity

export type TransactionType = {
  id: number
  name: string
}

export type AccountTypeEntity = {
  id: number
  name: string
}

export default TransactionEntity