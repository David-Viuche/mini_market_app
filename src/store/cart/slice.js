import { createSlice } from '@reduxjs/toolkit'

const DEFAULT_STATE = {
  total: 0,
  products: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: DEFAULT_STATE,
  reducers: {
    incrementTotal: (state, action) => {
      state.total += action.payload
    },
    addProductToCart: (state, action) => {
      const product = state.products.find(p => p.id === action.payload.id)

      if (!product) {
        state.products.push({ ...action.payload, cant: 1 })
      } else {
        product.cant += 1
      }
      state.total += action.payload.price
    },
    removeProductToCart: (state, action) => {
      const product = state.products.find(p => p.id === action.payload.id)
      if (product) {
        product.cant -= 1

        console.log(product)
        if (product.cant === 0) {
          state.products = state.products.filter(p => p.id !== action.payload.id)
        }

        state.total -= action.payload.price
      }
    }
  }
})

export default cartSlice.reducer

export const { incrementTotal, addProductToCart, removeProductToCart } = cartSlice.actions
