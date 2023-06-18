import { addProductToCart, removeProductToCart } from '../store/cart/slice'
import { useDispatch } from 'react-redux'

export const useCartActions = () => {
  const dispatch = useDispatch()

  const addProductToCartAction = ({ id, name, price, img, description }) => {
    dispatch(addProductToCart({ id, name, price, img, description }))
  }

  const removeProductToCartAction = ({ id, price }) => {
    dispatch(removeProductToCart({ id, price }))
  }

  return { addProductToCartAction, removeProductToCartAction }
}
