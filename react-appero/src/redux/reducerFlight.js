import { createAction, createSlice, isAllOf, isAnyOf } from "@reduxjs/toolkit";
import { login } from "../api/fecthLoginAmadeus";
import instanceFlight from "../api/fetchFlight";

// Create action
const ex = createAction("search-flight-amadeus")

// Create match
const isEx = (action) => {
    return action.type
    // .endWith("")
}

//Create MultipleMatch
const isMultiEx = (action) => {
    //Per tutti i Match return isAllOf
    return isAnyOf(isEx,)(action)
}

const initialState = {
    logged: true,
    isLoading: true,
    isError: false,
    messageError: "",
    flights: []
}


const reducerFlight = createSlice(
    {
        name: "flight",
        initialState,
        reducers: {
            logged: (state, action) => {
                state.logged = action.payload
            },
            loading: (state, action) => {
                state.isLoading = action.payload
                state.isError = false
                state.messageError = ""
            },
            error: (state, action) => {
                state.isLoading = false
                state.isError = true
                state.messageError = action.payload
                state.flights = []
            },
            containerFlights: (state, action) => {
                state.isLoading = false
                state.isError = false
                state.messageError = ""
                state.flights = action.payload
            }
        },

        extraReducers: (builder) => {
            builder
                .addCase(ex, (state, action) => {

                })
                .addMatcher(isMultiEx, (state, action) => {

                })
                .addDefaultCase(state => { return state })
        }
    }
)

export const { logged, loading, error, containerFlights } = reducerFlight.actions;

export const searchFlightAmadeus = (params) => async (dispatch) => {
    dispatch(loading(true))
    await login()
        .then(_ => {
            return instanceFlight.get("", { params: params })
                .then(data => {
                    dispatch(loading(false))
                    dispatch(containerFlights(data.data.data));
                })
                .catch(e => {
                    dispatch(loading(false))
                    dispatch(error(e.message));
                });
        }).catch(error => {
            dispatch(loading(false))
            dispatch(error(error.message));
        });
}


export default reducerFlight.reducer;