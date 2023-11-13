import React, { useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useGlobalContext } from '../../context/context';
import useSize from '../../hook/useSize';
import { bar_mil } from '../../utils/exFlights';
import CardContentFlight from './CardContentFlight';

const ContentFlight = () => {

    const { isMobile } = useSize().size;
    const { isOpen } = useGlobalContext()

    // Con useLocation recupero lo state per evitare di passare tutto nell'url
    const state = useLocation()?.state

    const { params } = state;
    const dispatch = useDispatch()
    const reducerFlight = useSelector(state => state.reducerFlight)
    const { flights, isLoading, isError, messageError } = reducerFlight;

    useEffect(() => {
        // dispatch(searchFlightAmadeus(params))
    }, [])

    return (
        <>
            <Row style={styleTitle}>
                <Col>Scegli il volo</Col>
            </Row>
            <Row className='gx-0'>
                <Col sm={12}>
                    {
                        bar_mil.map((card, index) => {
                            return <Card key={index} style={styleCard}>
                                <CardContentFlight {...card} card={card} />
                            </Card>
                        })
                    }
                </Col>
            </Row>
        </>
    )
}

const styleTitle = {
    font: "normal normal bold 24px/40px Mukta",
    letterSpacing: "0px",
    color: "#000000",
    opacity: 1,
    marginTop: "10px"
}


const styleCard = {
    background: "#FFFFFF padding- box",
    boxShadow: "0px 10px 20px #0005770D",
    borderRadius: "12px",
    opacity: 1,
    padding: "10px",
    border: "none",
    marginTop: "15px"
}


export default ContentFlight
