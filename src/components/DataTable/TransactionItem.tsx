import { getFormattedCurrency } from "@src/utils/currency"

type Props = {
  transaction_type: string
  description: string
  amount: string
}

const TransactionItem = ({ transaction_type, description, amount }: Props) => {
  const formattedAmount = getFormattedCurrency(Number(amount))

  return (
    <article className="flex justify-between items-center">
      <section className="flex flex-col gap-y-1">
        <span>{transaction_type}</span>
        <span>{description}</span>
      </section>
      <span>{formattedAmount}</span>
    </article>
  )
}

export default TransactionItem
