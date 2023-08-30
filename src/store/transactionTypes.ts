import type { TransactionType } from '@src/types/transactions'
import { create } from 'zustand'

interface TransactionTypeState {
  transactionTypes: TransactionType[]
  setTransactionTypes: (types: TransactionType[]) => void
}

export const useTransactionTypeStore = create<TransactionTypeState>()(
  (set) => ({
    transactionTypes: [],
    setTransactionTypes: (types) => {
      set(() => ({ transactionTypes: types }))
    }
  })
)
