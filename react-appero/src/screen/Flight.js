import React, { useEffect } from 'react';
import { BiSolidUser } from 'react-icons/bi';
import { BsCalendar3 } from 'react-icons/bs';
import { SiGooglemaps } from 'react-icons/si';
import HeaderDetail from '../components/commons/HeaderDetail';
import ContentFlight from '../components/flight/ContentFlight';
import HeaderFilterFlight from '../components/flight/HeaderFilterFlight';
import { useGlobalContext } from '../context/context';
import useTitle from '../hook/useTitle';
import { checkTextCalculateDate, checkTextDate, checkTextPerson, nameCityByIATA } from '../utils/formatState';

const Flight = () => {
    useTitle("Voli")

    // Setta la variabile per indicare in che contesto pagina ci troviamo
    const { setContext } = useGlobalContext()
    let { params } = useGlobalContext()
    const sizeIcon = 12

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


    useEffect(() => {
        setContext("flight")
    }, [])

    return (
        <>
            <HeaderDetail details={detailsFlight} />
            <HeaderFilterFlight />
            <ContentFlight />
        </>
    );
}

export default Flight;
