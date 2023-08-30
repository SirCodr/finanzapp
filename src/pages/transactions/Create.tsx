import { useTranslation } from 'react-i18next'

const CreateTransactionPage = () => {
  const { t } = useTranslation('transactions')
  return (
    <article className='flex flex-col items-center gap-y-3 w-full'>
      <header>{t('newTransaction')}</header>
      <form>
        <input placeholder='$0' />
        <ul className='flex gap-x-3 uppercase'>
          <li>Gasto</li>
          <li>Ingresos</li>
          <li>Transferencia</li>
        </ul>
      </form>
    </article>
  )
}

export default CreateTransactionPage
