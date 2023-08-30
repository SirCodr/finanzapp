import useTransaction from '@src/hooks/useTransaction'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const CreateTransactionPage = () => {
  const { transactionTypes, handleTransactionTypesLoad } = useTransaction()
  const { t, i18n } = useTranslation('transactions')
  const queryClient = useQueryClient()
  const { isLoading, error } = useQuery({
    queryKey: ['transactionTypes'],
    queryFn: handleTransactionTypesLoad
  })

  useEffect(() => {
    handleTransactionTypesLoad()
  }, [i18n.language])

  useEffect(() => {
    return () => queryClient.cancelQueries('transactionTypes')
  }, [])

  if (error) return <span>Error</span>

  if (isLoading) return <span>Loading</span>

  return (
    <article className='flex flex-col items-center gap-y-3 w-full'>
      <header>{t('newTransaction')}</header>
      <form>
        <input placeholder='$0' />
        <ul className='flex gap-x-3 uppercase'>
          {transactionTypes.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </form>
    </article>
  )
}

export default CreateTransactionPage
