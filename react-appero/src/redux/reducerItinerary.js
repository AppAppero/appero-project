import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    itinerary: {
        flights: [],
        hotel: [],
        renderCar: [],
        attracion: [],
        listPrice: [],
        totalPrice: 0
    },
    budget: 0
}

const reducerItinerary = createSlice({
    name: "itinerary",
    initialState,
    reducers: {
        updateItinerary: (state, action) => {
            state = action.payload;
        },
        updateBudget: (state, action) => {
            state.budget = action.payload
        }
    }
})

export const { updateItinerary } = reducerItinerary.actions;

export default reducerItinerary.reducer;