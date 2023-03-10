import { createSlice } from '@reduxjs/toolkit'



const initialState = {
  grading: [],
}

export const counterSlice = createSlice({
  name: 'grade',
  initialState,
  reducers: {
    addToGrading: (state,action) => {
        state.grading = [...state.grading,action.payload] 
        // state.grading.push(action.payload); 

    },
  },
})

// Action creators are generated for each case reducer function
export const { addToGrading } = counterSlice.actions

export const Items = (state) => state.results.grading

export default counterSlice.reducer