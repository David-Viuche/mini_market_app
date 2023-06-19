import Close from './svg/Close'
import ShoppingCart from './svg/ShoppingCart'
import { useSelector } from 'react-redux'
import { formatCurrency } from '../utils/utils'
import { Link } from 'react-router-dom'
import { useUserActions } from '../hooks/useProductActions'

const CartButton = () => {
  const total = useSelector(state => state.cart.total)
  const { resetSelectedProduct } = useUserActions()
  const active = useSelector(state => state.cart.active)

  return (
    <div className='flex h-10 '>
      <Link to='/cart' onClick={resetSelectedProduct} className={`border flex items-center h-full gap-6 p-2 hover:scale-110  border-fuchsia-600 ${(active ? 'bg-fuchsia-100 text-fuchsia-600' : 'bg-fuchsia-600 text-fuchsia-100')}`}>
        <ShoppingCart color={(active) ? 'rgb(192 38 211)' : 'rgb(250 232 255)'} />
        <span className='font-bold'>
          {formatCurrency(total)}
        </span>
      </Link>
      {
        active && <Link to='/' className='font-bold text-xl text-white hover:scale-110 bg-fuchsia-600 h-full flex items-center justify-center px-2'>
          <Close />
        </Link>
      }
    </div>
  )
}

export default CartButton
