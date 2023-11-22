import React, { memo, useCallback, useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../commons/Loading';
import { searchFlightAmadeus } from '../../redux/reducerFlight';
import ErrorElement from '../commons/ErrorElement';
import CardContentFlight from './CardContentFlight';

const ContentFlight = memo(({ params }) => {
    const dispatch = useDispatch()
    const reducerFlight = useSelector(state => state.reducerFlight)
    const { flights, isLoading, isError, messageError } = reducerFlight;
    const [selectIdFlight, setSelectIdFlight] = useState(0)

    const searchFlight = useCallback(() => {
        dispatch(searchFlightAmadeus(params, false));
    }, [params]);

    useEffect(() => {
        searchFlight();
    }, []);


    return (
        <>
            <Row className='fw-bold fs-4 lh-1.5 text-dark mt-2'>
                <Col>Scegli il volo</Col>
            </Row>
            <Row className='gx-4'>
                {!isLoading && !isError ?
                    (flights?.length > 0 ?
                        (
                            flights.map((flight, index) => {
                                return (
                                    <Col key={index} xs={12} >
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
})

export default ContentFlight
