import Close from './svg/Close'
import ShoppingCart from './svg/ShoppingCart'

const CartButton = ({ active }) => {
  return (
    <div className='flex h-10 '>
      <button className={`border flex items-center h-full gap-6 p-2 hover:scale-110  border-fuchsia-600 ${(active ? 'bg-fuchsia-100 text-fuchsia-600' : 'bg-fuchsia-600 text-fuchsia-100')}`}>
        <ShoppingCart color={(active) ? 'rgb(192 38 211)' : 'rgb(250 232 255)'} />
        <span className='font-bold'>
          $0
        </span>
      </button>
      {
        active && <button className='font-bold text-xl text-white hover:scale-110 bg-fuchsia-600 h-full flex items-center justify-center px-2'>
          <Close />
        </button>
      }
    </div>
  )
}

export default CartButton
