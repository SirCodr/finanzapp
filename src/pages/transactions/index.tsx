import { getAllTransactionsByUser } from '@services/transactions'
import TransactionItem from '@src/components/DataTable/TransactionItem'
import { useQuery } from '@tanstack/react-query'
import { DataScroller } from 'primereact/datascroller'

const TransactionsPage = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['transactions'],
    queryFn: async () => await getAllTransactionsByUser(1)
  })

  if (error) return <span>Error</span>

  if (isLoading) return <span>Loading</span>

  return (
    <div className='flex flex-col flex-wrap gap-y-3 w-full'>
      <DataScroller value={data} itemTemplate={TransactionItem}rows={5} inline header='Scroll down to load more' />
    </div>
  )
}
export default TransactionsPage
