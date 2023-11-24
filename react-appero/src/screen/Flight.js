import React, { useEffect } from 'react';
import ContentFlight from '../components/flight/ContentFlight';
import HeaderFilterFlight from '../components/flight/HeaderFilterFlight';
import { useGlobalContext } from '../context/context';
import useTitle from '../hook/useTitle';

const Flight = () => {
    useTitle("Voli")

    // Setta la variabile per indicare in che contesto pagina ci troviamo
    const { context, setContext } = useGlobalContext()

    useEffect(() => {
        setContext("flight")
    }, [])

    return (
        <>
            <HeaderFilterFlight />
            <ContentFlight />
        </>
    );
}

export default Flight;
