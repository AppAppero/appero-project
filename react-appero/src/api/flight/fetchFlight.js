import axios from "axios";
import { SEARCH_FLIGHT } from "../../utils/commons/constAPI";
import { error, loading } from "../../redux/reducerHotel";
import { containerFlights } from "../../redux/reducerFlight";

const instanceBookinCom = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        Accept: "*/*",
    }
})

/**
 * Chiama la API di Amadeus massandogli i parametri dopo il login (sempre AMADEUS)
 * e dispatcha le varie azioni
 * @param {*} params 
 * @param {*} dispatch 
 */
export const searchFlightFetch = async (params, dispatch) => {
    dispatch(loading(true))
    try {
        const data = await instanceBookinCom.post(SEARCH_FLIGHT, params)
        dispatch(loading(false))
        dispatch(containerFlights(data?.data?.data));
    } catch (e) {
        dispatch(loading(false))
        dispatch(error(e.message));
    }
}

