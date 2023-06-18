import { createSlice } from '@reduxjs/toolkit'
import getProducts from '../../services/getProducts'

const DEFAULT_STATE = []

const initialState = (() => {
  const products = getProducts()
  return products || DEFAULT_STATE
})()

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {}
})

export default productsSlice.reducer
