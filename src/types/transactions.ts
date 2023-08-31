import type { Database } from './supabase'

export type TransactionEntity = Omit<Database['public']['Tables']['transactions']['Row'], 'id' | 'created_at'>

export type TransactionCreateType = Omit<TransactionEntity, 'user_id'>

export type TransactionCreateOptionsType = keyof TransactionCreateType

export type TransactionType = {
  id: number
  name: string
}

export default TransactionEntity
