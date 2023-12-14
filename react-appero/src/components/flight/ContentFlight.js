import React, { useCallback, useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useGlobalContext } from '../../context/context';
import { searchFlightAmadeus } from '../../redux/reducerFlight';
import ErrorElement from '../commons/ErrorElement';
import Loading from '../commons/Loading';
import TitleContent from '../commons/TitleContent';
import CardContentFlight from './CardContentFlight';

const ContentFlight = () => {
    let { params } = useGlobalContext()
    const dispatch = useDispatch()
    const reducerFlight = useSelector(state => state.reducerFlight)
    const { selectFlightId, flights, isLoading, isError, messageError } = reducerFlight;

    const searchFlight = useCallback(() => {
        dispatch(searchFlightAmadeus(params, true));
    }, [params]);

    useEffect(() => {
        searchFlight();
    }, []);


    return (
        <>
            <TitleContent
                isError={isError}
                isLoading={isLoading}
                title="Scegli il volo" />

            <Row className='gx-4'>
                {
                    !isLoading && !isError ?
                        (
                            flights?.length > 0 ?
                                (
                                    flights.map((flight, index) =>
                                    (
                                        <CardContentFlight
                                            key={index}
                                            selectFlightId={selectFlightId}
                                            flight={flight} />
                                    )
                                    )
                                ) :
                                (
                                    <ErrorElement>Nessun volo trovato per questi parametri , riprova!</ErrorElement>
                                )
                        ) :
                        isLoading && !isError ? <Loading icon="airplane" /> :
                            !isLoading && isError && <ErrorElement>{messageError}</ErrorElement>
                }
            </Row>
        </>
    )
}

export default ContentFlight
