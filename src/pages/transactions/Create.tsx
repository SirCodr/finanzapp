import TransactionCreateForm from '@src/components/transactions/CreateTransaction'
import useTransaction from '@src/hooks/useTransaction'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const CreateTransactionPage = () => {
  const { handleTransactionTypesLoad } = useTransaction()
  const { t } = useTranslation('transactions')
  const queryClient = useQueryClient()
  const {
    isLoading,
    error,
    data: transactionTypes
  } = useQuery({
    queryKey: ['transactionTypes'],
    queryFn: handleTransactionTypesLoad
  })

  useEffect(() => {
    return async () => { await queryClient.cancelQueries('transactionTypes') }
  }, [])

  if (error) return <span>Error</span>

  if (isLoading) return <span>Loading</span>

  return (
    <article className='flex flex-col items-center gap-y-3 w-full'>
      <header>{t('transactions:newTransaction')}</header>
        <TransactionCreateForm transactionTypes={transactionTypes} />
    </article>
  )
}

export default CreateTransactionPage
