import { getAllTransactionTypes } from '@src/services/transactions'
import { type TransactionType } from '@src/types/transactions'
import { useTranslation } from 'react-i18next'

const useTransaction = () => {
  const { i18n } = useTranslation()

  const handleTransactionTypesLoad = async (): Promise<TransactionType[]> => {
    const transactionTypesFound = await getAllTransactionTypes(i18n.language)

    return transactionTypesFound
  }

  return (
    { handleTransactionTypesLoad }
  )
}
export default useTransaction
