import { getAllTransactionTypes } from '@src/services/transactions'
import { useTransactionTypeStore } from '@src/store/transactionTypes'
import { type TransactionType } from '@src/types/transactions'
import { useTranslation } from 'react-i18next'

const useTransaction = () => {
  const [transactionTypes, setTransactionTypes] = useTransactionTypeStore(state => [state.transactionTypes, state.setTransactionTypes])
  const { i18n } = useTranslation()

  const handleTransactionTypesLoad = async (): Promise<TransactionType[]> => {
    const transactionTypesFound = await getAllTransactionTypes(i18n.language)
    setTransactionTypes(transactionTypesFound)

    return transactionTypesFound
  }

  return (
    { transactionTypes, handleTransactionTypesLoad }
  )
}
export default useTransaction
