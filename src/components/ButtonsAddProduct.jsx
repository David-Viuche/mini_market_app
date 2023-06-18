import { useSelector } from 'react-redux'
import { useCartActions } from '../hooks/useCartActions'
const ButtonsAddProduct = () => {
  const selectedProduct = useSelector(state => state.products.selectedProduct)

  const { addProductToCartAction, removeProductToCartAction } = useCartActions()

  const handleOnclick = () => {
    addProductToCartAction(selectedProduct)
  }

  const handleOnclickRemove = () => {
    removeProductToCartAction(selectedProduct)
  }

  return (
    <div className='flex items-center justify-center sm:justify-end text-2xl'>
      <button onClick={handleOnclickRemove} className='font-bold  text-black hover:scale-110 hover:bg-gray-200 bg-gray-300 h-8 w-32 sm:w-8 flex items-center justify-center px-2'>
        -
      </button>
      <button onClick={handleOnclick} className='font-bold  text-white hover:scale-110 hover:bg-fuchsia-400 bg-fuchsia-600 h-8 w-32 sm:w-8 flex items-center justify-center px-2'>
        +
      </button>
    </div>
  )
}

export default ButtonsAddProduct
