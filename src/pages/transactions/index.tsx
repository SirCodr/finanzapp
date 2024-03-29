import TransactionItem from '@src/components/DataTable/TransactionItem'
import { getAppTitle } from '@src/utils/app'
import { useQuery } from '@tanstack/react-query'
import { DataScroller } from 'primereact/datascroller'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import TransactionCreateForm from '@src/components/transactions/TransactionCreateForm'
import useTransaction from '@src/hooks/useTransaction'
import { useTransactionsStore } from '@src/store/transactions'
import TransactionEditForm from '@src/components/transactions/TransactionEditForm'
import { type TransactionItemDisplay } from '@src/types/transactions'
import { getTransactionEditById } from '@src/services/transactions'

const TransactionsPage = () => {
  const { t } = useTranslation(['pages', 'transactions'])
  const {
    handleTransactionTypesLoad,
    handleAccountTypesLoad,
    handleTransactionsLoad
  } = useTransaction()
  const transactions = useTransactionsStore((state) => state.transactions)
  const [isCreationModalVisible, showCreationModal] = useState(false)
  const [transactionId, setTransactionId] = useState<number | null>(null)

  const showTransactionEditModal = (transactionId: number) => {
    setTransactionId(transactionId)
  }

  const { isLoading, error } = useQuery({
    queryKey: ['transactions'],
    queryFn: handleTransactionsLoad
  })

  const {
    isLoading: isTransactionTypesLoading,
    error: transactionTypesError,
    data: transactionTypes
  } = useQuery({
    queryKey: ['transactionTypes'],
    queryFn: handleTransactionTypesLoad,
    enabled: isCreationModalVisible || Boolean(transactionId)
  })

  const {
    isLoading: isAccountTypesLoading,
    error: accountTypesError,
    data: accountTypes
  } = useQuery({
    queryKey: ['accountTypes'],
    queryFn: handleAccountTypesLoad,
    enabled: isCreationModalVisible || Boolean(transactionId)
  })

  const { isLoading: isTransactionEditLoading,
    error: transactionEditError,
    data: transactionEdit } = useQuery({
    queryKey: ['transactionEdit'],
    queryFn: async() => getTransactionEditById(transactionId),
    enabled: Boolean(transactionId)
  })  

  useEffect(() => {
    document.title = getAppTitle(t('pages:transactions'))
  }, [])

  if (error) return <span>Error</span>

  if (isLoading) return <span>Loading</span>

  return (
    <div className='flex flex-col flex-wrap gap-y-3 w-full h-full relative'>
      <DataScroller
        value={transactions}
        itemTemplate={(transaction: TransactionItemDisplay) => (
          <TransactionItem
            {...transaction}
            onClick={() => showTransactionEditModal(transaction.id)}
          />
        )}
        rows={20}
        inline
        header='Scroll down to load more'
      />
      <div className='fixed right-4 bottom-4'>
        <Button
          icon='pi pi-plus'
          rounded
          severity='help'
          aria-label='Cancel'
          onClick={() => {
            showCreationModal(true)
          }}
        />
      </div>
      {isCreationModalVisible && (
        <Dialog
          header={t('transactions:newTransaction')}
          visible
          onHide={() => {
            showCreationModal(false)
          }}
        >
          <TransactionCreateForm
            transactionTypes={transactionTypes ?? []}
            accountTypes={accountTypes ?? []}
          />
        </Dialog>
      )}
      {(!isTransactionEditLoading && transactionId === transactionEdit.id) && (
        <Dialog
          header={t('transactions:newTransaction')}
          visible
          onHide={() => {
            setTransactionId(null)
          }}
        >
          <TransactionEditForm
            transactionTypes={transactionTypes ?? []}
            accountTypes={accountTypes ?? []}
            transaction={transactionEdit}
          />
        </Dialog>
      )}
    </div>
  )
}
export default TransactionsPage
