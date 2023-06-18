import { Link } from 'react-router-dom'
import CartButton from './CartButton'
import { useUserActions } from '../hooks/useProductActions'

const Header = () => {
  const { resetSelectedProduct } = useUserActions()

  return (
    <header className='w-full flex justify-center'>
      <nav className='flex py-5 px-2 max-w-6xl items-center justify-between w-full'>
        <Link onClick={resetSelectedProduct} to='/'>
          <img src='/store_icon.png' alt='store icon' className='w-14 sm:w-24 xs:w-16 h-auto rounded-lg hover:scale-110' />
        </Link>
        <CartButton active={false} />
      </nav>
    </header>
  )
}

export default Header
