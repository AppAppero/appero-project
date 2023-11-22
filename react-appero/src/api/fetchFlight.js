import axios from "axios";
import Cookies from 'js-cookie';

const instanceFlight = axios.create({
    baseURL: process.env.REACT_APP_EARCH_FLIGHT,
    headers: {
        Accept: "*/*",
    }
})

// Interceptor per aggiornare dinamicamente l'header Authorization
instanceFlight.interceptors.request.use(
    (config) => {
        const token = Cookies.get("token-amadeus");
        if (token) {
            config.headers.Authorization = token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


export default instanceFlight;
