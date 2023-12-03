import React, { useCallback, useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useGlobalContext } from '../../context/context';
import { searchFlightAmadeus } from '../../redux/reducerFlight';
import ErrorElement from '../commons/ErrorElement';
import Loading from '../commons/Loading';
import CardContentFlight from './CardContentFlight';
import TitleContent from '../commons/TitleContent';

const ContentFlight = () => {
    let { params } = useGlobalContext()
    const dispatch = useDispatch()
    const reducerFlight = useSelector(state => state.reducerFlight)
    const { flights, isLoading, isError, messageError } = reducerFlight;
    const [selectIdFlight, setSelectIdFlight] = useState(0)

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
                                    flights.map((flight, index) => {
                                        return (
                                            <Col key={index} xs={12}>
                                                <Card
                                                    className='shadow-lg border-0 justify-content-center rounded-3 p-3 mt-4 border-none'>
                                                    <CardContentFlight
                                                        selectIdFlight={selectIdFlight}
                                                        setSelectIdFlight={setSelectIdFlight}
                                                        flight={flight} />
                                                </Card>
                                            </Col>
                                        )
                                    })
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
