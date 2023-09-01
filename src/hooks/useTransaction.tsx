import { getAllTransactionTypes } from '@src/services/transactions'
import { type TransactionCreateOptionsType, type TransactionCreateType, type TransactionType } from '@src/types/transactions'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const transactionInitialState: TransactionCreateType = {
  amount: '0',
  transaction_category_id: 0,
  transaction_type_id: 0,
  origin_account_type_id: 0,
  destination_account_type_id: null,
  description: '',
  date: ''
}

const useTransaction = () => {
  const { i18n } = useTranslation()
  const [transaction, setTransaction] = useState(transactionInitialState)

  const handleTransactionTypesLoad = async (): Promise<TransactionType[]> => {
    const transactionTypesFound = await getAllTransactionTypes(i18n.language)

    return transactionTypesFound
  }

  const handleTransactionChange = (propName: TransactionCreateOptionsType, value: any) => {
    if (value === null || value === undefined) value = ''

    setTransaction({ ...transaction, [propName]: value })
  }

  const handleTransactionCreation = () => {
    const dataSend = {...transaction}

    for (const key in dataSend) {
      const value = dataSend[key]

      switch (key) {
        case 'amount':
          dataSend.amount = dataSend.amount.toString()
          break

        case 'date':
          //TODO: Add luxon and convert date to string
      }
    }
  }

  return (
    { transaction, handleTransactionTypesLoad, handleTransactionChange, handleTransactionCreation }
  )
}
export default useTransaction
