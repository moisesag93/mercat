import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/counterSlice'
import productReducer from './reducers/productSlice'
import cartReducer from './reducers/cartSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
    cart: cartReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch