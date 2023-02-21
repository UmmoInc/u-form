import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: [],
}

export const userSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    addUser: (state,action) => {
        // state.user.push(action.payload); 
        state.user = [...state.user,action.payload]
    },
  },
})

// Action creators are generated for each case reducer function
export const { addUser } = userSlice.actions

export const Items = (state) => state.userData.user

export default userSlice.reducer