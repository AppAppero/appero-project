import React, { useEffect } from 'react';
import HeaderDetail from '../components/commons/HeaderDetail';
import ContentFlight from '../components/flight/ContentFlight';
import HeaderFilterFlight from '../components/flight/HeaderFilterFlight';
import { useGlobalContext } from '../context/context';
import useTitle from '../hook/useTitle';
import { checkTextCalculateDate, checkTextDate, checkTextPerson, nameCityByIATA } from '../utils/commons/formatState';

const Flight = () => {
    useTitle("Voli")

    // Setta la variabile per indicare in che contesto pagina ci troviamo
    const { setContext } = useGlobalContext()
    let { params } = useGlobalContext()

    const detailsFlight =
        [
            {
                title: "Destinazione",
                detail: [
                    {
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
                        text: checkTextDate(params)
                    },
                    {
                        text: checkTextCalculateDate(params)
                    }
                ]
            },
            {
                title: "Persone",
                detail: [
                    {
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
