import { selectProduct } from '../store/products/slice'
import { useDispatch } from 'react-redux'

export const useUserActions = () => {
  const dispatch = useDispatch()

  const setSelectedProduct = ({ id, name, price, img, description }) => {
    dispatch(selectProduct({ id, name, price, img, description }))
  }
  return { setSelectedProduct }
}
