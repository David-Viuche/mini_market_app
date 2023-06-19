import { createSlice } from '@reduxjs/toolkit'
import getProducts from '../../services/getProducts'

const DEFAULT_STATE = {
  products: [],
  selectedProduct: null
}

const initialState = (() => {
  const products = getProducts()

  const persistedState = localStorage.getItem('__redux__state__')
  const productsLocal = persistedState ? JSON.parse(persistedState).products : DEFAULT_STATE.products
  const selectedProductLocal = persistedState ? JSON.parse(persistedState).selectedProduct : DEFAULT_STATE.selectedProduct

  return {
    products: products || productsLocal || DEFAULT_STATE.products,
    selectedProduct: selectedProductLocal || null
  }
})()

export const productsSlice = createSlice({
  name: 'products',
  initialState: initialState || initialStateProducts,
  reducers: {
    selectProduct: (state, action) => {
      state.selectedProduct = action.payload
    },
    resetSelectProduct: (state) => {
      state.selectedProduct = null
    }
  }
})

export default productsSlice.reducer

export const { selectProduct, resetSelectProduct } = productsSlice.actions
