import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './products/slice'
import cartReducer from './cart/slice'

const persistanceLocalStorageMiddleware = (store) => (next) => (action) => {
  next(action)
  localStorage.setItem('__redux__state__', JSON.stringify(store.getState()))
}

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer
  },
  middleware: [persistanceLocalStorageMiddleware]
})
