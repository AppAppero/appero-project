import codeIATA from '../home/codeIATA'
import currency from './currency'

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

    let textInfants = params?.infants !== "" ?
        (params?.infants > 1 ?
            params?.infants + " Neonati" :
            (params?.infants === 1 ? params?.infants + " Neonato" : "")
        ) : ""

    return textAdults + " " + textChildren + " " + textInfants
}

// Crea il formato della data del viaggio in base alla cultura
export const checkTextDate = (params) => {
    let dep = checkTextDateByValue(params?.departureDate)
    let ret = checkTextDateByValue(params?.returnDate);
    return dep + " - " + ret
}

export const checkTextDateByValue = (value) => {
    const culture = "it-IT";
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    if (value) {
        let val = new Date(value)
        return val?.toLocaleDateString(culture, options);
    }
    return ""
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
export const nameCityByIATA = (param) => {
    let result = codeIATA?.filter(el => Object.keys(el)[0].toString() === param);
    if (result && result[0]) {
        let city = Object.values(result[0])[0]
        let arr = city?.split('-')
        return arr.slice(0, 1)?.join(' ')

    }
}

// Cerca(encoded) il simbolo della moneta
export const encodedSymbolCurrency = (code) => {
    return currency.filter(curr => curr.code === code)[0]?.symbol
}