import { createAction, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { login } from "../api/fecthLoginAmadeus";
import instanceFlight from "../api/fetchFlight";
import { bar_mil, rom_val } from '../utils/exFlights';


// Create action : Crea il filtro per i voli migliori,economici e veloci
const filterFlight = createAction("filter-flight")

// Riordina con questo metodo dopo aver chiamato la API per i voli
const reorderFlight = (action) => {
    return action.type.endsWith("containerFlights")
}

//Create MultipleMatch
const multiple = (action) => {
    // Per tutti i Match return isAllOf
    return isAnyOf(reorderFlight)(action)
}

const initialState = {
    isLoading: true,
    isError: false,
    messageError: "",
    flights: [],
    filterFly: []
}


const reducerFlight = createSlice(
    {
        name: "flight",
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
                // Crea il filtro per i voli migliori,economici e veloci
                .addCase(filterFlight, (state, action) => {
                    // Definisco la scelta del volo in base ai filtri
                    switch (action.payload) {
                        case "best": {
                            state.flights.sort(compareFlights);
                        }
                            break;
                        case "economy": {
                            let arr = reorderByPrice(state.flights)
                            state.flights = arr;
                        }
                            break;
                        case "flash": {
                            let arr = reorderDuration(state.flights)
                            state.flights = arr;
                        }
                            break;
                    }
                })
                // Riordina i voli in base al prezzo
                .addMatcher(reorderFlight, (state) => {
                    state.flights = reorderByPrice(state.flights)
                    let flightStandard = calculateHour(state.flights.slice(0, 1))

                    let flash = reorderDuration(state.flights)
                    let flashTotal = calculateHour(flash.slice(0, 1))

                    let best = state.flights.sort(compareFlights);
                    let bestTotal = calculateHour(best.slice(0, 1))

                    // Definisco il contenitore dei filtri
                    state.filterFly =
                        [
                            {
                                title: "Migliore",
                                price: best[0]?.price?.grandTotal,
                                durationTotal: bestTotal
                            },
                            {
                                title: "Economico",
                                price: state?.flights[0]?.price?.grandTotal,
                                durationTotal: flightStandard
                            },
                            {
                                title: "Veloce",
                                price: flash[0]?.price?.grandTotal,
                                durationTotal: flashTotal
                            }
                        ]

                })
                .addDefaultCase(state => { return state })
        }
    }
)

export const { logged, loading, error, containerFlights } = reducerFlight.actions;

export { filterFlight, reorderFlight };

/**
 * Chiama la API di Amadeus massandogli i parametri dopo il login (sempre AMADEUS)
 * e dispatcha le varie azioni
 * @param {*} params 
 * @param {*} isTest 
 * @returns 
 */
export const searchFlightAmadeus = (params, isTest) => async (dispatch) => {
    if (!isTest) {
        dispatch(loading(true))
        try {
            await login()
            let data = await instanceFlight.get("", { params: params });
            dispatch(loading(false))
            dispatch(containerFlights(data.data.data));
        } catch (e) {
            console.log(e.response.status)
            dispatch(loading(false))
            dispatch(error(e.message));
        }
    }
    else {
        dispatch(loading(false))
        dispatch(containerFlights(rom_val));
    }
}

// Riordina in base al prezzo
const reorderByPrice = (flights) => {
    return flights.slice()
        .sort((a, b) => a.price.grandTotal - b.price.grandTotal)
}

// Riordina in base alla durata
const reorderDuration = (flights) => {
    return flights.slice().sort((a, b) => {
        const durationA = getDurationInSeconds(a);
        const durationB = getDurationInSeconds(b);

        return durationA - durationB;
    });
}

// Funzione di utilità per ottenere la durata in secondi da una stringa di durata
function getDurationInSeconds(item) {
    let durationString = item.itineraries && item.itineraries[0] && item.itineraries[0].segments
        ? item.itineraries[0].segments.reduce((totalDuration, segment) => {
            const segmentDuration = segment.duration;
            return addDurations(totalDuration, segmentDuration);
        }, "PT0H0M")
        : "PT0H0M";

    // Aggiungi "0H" se la stringa di durata include solo i minuti
    // if (!durationString.includes("H")) {
    //     durationString = "PT0H" + durationString.substring(2);
    // }

    // Aggiungi "0M" se la stringa di durata include solo le ore
    if (!durationString.includes("M")) {
        durationString += "0M";
    }

    const durationArray = durationString.match(/\d+/g);

    // Calcola la durata totale in secondi
    return durationArray.reduce((total, value, index) => {
        const multiplier = [3600, 60, 1][index]; // Ore, minuti, secondi
        return total + parseInt(value) * multiplier;
    }, 0);
}

