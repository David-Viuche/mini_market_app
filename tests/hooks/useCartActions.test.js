import { useDispatch } from 'react-redux'
import { addProductToCart, removeProductToCart, toggleActiveCart } from '../../src/store/cart/slice'
import { useCartActions } from '../../src/hooks/useCartActions'

// Mock useDispatch para verificar si se llama a las acciones adecuadas
jest.mock('react-redux', () => ({
  useDispatch: jest.fn()
}))

describe('useCartActions', () => {
  let dispatch
  let actions

  beforeEach(() => {
    dispatch = jest.fn()
    useDispatch.mockReturnValue(dispatch)
    actions = useCartActions()
  })

  it('debería llamar a addProductToCart con los parámetros correctos', () => {
    const product = {
      id: 1,
      name: 'Producto de prueba',
      price: 10,
      img: 'imagen.png',
      description: 'Descripción del producto'
    }

    actions.addProductToCartAction(product)

    expect(dispatch).toHaveBeenCalledWith(addProductToCart(product))
  })

  it('debería llamar a removeProductToCart con los parámetros correctos', () => {
    const product = {
      id: 1,
      price: 10
    }

    actions.removeProductToCartAction(product)

    expect(dispatch).toHaveBeenCalledWith(removeProductToCart(product))
  })

  it('debería llamar a toggleActiveCart', () => {
    actions.toggleActiveCartAction()

    expect(dispatch).toHaveBeenCalledWith(toggleActiveCart())
  })
})
