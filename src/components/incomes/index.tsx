import IncomesHeader from './Header'
import View from './View'

const IncomesView = () => {
  return (
    <section className='grid grid-rows-[auto_1fr_30px] w-full h-full'>
      <IncomesHeader />
      <View />
    </section>
  )
}
export default IncomesView
