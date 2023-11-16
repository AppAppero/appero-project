import React, { memo, useCallback, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import { searchFlightAmadeus } from '../../redux/reducerFlight';
import ErrorElement from '../ErrorElement';
import CardContentFlight from './CardContentFlight';

const ContentFlight = memo(({ params }) => {
    const dispatch = useDispatch()
    const reducerFlight = useSelector(state => state.reducerFlight)
    const { flights, isLoading, isError, messageError } = reducerFlight;

    const searchFlight = useCallback(() => {
        dispatch(searchFlightAmadeus(params, true));
    }, [params]);

    useEffect(() => {
        searchFlight();
    }, []);


    return (
        <>
            <Row style={styleTitle}>
                <Col>Scegli il volo</Col>
            </Row>
            <Row className='gx-5'>
                {!isLoading && !isError ?
                    (flights && flights.length > 0 ?
                        (
                            flights.map((card, index) => {
                                return (
                                    <Col key={index} xs={12} >
                                        <Card
                                            className='justify-content-center'
                                            style={styleCard}>
                                            <CardContentFlight {...card} />
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

const styleTitle = {
    font: "normal normal bold 24px/40px Mukta",
    letterSpacing: "0px",
    color: "#000000",
    opacity: 1,
    marginTop: "10px"
}


const styleCard = {
    background: "#FFFFFF",
    boxShadow: "0px 10px 20px #0005770D",
    borderRadius: "12px",
    opacity: 1,
    padding: "20px",
    border: "none",
    marginTop: "25px",

}


export default ContentFlight
