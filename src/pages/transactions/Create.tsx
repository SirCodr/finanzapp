import TransactionCreateForm from '@src/components/transactions/TransactionCreateForm'
import useTransaction from '@src/hooks/useTransaction'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const CreateTransactionPage = () => {
  const { handleTransactionTypesLoad, handleAccountTypesLoad } = useTransaction()
  const { t } = useTranslation('transactions')
  const queryClient = useQueryClient()

  const {
    isLoading: isTransactionTypesLoading,
    error: transactionTypesError,
    data: transactionTypes
  } = useQuery({
    queryKey: ['transactionTypes'],
    queryFn: handleTransactionTypesLoad
  })

  const {
    isLoading: isAccountTypesLoading,
    error: accountTypesError,
    data: accountTypes
  } = useQuery({
    queryKey: ['accountTypes'],
    queryFn: handleAccountTypesLoad
  })

  useEffect(() => {
    return () => { 
      queryClient.cancelQueries(['transactionTypes', 'accountTypes'])
     }
  }, [])

  if (transactionTypesError || accountTypesError) return <span>Error</span>

  if (isTransactionTypesLoading || isAccountTypesLoading) return <span>Loading</span>

  return (
    <article className='flex flex-col items-center gap-y-3 w-full'>
      <header>{t('transactions:newTransaction')}</header>
        <TransactionCreateForm transactionTypes={transactionTypes ?? []} accountTypes={accountTypes ?? []} />
    </article>
  )
}

export default CreateTransactionPage
