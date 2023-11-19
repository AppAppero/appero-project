import { checkNameCity, checkTextCalculateDate, checkTextDate, checkTextPerson } from "../../utils/formatState";
import { BiSolidUser } from 'react-icons/bi';
import { BsCalendar3 } from 'react-icons/bs';
import { SiGooglemaps } from 'react-icons/si';

// Modello per i dettagli del volo
const detailFlight = (params) => {
    
    const detail =
        [
            {
                title: "Destinazione",
                detail: [
                    {
                        hidden: true,
                        type: "text",
                        icon: <SiGooglemaps />,
                        text: checkNameCity(params?.destinationLocationCode)
                    },
                    {
                        hidden: true,
                        type: "text",
                        text: "Da " + checkNameCity(params?.originLocationCode),
                        style: { fontSize: "12px" }
                    }
                ]
            },
            {
                type: "text",
                title: "Data del viaggio",
                detail: [
                    {
                        hidden: true,
                        type: "date",
                        icon: <BsCalendar3 />,
                        text: checkTextDate(params)
                    },
                    {
                        hidden: false,
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
                        hidden: true,
                        icon: <BiSolidUser />,
                        text: checkTextPerson(params)
                    }
                ]
            }
        ]
    return detail;
}

export default detailFlight

