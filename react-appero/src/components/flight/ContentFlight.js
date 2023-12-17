import React, { useCallback, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useGlobalContext } from '../../context/context';
import { searchFlight } from '../../redux/reducerFlight';
import ErrorElement from '../commons/ErrorElement';
import Loading from '../commons/Loading';
import TitleContent from '../commons/TitleContent';
import CardContentFlight from './CardContentFlight';

const ContentFlight = () => {
    let { params } = useGlobalContext()
    const dispatch = useDispatch()
    const reducerFlight = useSelector(state => state.reducerFlight)
    const { flights, isLoading, isError, messageError } = reducerFlight;

    const searchFlightCall = useCallback(() => {
        dispatch(searchFlight(params, true));
    }, [params]);

    useEffect(() => {
        searchFlightCall();
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
