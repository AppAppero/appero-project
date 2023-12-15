import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getFilterHotelFetch, searchHotelFetch } from "../api/hotel/fetchHotel";
import { checkTextCalculateDate, checkTextDate, checkTextPerson } from "../utils/commons/formatState";
import { detail_hotel_val, hotel_val } from "../utils/hotel/exHotel";

const createDeatilsHotel = (state, action) => {
    return isAnyOf(setDetailsHotel)(state, action)
}

const initialState = {
    isLoading: false,
    isError: false,
    messageError: "",
    hotels: [],
    selectHotelId: 0,
    filterHotel: {},
    detailsHotel: {},
    headerDetailHotel: []
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
                state.detailsHotel = action.payload.paramsHotel
            },
            setFilterHotel: (state, action) => {
                state.filterHotel = action.payload
            },
            selectedHotel: (state, action) => {
                state.selectHotelId = action.payload
            }
        },
        extraReducers: (builder) => {
            builder.
                addMatcher(createDeatilsHotel, (state, action) => {
                    state.headerDetailHotel = createArrayDetails(state, action)
                })
        }
    }
)

export const { selectedHotel, setDetailsHotel, loading, containerHotels, setFilterHotel, error } = reducerHotel.actions;

// API per ricerca hotel
export const searchHotel = (input, isTest) => async (dispatch, getState) => {
    if (!isTest) {
        searchHotelFetch(createParams(input, getState), dispatch)
    } else {
        dispatch(loading(false))
        dispatch(containerHotels(hotel_val))
    }
}


// API per i Filtri degli Hotel
export const getFilterHotel = (input, isTest) => async (dispatch, getState) => {
    if (!isTest) {
        getFilterHotelFetch(createParams(input, getState), dispatch)
    } else {
        dispatch(loading(false))
        dispatch(setFilterHotel(detail_hotel_val))
    }
}

// Crea i parametri degli hotel raggruppandoli in base all'utilità (API FILTRI E RICERCA HOTEL)
const createParams = ({ params, paramIdFilters = [] }, getState) => {
    const overnightCity = getState()?.reducerHotel?.detailsHotel?.overnightCity
    const numberRoom = getState()?.reducerHotel?.detailsHotel?.numberRoom
    const actualBudget = parseFloat(getState()?.reducerItinerary?.actualBudget)
    return {
        overnightCity, numberRoom,
        actualBudget,
        departureDate: params.departureDate,
        returnDate: params.returnDate,
        adults: params.adults,
        ageChildren: undefined,
        currencyCode: params.currencyCode,
        lang: "IT",
        categoriesFilter: paramIdFilters
    }
}

/**
 * Crea l'array dei dettagli compresi quelli del modal
 * 
 * @param {*} state 
 * @param {*} action 
 * @param {*} stringRoom 
 * @returns 
 */
const createArrayDetails = (state, action) => {
    const params = action?.payload?.params
    const paramsHotel = action?.payload?.paramsHotel
    let stringRoom = paramsHotel?.numberRoom === 1 ?
        paramsHotel?.numberRoom + " Stanza" : paramsHotel?.numberRoom + " Stanze"
    return [
        {
            title: "Destinazione/hotel struttura",
            detail: [
                {
                    text: state.detailsHotel?.overnightCity
                }
            ]
        },
        {

            title: "Check-in - Check-out",
            detail: [
                {
                    text: checkTextDate(params)
                }
            ]
        },
        {
            title: "Soggiorno di " + checkTextCalculateDate(params),
            detail: [
                {
                    text: checkTextPerson(params) + " - " + stringRoom
                }
            ]
        }
    ]
}

export default reducerHotel.reducer;