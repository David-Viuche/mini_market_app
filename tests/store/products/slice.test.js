// Importa las acciones que quieres probar
import { selectProduct, resetSelectProduct } from '../../../src/store/products/slice'

// Importa el reducer que quieres probar
import productsReducer from '../../../src/hooks/useProductActions'

// Test para el reducer
describe('productsReducer', () => {
  it('should handle selectProduct', () => {
    const initialState = {
      products: [],
      selectedProduct: null
    }

    const action = selectProduct('product1')
    const nextState = productsReducer(initialState, action)

    expect(nextState.selectedProduct).toEqual('product1')
  })

  it('should handle resetSelectProduct', () => {
    const initialState = {
      products: [],
      selectedProduct: 'product1'
    }

    const action = resetSelectProduct()
    const nextState = productsReducer(initialState, action)

    expect(nextState.selectedProduct).toBeNull()
  })
})

// Test para las acciones
describe('products actions', () => {
  it('should create an action to select a product', () => {
    const expectedAction = {
      type: 'products/selectProduct',
      payload: 'product1'
    }

    expect(selectProduct('product1')).toEqual(expectedAction)
  })

  it('should create an action to reset the selected product', () => {
    const expectedAction = {
      type: 'products/resetSelectProduct'
    }

    expect(resetSelectProduct()).toEqual(expectedAction)
  })
})

// Test para el estado inicial
describe('initial state', () => {
  it('should initialize the state correctly', () => {
    // Simula la función getProducts()
    jest.mock('../../services/getProducts', () => {
      return () => [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' }
      ]
    })

    // Restaura el módulo para que use la implementación simulada
    jest.resetModules()
    const { initialState } = require('./productsSlice')

    expect(initialState).toEqual({
      products: [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' }
      ],
      selectedProduct: null
    })
  })
})
