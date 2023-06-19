import { useDispatch } from 'react-redux'
import { selectProduct, resetSelectProduct } from '../../src/store/products/slice'
import { useUserActions } from '../../src/hooks/useProductActions'

// Mock useDispatch para verificar si se llama a las acciones adecuadas
jest.mock('react-redux', () => ({
  useDispatch: jest.fn()
}))

describe('useUserActions', () => {
  let dispatch
  let actions

  beforeEach(() => {
    dispatch = jest.fn()
    useDispatch.mockReturnValue(dispatch)
    actions = useUserActions()
  })

  it('debería llamar a selectProduct con los parámetros correctos al llamar setSelectedProduct', () => {
    const product = {
      id: 1,
      name: 'Producto de prueba',
      price: 10,
      img: 'imagen.png',
      description: 'Descripción del producto'
    }

    actions.setSelectedProduct(product)

    expect(dispatch).toHaveBeenCalledWith(selectProduct(product))
  })

  it('debería llamar a resetSelectProduct al llamar resetSelectedProduct', () => {
    actions.resetSelectedProduct()

    expect(dispatch).toHaveBeenCalledWith(resetSelectProduct())
  })

  it('debería llamar a dispatch solo una vez al llamar setSelectedProduct', () => {
    const product = {
      id: 1,
      name: 'Producto de prueba',
      price: 10,
      img: 'imagen.png',
      description: 'Descripción del producto'
    }

    actions.setSelectedProduct(product)

    expect(dispatch).toHaveBeenCalledTimes(1)
  })

  it('debería llamar a dispatch solo una vez al llamar resetSelectedProduct', () => {
    actions.resetSelectedProduct()

    expect(dispatch).toHaveBeenCalledTimes(1)
  })

  it('debería devolver la función setSelectedProduct y resetSelectedProduct', () => {
    expect(actions.setSelectedProduct).toBeInstanceOf(Function)
    expect(actions.resetSelectedProduct).toBeInstanceOf(Function)
  })
})
