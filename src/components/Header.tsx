import AuthButton from './auth-button'

const Header = () => {
  return (
    <header className='w-full flex px-4 py-3'>
      <div className='ml-auto'>
        <AuthButton userLogged />
      </div>
    </header>
  )
}

export default Header
