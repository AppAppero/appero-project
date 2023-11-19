import { createSlice, isAnyOf } from "@reduxjs/toolkit";

// Match per ricalcolare il budget
const reloadBudget = (action) => {
    return isAnyOf(addFlight, removeFlight)(action)
}

// Match per contare la quantità del carrello
const counterCart = (action) => {
    return isAnyOf(addFlight, removeFlight)(action)
}

const initialState = {
    itinerary: {
        flight: {},
        hotel: [],
        renderCar: [],
        attracion: [],
        listPrice: [],
        totalPrice: 0
    },
    principalBudget: 0,
    actualBudget: 0,
    counterCart: 0
}

const reducerItinerary = createSlice({
    name: "itinerary",
    initialState,
    reducers: {
        // Riaggiorna completamente il carrello
        updateItinerary: (state, action) => {
            state = action.payload;
        },
        // Aggiorna il budget
        updateBudget: (state, action) => {
            state.principalBudget = parseFloat(action.payload.toFixed(2))
            state.actualBudget = state.principalBudget
        },
        // Aggiunge il volo
        addFlight: (state, action) => {
            state.itinerary.flight = action.payload
        },
        // Rimuove manualmente il volo
        removeFlight: (state) => {
            state.itinerary.flight = {}
        },
        // Svuota il carrello 
        cleanCart: (state) => {
            state.itinerary = {}
            state.counterCart = 0
            state.actualBudget = state.principalBudget
        }
    },
    extraReducers: (builder) => {
        builder
            // Match per il ricalcolo del budget
            .addMatcher(reloadBudget, (state) => {
                let totalFlight = state?.itinerary?.flight?.price?.grandTotal ?
                    parseFloat(state?.itinerary?.flight?.price?.grandTotal).toFixed(2) : 0

                state.actualBudget =
                    parseFloat(state?.principalBudget - totalFlight).toFixed(2)
            })
            // Match per il contenggio quantitativo nel carrello
            .addMatcher(counterCart, (state) => {
                state.counterCart = state?.itinerary?.flight?.id ? 1 : 0
            })
    }
})

export const { cleanCart, removeFlight, updateItinerary, updateBudget, addFlight } = reducerItinerary.actions;

export default reducerItinerary.reducer;