import { addProductToCart, removeProductToCart, toggleActiveCart } from '../store/cart/slice'
import { useDispatch } from 'react-redux'

export const useCartActions = () => {
  const dispatch = useDispatch()

  const addProductToCartAction = ({ id, name, price, img, description }) => {
    dispatch(addProductToCart({ id, name, price, img, description }))
  }

  const removeProductToCartAction = ({ id, price }) => {
    dispatch(removeProductToCart({ id, price }))
  }

  const toggleActiveCartAction = (value) => {
    dispatch(toggleActiveCart(value))
  }

  return { addProductToCartAction, removeProductToCartAction, toggleActiveCartAction }
}
