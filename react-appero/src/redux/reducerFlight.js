import { createAction, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { login } from "../api/fecthLoginAmadeus";
import instanceFlight from "../api/fetchFlight";
import { bar_mil, rom_val } from '../utils/exFlights';


// Create action
const filterFlight = createAction("filter-flight")

// Create match
const reorderFlight = (action) => {
    return action.type.endsWith("containerFlights")
}

//Create MultipleMatch
const multiple = (action) => {
    //Per tutti i Match return isAllOf
    return isAnyOf(reorderFlight)(action)
}

const initialState = {
    logged: true,
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
            logged: (state, action) => {
                state.logged = action.payload
            },
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
                        case "best":
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
                .addMatcher(multiple, (state) => {
                    state.flights = reorderByPrice(state.flights)
                    let flightStandard = calculateHour(state.flights.slice(0, 1))

                    let flash = reorderDuration(state.flights)
                    let flashTotal = calculateHour(flash.slice(0, 1))

                    // Definisco il contenitore dei filtri
                    state.filterFly =
                        [
                            {
                                title: "Il migliore",
                                price: state?.flights[0]?.price?.grandTotal,
                                durationTotal: flightStandard
                            },
                            {
                                title: "Il più economico",
                                price: state?.flights[0]?.price?.grandTotal,
                                durationTotal: flightStandard
                            },
                            {
                                title: "Il più veloce",
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

export const searchFlightAmadeus = (params, isTest) => (dispatch) => {
    if (!isTest) {
        dispatch(loading(true))
        login()
            .then(_ => {
                return instanceFlight.get("", { params: params })
                    .then(data => {
                        dispatch(loading(false))
                        dispatch(containerFlights(data.data.data));
                    })
                    .catch(e => {
                        console.log(1)
                        dispatch(loading(false))
                        dispatch(error(e.message));
                    });
            }).catch(error => {
                console.log(2)
                dispatch(loading(false))
                dispatch(error(error.message));
            });
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

    return `${totalHours.h}h ${totalHours.m}m`;
}


export default reducerFlight.reducer;