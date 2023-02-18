import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: "",
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state,action) => {
        state.user = [...state.grading,action.payload] 
    },
  },
})

// Action creators are generated for each case reducer function
export const { addUser } = userSlice.actions

export const Items = (state) => state.user.user

export default userSlice.reducer