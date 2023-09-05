import { getAllTransactionsByUser } from '@services/transactions'
import TransactionItem from '@src/components/DataTable/TransactionItem'
import { getAppTitle } from '@src/utils/app'
import { useQuery } from '@tanstack/react-query'
import { DataScroller } from 'primereact/datascroller'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { Button } from 'primereact/button'

const TransactionsPage = () => {
  const { t, i18n } = useTranslation('pages')
  const { isLoading, error, data } = useQuery({
    queryKey: ['transactions'],
    queryFn: async () => await getAllTransactionsByUser(1, i18n.language)
  })

  useEffect(() => {
    document.title = getAppTitle(t('transactions'))
  }, [])

  if (error) return <span>Error</span>

  if (isLoading) return <span>Loading</span>

  return (
    <div className='flex flex-col flex-wrap gap-y-3 w-full h-full relative'>
      <DataScroller value={data} itemTemplate={TransactionItem}rows={5} inline header='Scroll down to load more' />
      <div className='absolute right-0 bottom-0'>
        <Button icon="pi pi-times" rounded severity="help" aria-label="Cancel"/>
      </div>
    </div>
  )
}
export default TransactionsPage
