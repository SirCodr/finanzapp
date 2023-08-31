import useTransaction from '@src/hooks/useTransaction'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SelectButton } from 'primereact/selectbutton'
import { InputText } from 'primereact/inputtext'
import { Calendar } from 'primereact/calendar'
import { addLocale } from 'primereact/api'
import { Dropdown } from 'primereact/dropdown'

const CreateTransactionPage = () => {
  const { handleTransactionTypesLoad } = useTransaction()
  const { t, i18n } = useTranslation()
  const queryClient = useQueryClient()
  const { isLoading, error, data: transactionTypes } = useQuery({
    queryKey: ['transactionTypes'],
    queryFn: handleTransactionTypesLoad
  })
  const [selectedTransactionType, setSelectedTransactionType] = useState<number | null>(null)

  addLocale('es', {
    firstDayOfWeek: 1,
    dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
    dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
    dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
    monthNames: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
    monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
    today: 'Hoy',
    clear: 'Limpiar'
  })

  useEffect(() => {
    if (transactionTypes) setSelectedTransactionType(transactionTypes[0].id)
  }, [transactionTypes])

  useEffect(() => {
    return () => queryClient.cancelQueries('transactionTypes')
  }, [])

  if (error) return <span>Error</span>

  if (isLoading) return <span>Loading</span>

  return (
    <article className='flex flex-col items-center gap-y-3 w-full'>
      <header>{t('transactions.newTransaction')}</header>
      <form>
        <input placeholder='$0' />
        <SelectButton
          value={selectedTransactionType}
          onChange={(e) => setSelectedTransactionType(e.value)}
          options={transactionTypes}
          optionLabel='name'
          optionValue='id'
        />
      <span className="p-float-label">
        <InputText id="username" value={''} onChange={(e) => {}} />
        <label htmlFor="username">Username</label>
      </span>
      <span className="p-float-label">
        {/* TODO: Default value is today day */}
        <Calendar id='date' value={''} onChange={(e) => {}} locale={i18n.language} showIcon />
        <label htmlFor="date">Birth Date</label>
      </span>
      <span className="p-float-label">
        <Dropdown inputId="dd-city" value={null} onChange={(e) => {}} options={[]} optionLabel="name" className="w-full md:w-14rem" emptyMessage={t('results.noResultsFound')} />
        <label htmlFor="dd-city">Select a City</label>
      </span>
      </form>
    </article>
  )
}

export default CreateTransactionPage
