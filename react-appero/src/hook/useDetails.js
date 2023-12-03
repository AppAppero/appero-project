import { nameCityByIATA, checkTextCalculateDate, checkTextDate, checkTextPerson } from "../utils/formatState";
import { BiSolidUser } from 'react-icons/bi';
import { BsCalendar3 } from 'react-icons/bs';
import { SiGooglemaps } from 'react-icons/si';
import { useGlobalContext } from "../context/context";
import { useEffect, useState } from "react";

// Modello per i dettagli del volo
const useDetails = () => {

    let { params, paramsHotel, context } = useGlobalContext()
    const [details, setDetails] = useState([])
    const sizeIcon = 12

    const generateStringRoom = () => {
        return paramsHotel?.numberRoom === 1 ? 
        paramsHotel?.numberRoom + " Stanza" : paramsHotel?.numberRoom + " Stanze"
    }


    const detailsFlight =
        [
            {
                title: "Destinazione",
                detail: [
                    {
                        icon: <SiGooglemaps size={sizeIcon} />,
                        text: nameCityByIATA(params?.destinationLocationCode)
                    },
                    {
                        text: "Da " + nameCityByIATA(params?.originLocationCode),
                        style: { fontSize: "12px" }
                    }
                ]
            },
            {

                title: "Data",
                detail: [
                    {
                        icon: <BsCalendar3 size={sizeIcon} />,
                        text: checkTextDate(params)
                    },
                    {
                        icon: "",
                        text: checkTextCalculateDate(params),
                        style: { fontSize: "12px" }
                    }
                ]
            },
            {
                title: "Persone",
                detail: [
                    {
                        icon: <BiSolidUser size={sizeIcon} />,
                        text: checkTextPerson(params)
                    }
                ]
            }
        ]


    const detailsHotel = [
        {
            title: "Destinazione/hotel struttura",
            detail: [
                {
                    icon: <SiGooglemaps size={sizeIcon} />,
                    text: paramsHotel?.overnightCity
                }
            ]
        },
        {

            title: "Check-in - Check-out",
            detail: [
                {
                    icon: <BsCalendar3 size={sizeIcon} />,
                    text: checkTextDate(params)
                }
            ]
        },
        {
            title: "Soggiorno di " + checkTextCalculateDate(params),
            detail: [
                {
                    icon: <BiSolidUser size={sizeIcon} />,
                    text: checkTextPerson(params) + " - " + generateStringRoom()
                }
            ]
        }
    ]



    useEffect(() => {
        switch (context) {
            case "flight": {
                setDetails(detailsFlight)
                break;
            }
            case "hotel": {
                setDetails(detailsHotel)
                break;
            }
            default: {
                setDetails([])
                break;
            }
        }
    }, [context])


    return details;
}

export default useDetails;

