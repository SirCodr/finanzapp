import { type TransactionEntity } from '@src/types/transactions'
import { create } from 'zustand'

interface TransactionState {
  transactions: TransactionEntity[]
  setTransactions: (transactions: TransactionEntity[]) => void
  addTransaction: (transaction: TransactionEntity) => void
  updateTransaction: (transaction: TransactionEntity) => void
}

export const useTransactionsStore = create<TransactionState>()((set) => ({
  transactions: [],
  setTransactions: (transactions) => {
    set(() => ({ transactions }))
  },
  addTransaction: (transaction) => {
    set((state) => ({ transactions: [...state.transactions, transaction] }))
  },
  updateTransaction: (transaction) => {
    set((state) => {
      const transactionIndexFound = state.transactions.findIndex(transactionItem => transactionItem.id === transaction.id)
      const transactionsDraft = [...state.transactions]

      if (transactionIndexFound !== -1) {
        transactionsDraft[transactionIndexFound] = transaction
      }

      return { transactions: transactionsDraft }
    })
  }
}))
