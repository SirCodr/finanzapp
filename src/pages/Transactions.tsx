import { getAllTransactions } from '@services/transactions'
import { useQuery } from '@tanstack/react-query'

const Transaction = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['transactions'],
    queryFn: getAllTransactions
  })

  if (isLoading) return <span>Loading</span>

  return (
    <div className='flex flex-col flex-wrapgap-y-3'>
      {data.map((item, index) => (
        <pre key={index}>{JSON.stringify(item)}</pre>
      ))}
    </div>
  )
}
export default Transaction
