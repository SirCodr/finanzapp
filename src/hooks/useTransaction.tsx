import { DATE_FORMAT } from '@src/consts/dateFormats'
import { InsertTransactionAndReturnId, getAllAccountTypes, getAllTransactionTypes, getAllTransactionsByUser } from '@src/services/transactions'
import { useTransactionsStore } from '@src/store/transactions'
import type TransactionEntity from '@src/types/transactions'
import { type AccountTypeEntity, type TransactionCreateOptionsType, type TransactionType, type TransactionCreationType } from '@src/types/transactions'
import { getFormattedDate } from '@src/utils/date'
import { DateTime } from 'luxon'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const transactionInitialState: TransactionCreationType = {
  amount: '0',
  transaction_category_id: 1,
  transaction_type_id: 1,
  origin_account_type_id: 1,
  destination_account_type_id: null,
  description: '',
  date: new Date(),
  user_id: 1
}

const useTransaction = () => {
  const { i18n } = useTranslation()
  const [transaction, setTransaction] = useState(transactionInitialState)
  const [setTransactions, addTransaction] = useTransactionsStore(state => [state.setTransactions, state.addTransaction])

  const handleTransactionTypesLoad = async (): Promise<TransactionType[]> => {
    const transactionTypesFound = await getAllTransactionTypes(i18n.language)

    return transactionTypesFound
  }

  const handleAccountTypesLoad = async (): Promise<AccountTypeEntity[]> => {
    const accountTypesFound = await getAllAccountTypes(i18n.language)

    return accountTypesFound
  }

  const handleTransactionsLoad = async (): Promise<TransactionEntity[]> => {
    const transactionsFound = await getAllTransactionsByUser(1, i18n.language)
    
    if (transactionsFound) setTransactions(transactionsFound)

    return transactionsFound
  }

  const handleTransactionChange = (propName: TransactionCreateOptionsType, value: any) => {
    if (value === null || value === undefined) value = ''

    setTransaction({ ...transaction, [propName]: value })
  }

  const handleTransactionCreation = async () => {
    const dataSend = { ...transaction }

    for (const key in dataSend) {
      const value = dataSend[key]

      switch (key) {
        case 'amount':
          dataSend.amount = dataSend.amount.toString()
          break

        case 'date': {
          const localDate = DateTime.fromJSDate(value).toFormat(DATE_FORMAT)
          const formattedDate = getFormattedDate(localDate)
          dataSend.date = formattedDate
        }
      }
    }

    const newTransaction = await InsertTransactionAndReturnId(dataSend, i18n.language)

    if (newTransaction) addTransaction(newTransaction)

    return newTransaction
  }

  return (
    { transaction, handleTransactionTypesLoad, handleAccountTypesLoad, handleTransactionsLoad, handleTransactionChange, handleTransactionCreation }
  )
}
export default useTransaction
