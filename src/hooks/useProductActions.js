import { selectProduct, resetSelectProduct } from '../store/products/slice'
import { useDispatch } from 'react-redux'

export const useUserActions = () => {
  const dispatch = useDispatch()

  const setSelectedProduct = ({ id, name, price, img, description }) => {
    dispatch(selectProduct({ id, name, price, img, description }))
  }

  const resetSelectedProduct = () => {
    dispatch(resetSelectProduct())
  }

  return { setSelectedProduct, resetSelectedProduct }
}
