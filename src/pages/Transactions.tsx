import { getAllTransactions } from '@services/transactions'
import { useEffect, useState } from 'react'

const Transaction = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const dataFromDb = await getAllTransactions()
      console.log(dataFromDb)
    }
    getData()
  }), []

  return (
    <div>
      <pre>
        {JSON.stringify(data)}
      </pre>
    </div>
  )
}
export default Transaction
