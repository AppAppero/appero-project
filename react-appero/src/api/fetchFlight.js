import axios from "axios";

const instanceFlight = axios.create({
    baseURL: process.env.REACT_APP_EARCH_FLIGHT,
    headers: {
        Accept: "*/*",
        Authorization: localStorage.getItem("token-amadeus")
    }
})


export default instanceFlight;
