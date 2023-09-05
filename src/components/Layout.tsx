import Header from './Header'

type Props = {
  children: JSX.Element
}

const Layout = ({ children }: Props) => {
  return (
    <div className='grid grid-rows-[60px_1fr] w-full h-screen'>
      <Header />
      {children}
    </div>
  )
}

export default Layout
