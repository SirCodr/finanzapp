import { getFormattedCurrency } from '@src/utils/currency'

type Props = {
  transaction_type: string
  description: string
  amount: string
  onClick?: () => void
}

const TransactionItem = ({ transaction_type, description, amount, onClick = () => {} }: Props) => {
  const formattedAmount = getFormattedCurrency(Number(amount))

  return (
    <article className='flex justify-between items-center' onClick={onClick}>
      <section className='flex flex-col gap-y-1'>
        <span>{transaction_type}</span>
        <span>{description}</span>
      </section>
      <span>{formattedAmount}</span>
    </article>
  )
}

export default TransactionItem
