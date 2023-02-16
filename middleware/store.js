import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../components/features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    results: counterSlice
  },
})