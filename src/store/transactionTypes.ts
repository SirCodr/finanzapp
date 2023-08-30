import { create } from 'zustand'

interface TransactionTypeState {
  transactionTypes: string[]
}

const useTransactionTypeStore = create<TransactionTypeState>()((set) => ({
  transactionTypes: [],
  setTransactionTypes: (types: string[]) => { set(() => ({ transactionTypes: types })) }
}))