// Mette in ordine dal più veloce al più lento viaggi
function addDurations(duration1, duration2) {
    const regex = /PT(\d+)H(\d+)M/;
    const match1 = duration1.match(regex);
    const match2 = duration2.match(regex);

    // Verifica che le corrispondenze siano valide
    if (!match1 || !match2 || match1.length < 3 || match2.length < 3) {
        // Se una delle corrispondenze non è valida, restituisci un valore di default o gestisci l'errore di conseguenza
        // console.error("Formato di durata non valido:", duration1, duration2);
        return "PT0H0M";
    }

    // Estrai le ore e i minuti dalle corrispondenze
    const hours1 = parseInt(match1[1]) || 0;
    const minutes1 = parseInt(match1[2]) || 0;
    const hours2 = parseInt(match2[1]) || 0;
    const minutes2 = parseInt(match2[2]) || 0;

    // Calcola le ore e i minuti totali
    const totalHours = hours1 + hours2;
    const totalMinutes = minutes1 + minutes2;

    const totalDuration = `PT${totalHours}H${totalMinutes > 0 ? totalMinutes : "0M"}`;

    return totalDuration;
}


// Calcola le ore totoali tra Andata e RItorno
const calculateHour = (flights) => {
    const durationRegex = /P(?:([0-9]+)Y)?(?:([0-9]+)M)?(?:([0-9]+)D)?T(?:([0-9]+)H)?(?:([0-9]+)M)?(?:([0-9]+)S)?/;
    let total = [];

    flights.forEach(el => {
        el?.itineraries?.forEach(i => {
            i?.segments?.forEach(s => {
                const match = s?.duration.match(durationRegex);

                if (!match) {
                    console.error('Durata non valida:', s?.duration);
                    return;
                }

                let [, years, months, days, hours, minutes, seconds] = match.map(Number);
                // console.log(years, months, days, hours, minutes, seconds);
                let h = hours ? hours : 0;
                let m = minutes ? minutes : 0;
                total.push({ h, m });
            });
        });
    });


    const totalHours = total.reduce((acc, cur) => {
        return {
            h: acc.h + cur.h,
            m: acc.m + cur.m
        };
    }, { h: 0, m: 0 });


    // Calcola anche le ore extra dai minuti
    const extraHoursFromMinutes = Math.floor(totalHours.m / 60);
    totalHours.h += extraHoursFromMinutes;
    totalHours.m %= 60;
    if (totalHours.h > 0 && totalHours.m > 0)
        return `${totalHours.h}h ${totalHours.m}m`
    else if (totalHours.h > 0 && totalHours.m <= 0)
        return `${totalHours.h}h`
    else if (totalHours.h <= 0 && totalHours.m > 0)
        return `${totalHours.m}m`

}

// Funzione per calcolare la durata totale in minuti
function calculateTotalDuration(itinerary) {
    return itinerary.reduce((total, segment) => total + segment.duration, 0);
}

// Funzione per confrontare due voli basandosi su durata totale, numero di scali e costo totale
function compareFlights(flight1, flight2) {
    const duration1 = calculateTotalDuration(flight1.itineraries[0].segments);
    const duration2 = calculateTotalDuration(flight2.itineraries[0].segments);

    if (duration1 < duration2) {
        return -1;
    } else if (duration1 > duration2) {
        return 1;
    } else {
        // Se le durate sono uguali, confronta basandosi sul numero di scali
        const stops1 = flight1.itineraries[0].segments.length - 1;
        const stops2 = flight2.itineraries[0].segments.length - 1;

        if (stops1 < stops2) {
            return -1;
        } else if (stops1 > stops2) {
            return 1;
        } else {
            // Se sia la durata che il numero di scali sono uguali, confronta basandosi sul costo totale
            const cost1 = parseFloat(flight1.price.grandTotal);
            const cost2 = parseFloat(flight2.price.grandTotal);

            return cost1 - cost2;
        }
    }
}

export default reducerFlight.reducer;