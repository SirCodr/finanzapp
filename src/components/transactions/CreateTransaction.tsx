import { addLocale } from 'primereact/api'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SelectButton } from 'primereact/selectbutton'
import { InputText } from 'primereact/inputtext'
import { Calendar } from 'primereact/calendar'
import { Dropdown } from 'primereact/dropdown'
import { InputNumber } from 'primereact/inputnumber'
import { type TransactionType } from '@src/types/transactions'
import Button from '../tailwind-button'
import useTransaction from '@src/hooks/useTransaction'

interface Props {
  transactionTypes: TransactionType[]
}

const TransactionCreateForm = ({ transactionTypes }: Props) => {
  const { t, i18n } = useTranslation(['transactions', 'results'])
  const { transaction, handleTransactionChange } = useTransaction()

  addLocale('es', {
    firstDayOfWeek: 1,
    dayNames: [
      'domingo',
      'lunes',
      'martes',
      'miércoles',
      'jueves',
      'viernes',
      'sábado'
    ],
    dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
    dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
    monthNames: [
      'enero',
      'febrero',
      'marzo',
      'abril',
      'mayo',
      'junio',
      'julio',
      'agosto',
      'septiembre',
      'octubre',
      'noviembre',
      'diciembre'
    ],
    monthNamesShort: [
      'ene',
      'feb',
      'mar',
      'abr',
      'may',
      'jun',
      'jul',
      'ago',
      'sep',
      'oct',
      'nov',
      'dic'
    ],
    today: 'Hoy',
    clear: 'Limpiar'
  })

  return (
    <form className='flex flex-col gap-y-2'>
      <InputNumber
        inputId='amount'
        value={Number(transaction.amount)}
        onValueChange={(e) => { handleTransactionChange('amount', e.value) }}
        mode='currency'
        currency='USD'
        locale='en-US'
        minFractionDigits={0}
        placeholder={t('transactions:amount')}
      />
      <SelectButton
        value={transaction.transaction_type_id}
        onChange={(e) => { handleTransactionChange('transaction_type_id', e.value) }}
        options={transactionTypes}
        optionLabel='name'
        optionValue='id'
      />
      <Dropdown
        inputId='fromAccountType'
        value={transaction.origin_account_type_id}
        onChange={(e) => { handleTransactionChange('origin_account_type_id', e.value) }}
        options={[]}
        optionLabel='name'
        placeholder={t('transactions:selectAccounType')}
        className='w-full md:w-14rem'
        emptyMessage={t('results:noResultsFouund')}
      />
      <InputText id='description' value={transaction.description} onChange={(e) => { handleTransactionChange('description', e.target.value) }} placeholder={t('transactions:description')} />
      {/* TODO: Default value is today day */}
      <Calendar
        id='date'
        value={transaction.date}
        onChange={(e) => { handleTransactionChange('date', e.value) }}
        locale={i18n.language}
        placeholder={t('transactions:date')}
        showIcon
      />
      <Button label={t('transactions:save')} />
      </form>
  )
}
export default TransactionCreateForm
