import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { detail_hotel_val, hotel_val } from "../utils/exHotel";
import axios from "axios";
import { GET_FILTER_HOTEL, SEARCH_HOTEL } from "../utils/constAPI"

const getFilter = (state) => {
    return isAnyOf(containerHotels)(state)
}

const initialState = {
    isLoading: false,
    isError: false,
    messageError: "",
    hotels: [],
    filterHotel: {},
    detailsHotel: {}
}

const reducerHotel = createSlice(
    {
        name: "hotel",
        initialState,
        reducers: {
            loading: (state, action) => {
                state.isLoading = action.payload
                state.isError = false
                state.messageError = ""
            },
            error: (state, action) => {
                state.isLoading = false
                state.isError = true
                state.messageError = action.payload
                state.hotels = []
                state.filterHotel = {}
            },
            containerHotels: (state, action) => {
                state.isLoading = false
                state.isError = false
                state.messageError = ""
                state.hotels = action.payload
            },
            setDetailsHotel: (state, action) => {
                state.detailsHotel = action.payload
            },
            setFilterHotel: (state, action) => {
                state.filterHotel = action.payload
            }
        },
        // extraReducers: (builder) => {
        //     builder.
        //         addMatcher(getFilter, (state, action) => {
        //             console.log(action.payload)
        //             getFilterHotel(action.payload.params, action.payload.isTest)
        //         })
        // }
    }
)

export const { setDetailsHotel, loading, containerHotels, setFilterHotel, error } = reducerHotel.actions;

// API per ricerca hotel
export const searchHotel = (params, isTest, setParamsHotel) => async (dispatch, getState) => {
    if (!isTest) {
        dispatch(loading(true))
        try {
            const url = process.env.REACT_APP_BASE_URL + SEARCH_HOTEL;
            const hotelResult = await axios.post(url, completeParams(params, getState, setParamsHotel))
            dispatch(loading(false))
            dispatch(containerHotels(hotelResult?.data))
        } catch (e) {
            dispatch(loading(false))
            dispatch(error(e))
        }
        dispatch(loading(false))
    } else {
        console.log(completeParams(params, getState, setParamsHotel))
        dispatch(loading(false))
        dispatch(containerHotels(hotel_val))
    }
}


// API per i Filtri degli Hotel
export const getFilterHotel = (params, isTest, setParamsHotel) => async (dispatch, getState) => {
    if (!isTest) {
        try {
            const url = process.env.REACT_APP_BASE_URL + GET_FILTER_HOTEL;
            const filterResult = await axios.post(url, completeParams(params, getState, setParamsHotel))
            dispatch(setFilterHotel(filterResult?.data))
        } catch (e) {
            console.log(e)
            dispatch(error(e))
        }
    } else {
        console.log(completeParams(params, getState, setParamsHotel))
        dispatch(loading(false))
        dispatch(setFilterHotel(detail_hotel_val))
    }
}

const completeParams = (params, getState, setParamsHotel) => {
    // Completa l'aggiornamento degli ultimi dati inseriti
    const overnightCity = getState().reducerHotel.detailsHotel.overnightCity
    const numberRoom = getState().reducerHotel.detailsHotel.numberRoom
    if (setParamsHotel)
        setParamsHotel({ ...params, overnightCity, numberRoom })
    return { ...params, overnightCity, numberRoom }
}

export default reducerHotel.reducer;