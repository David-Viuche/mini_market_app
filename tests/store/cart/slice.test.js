import cartReducer, {
  incrementTotal,
  addProductToCart,
  removeProductToCart,
  toggleActiveCart
} from '../../../src/store/cart/slice'

// Test para el reducer
describe('cartReducer', () => {
  it('should handle incrementTotal', () => {
    const initialState = {
      total: 0,
      active: false,
      products: []
    }

    const action = incrementTotal(10)
    const nextState = cartReducer(initialState, action)

    expect(nextState.total).toEqual(10)
  })

  it('should handle addProductToCart when product does not exist', () => {
    const initialState = {
      total: 0,
      active: false,
      products: []
    }

    const action = addProductToCart({ id: 1, price: 10 })
    const nextState = cartReducer(initialState, action)

    expect(nextState.products).toEqual([{ id: 1, price: 10, cant: 1 }])
    expect(nextState.total).toEqual(10)
  })

  it('should handle addProductToCart when product already exists', () => {
    const initialState = {
      total: 20,
      active: false,
      products: [{ id: 1, price: 10, cant: 2 }]
    }

    const action = addProductToCart({ id: 1, price: 10 })
    const nextState = cartReducer(initialState, action)

    expect(nextState.products).toEqual([{ id: 1, price: 10, cant: 3 }])
    expect(nextState.total).toEqual(30)
  })

  it('should handle removeProductToCart when product exists and cant > 0', () => {
    const initialState = {
      total: 30,
      active: false,
      products: [{ id: 1, price: 10, cant: 3 }]
    }

    const action = removeProductToCart({ id: 1, price: 10 })
    const nextState = cartReducer(initialState, action)

    expect(nextState.products).toEqual([{ id: 1, price: 10, cant: 2 }])
    expect(nextState.total).toEqual(20)
  })

  it('should handle removeProductToCart when product exists and cant = 0', () => {
    const initialState = {
      total: 10,
      active: false,
      products: [{ id: 1, price: 10, cant: 1 }]
    }

    const action = removeProductToCart({ id: 1, price: 10 })
    const nextState = cartReducer(initialState, action)

    expect(nextState.products).toEqual([])
    expect(nextState.total).toEqual(0)
  })

  it('should handle toggleActiveCart with payload not null', () => {
    const initialState = {
      total: 0,
      active: false,
      products: []
    }

    const action = toggleActiveCart(true)
    const nextState = cartReducer(initialState, action)

    expect(nextState.active).toEqual(true)
  })

  it('should handle toggleActiveCart with payload null', () => {
    const initialState = {
      total: 0,
      active: false,
      products: []
    }

    const action = toggleActiveCart(null)
    const nextState = cartReducer(initialState, action)

    expect(nextState.active).toEqual(true)
  })
})
