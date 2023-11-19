import { useState, useEffect } from "react";
import { formatDuration, formatHourByDate } from "../../utils/formatDuration";

const useMapFlight = (flight) => {
    const [flightItinerary, setFlightItinerary] = useState(
        [
            // {
            //     segments: [
            //         {
            //             departure: "",
            //             IATADeparture: "",
            //             duration: "",
            //             stopovers: "",
            //             arrival: "",
            //             IATAArrival: "",
            //         },
            //     ],
            //     price: 0
            // }
        ]
    );

    useEffect(() => {
        let itineraries = [];
        flight.itineraries.forEach((el) => {
            el.segments.forEach((s) => {
                let segment = {
                    departure: formatHourByDate(s?.departure?.at),
                    IATADeparture: s?.departure?.iataCode,
                    duration: formatDuration(s?.duration),
                    stopovers:
                        el?.segments.length === 1
                            ? "Diretto"
                            : el?.segments.length - 1 + " Scali",
                    arrival: formatHourByDate(s?.arrival?.at),
                    IATAArrival: s?.arrival?.iataCode,
                };
                itineraries.push([{ ...segment }])
            });
        });
        let price = flight.price?.grandTotal;
        setFlightItinerary([{...itineraries}]);
        console.log(flightItinerary)
    }, []);

    return flightItinerary;
};

export default useMapFlight;
