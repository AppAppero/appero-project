import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: true,
    isError: false,
    messageError: "",
    hotels: [],
    filterHotel: []
}

const reducerHotel = createSlice(
    {
        name: "hotel",
        initialState,
        reducers: {
            loading: (state, action) => {
                state.filterHotel = []
                state.isLoading = action.payload
                state.isError = false
                state.messageError = ""
            },
            error: (state, action) => {
                state.isLoading = false
                state.isError = true
                state.messageError = action.payload
                state.hotels = []
                state.filterHotel = []
            },
            containerHotels: (state, action) => {
                state.filterHotel = []
                state.isLoading = false
                state.isError = false
                state.messageError = ""
                state.hotels = action.payload
            }
        }
    }
)

export const { } = reducerHotel.actions;

export default reducerHotel.reducer;