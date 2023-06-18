import { createSlice } from '@reduxjs/toolkit'

const DEFAULT_STATE = {
  total: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: DEFAULT_STATE,
  reducers: {
    incrementTotal: (state, action) => {
      state.total += action.payload
    }
  }
})

export default cartSlice.reducer

export const { incrementTotal } = cartSlice.actions
