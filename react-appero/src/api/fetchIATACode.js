import axios from "axios"
import loginFetch from "./fecthLoginAmadeus"

const instanceIATA = axios.create({
    baseURL: process.env.REACT_APP_IATA,
    headers: {
        Accept: "*/*",
        Authorization: localStorage.getItem("token-amadeus")
    }
})


const searchIATACode = async (value) => {
    await loginFetch(true)
    const params = {
        keyword: value,
        max: 1,
    };

    const response = await instanceIATA.get("", { params: params })
        .then(data => {
            return data?.data?.data[0]?.iataCode;
        })
        .catch(error => {
            console.error(error);
        });

    return response;

}


export default searchIATACode;
