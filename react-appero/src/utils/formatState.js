import { MdConnectingAirports } from 'react-icons/md'
import { formatDuration } from './formatDuration'
import codeIATA from './codeIATA'

// Crea Stringa per formattare gli adulti e bambini
export const checkTextPerson = (params) => {
    let textAdults = params?.adults > 1 ?
        params?.adults + " Adulti" :
        params?.adults + " Adulto"

    let textChildren = params?.children !== "" ?
        (params?.children > 1 ?
            params?.children + " Bambini" :
            (params?.children === 1 ? params?.children + " Bambino" : "")
        ) : ""

    return textAdults + " " + textChildren
}

// Crea il formato della data del viaggio in base alla cultura
export const checkTextDate = (params) => {
    const culture = "it-IT";
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const icon = <MdConnectingAirports />
    let dep = new Date(params?.departureDate)
    let ret = new Date(params?.returnDate);
    const datDep = dep.toLocaleDateString(culture, options);
    const datRet = ret.toLocaleDateString(culture, options);

    return datDep + " - " + datRet
}

// Restituisce il totale dei giorni
export const checkTextCalculateDate = (params) => {
    let dep = new Date(params?.departureDate)
    let ret = new Date(params?.returnDate);
    let daysMill = ret - dep;
    let total = Math.floor(daysMill / (1000 * 60 * 60 * 24));
    return total > 0 ? total + " Giorni " : total + " Giorno"
}

// Restituisce il nome della città tramite cod IATA volo
export const checkNameCity = (param) => {
    let result = codeIATA.filter(el => Object.keys(el)[0].toString() === param);
    if (result) {
        let city = Object.values(result[0])[0]
        let arr = city?.split('-')
        return arr.slice(0, 2)?.join(' ')

    }
}