import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../components/features/counter/counterSlice'
import userSlice, { addUser } from '../components/features/counter/userSlice'

export const store = configureStore({
  reducer: {
    results: counterSlice,
    userData: userSlice,
  },
})