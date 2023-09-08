import { type TransactionEntity } from '@src/types/transactions'
import { create } from 'zustand'

interface TransactionState {
  transactions: TransactionEntity[]
  setTransactions: (transactions: TransactionEntity[]) => void
  addTransaction: (transaction: TransactionEntity) => void
}

export const useTransactionsStore = create<TransactionState>()((set) => ({
  transactions: [],
  setTransactions: (transactions) => {
    set(() => ({ transactions }))
  },
  addTransaction: (transaction) => {
    set((state) => ({ transactions: [...state.transactions, transaction] }))
  }
}))
