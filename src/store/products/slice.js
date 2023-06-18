import { createSlice } from '@reduxjs/toolkit'
import getProducts from '../../services/getProducts'

const DEFAULT_STATE = {
  products: [],
  selectedProduct: null
}

const initialState = (() => {
  const products = getProducts()
  return {
    products: products || DEFAULT_STATE,
    selectedProduct: null
  }
})()

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    selectProduct: (state, action) => {
      state.selectedProduct = action.payload
    }
  }
})

export default productsSlice.reducer

export const { selectProduct } = productsSlice.actions
