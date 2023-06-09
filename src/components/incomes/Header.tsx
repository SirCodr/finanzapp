import { useNavigate } from 'react-router-dom'
import { Button, Icon } from 'semantic-ui-react'

const IncomesHeader = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h5>Ingresos</h5>
      <div className='flex justify-between'>
        <section>
          <span>Todos los ingresos</span>
        </section>
        <section className='flex gap-x-4'>
          <Button icon>
            <Icon name='filter' />
            <span>Filtros</span>
          </Button>
          <Button>Comparar con presupuesto</Button>
          <Button primary onClick={() => { navigate('../create') }}>Agregar ingreso</Button>
        </section>
      </div>
    </div>
  )
}
export default IncomesHeader
