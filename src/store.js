import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import cartReducer from './cartSlice'

export const store = configureStore({
  reducer: {
    counter:counterReducer, //everything is in slice and it stays in reducer so we have to import counterReducer from counterSlice.reducer from the other file
    cart:cartReducer,
  },
})