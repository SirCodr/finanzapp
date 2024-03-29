import { addLocale } from 'primereact/api'
import { useTranslation } from 'react-i18next'
import { SelectButton } from 'primereact/selectbutton'
import { InputText } from 'primereact/inputtext'
import { Calendar } from 'primereact/calendar'
import { Dropdown } from 'primereact/dropdown'
import { InputNumber } from 'primereact/inputnumber'
import VerticalGroup from '@components/forms/VerticalGroup'
import HorizontalGroup from '@components/forms/HorizontalGroup'
import {
  type AccountTypeEntity,
  type TransactionType
} from '@src/types/transactions'
import useTransaction from '@src/hooks/useTransaction'
import { useRef } from 'react'
import { Button } from 'primereact/button'
import { useMutation } from '@tanstack/react-query'
interface Props {
  transactionTypes: TransactionType[]
  accountTypes: AccountTypeEntity[]
}

const TransactionCreateForm = ({ transactionTypes, accountTypes }: Props) => {
  const firstFormChildRef = useRef<HTMLElement>(null)
  const { t, i18n } = useTranslation(['transactions', 'results'])
  const { transaction, handleTransactionChange, handleTransactionCreation } =
    useTransaction()

  const mutation = useMutation({
    mutationFn: handleTransactionCreation,
    onSuccess: () => firstFormChildRef.current?.focus()
  })

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
    <form className='flex flex-col gap-y-3'>
      <InputNumber
        name='amount'
        value={Number(transaction.amount)}
        onValueChange={(e) => {
          handleTransactionChange('amount', e.value)
        }}
        mode='currency'
        currency='USD'
        locale='en-US'
        minFractionDigits={0}
        placeholder={t('transactions:amount')}
        ref={firstFormChildRef}
        required
      />
      <SelectButton
        name='transaction_type_id'
        value={transaction.transaction_type_id}
        onChange={(e) => {
          handleTransactionChange('transaction_type_id', e.value)
        }}
        options={transactionTypes}
        optionLabel='name'
        optionValue='id'
        required
      />
      <HorizontalGroup>
        <VerticalGroup
          className='flex-1'
          label={t('transactions:selectAccounType')}
        >
          <Dropdown
            name='origin_account_type_id'
            value={transaction.origin_account_type_id}
            onChange={(e) => {
              handleTransactionChange('origin_account_type_id', e.value)
            }}
            options={accountTypes}
            optionLabel='name'
            optionValue='id'
            placeholder={t('transactions:selectAccounType')}
            className='w-full md:w-14rem'
            emptyMessage={t('results:noResultsFouund')}
            required
          />
        </VerticalGroup>
      </HorizontalGroup>
      <HorizontalGroup>
        <VerticalGroup label={t('transactions:description')}>
          <InputText
            name='description'
            value={transaction.description}
            onChange={(e) => {
              handleTransactionChange('description', e.target.value)
            }}
            placeholder={t('transactions:description')}
          />
        </VerticalGroup>
        <VerticalGroup label={t('transactions:date')}>
          <Calendar
            name='date'
            value={transaction.date}
            onChange={(e) => {
              handleTransactionChange('date', e.value)
            }}
            locale={i18n.language}
            placeholder={t('transactions:date')}
            showIcon
            required
          />
        </VerticalGroup>
      </HorizontalGroup>
      <Button
        label={t(`transactions:${mutation.isLoading ? 'saving' : 'save'}`)}
        type='button'
        onClick={mutation.mutate}
        loading={mutation.isLoading}
      />
    </form>
  )
}
export default TransactionCreateForm
