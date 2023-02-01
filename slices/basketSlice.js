import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    verificationResponse: [],
};

export const basketSlice = createSlice({
    name: "verification",
    initialState,
    reducers: {
        addToResponse : (state, action ) => {
            state.verificationResponse = [...state.verificationResponse, action.payload]
        },
    },
});

export const { addToResponse } = basketSlice.actions;

export const getResponse = (state) => state.verification;

export default basketSlice.reducer