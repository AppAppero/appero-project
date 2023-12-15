import axios from "axios";
import { containerHotels, error, loading, setFilterHotel } from "../../redux/reducerHotel";
import { GET_FILTER_HOTEL, GET_HOTEL, SEARCH_HOTEL } from "../../utils/commons/constAPI";

const instanceBookinCom = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        Accept: "*/*",
    }
})

// API per ricerca hotel
export const searchHotelFetch = async (input, dispatch) => {
    dispatch(loading(true))
    try {
        const hotelResult = await instanceBookinCom.post(SEARCH_HOTEL, input)
        dispatch(loading(false))
        dispatch(containerHotels(hotelResult?.data))
    } catch (e) {
        dispatch(loading(false))
        dispatch(error(e))
    }
    dispatch(loading(false))
}


// API per i Filtri degli Hotel
export const getFilterHotelFetch = async (input, dispatch) => {
    try {
        const filterResult = await instanceBookinCom.post(GET_FILTER_HOTEL, input)
        dispatch(setFilterHotel(filterResult?.data))
    } catch (e) {
        dispatch(error(e))
    }
}

// Restituisce il singolo hotel ricercato
export const getDetailHotel = async (input) => {
    try {
        const response = await instanceBookinCom.post(GET_HOTEL, input)
        return response?.data?.data;
    } catch (e) {
        console.error(e)
    }
}



