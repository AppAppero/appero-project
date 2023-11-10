import React from 'react';
import { useLocation } from 'react-router-dom';
// import { bar_mil } from '../../utils/exFlights';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useGlobalContext } from '../../context/context';
import useSize from '../../hook/useSize';
import rya from '../../images/imgEx/rya.png'
import wiz from '../../images/imgEx/wiz.png'
import { BsFillCartPlusFill, BsFillCartDashFill } from 'react-icons/bs'


const ContentFlight = () => {

    const { isMobile } = useSize().size;
    const { isOpen } = useGlobalContext()

    // Con useLocation recupero lo state per evitare di passare tutto nell'url
    const state = useLocation()?.state

    // const { params } = state;
    const dispatch = useDispatch()
    const reducerFlight = useSelector(state => state.reducerFlight)
    const { flights, isLoading, isError, messageError } = reducerFlight;


    /** useEffect(() => {
         dispatch(searchFlightAmadeus(params))
     }, []) */

    return (
        <>
            <Row style={styleTitle}>
                <Col>Scegli il volo</Col>
            </Row>
            <Row className='gx-0'>
                <Col sm={12}>
                    {
                        mapFli.flight.map((card, index) => (
                            <Card key={index} style={styleCard}>
                                <Col>
                                    {
                                        card.travel.map((ro, i) => (
                                            <Row key={i} className='gx-5 m-3'>
                                                <Col sm={3}>
                                                    <img src={ro.imageCompany} />
                                                </Col>
                                                <Col sm={3}>
                                                    <Row>
                                                        <Col>
                                                            {ro.originHour}
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            {ro.originIATA}
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col sm={3}>
                                                    <Row>
                                                        <Col>
                                                            {ro.during}
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col></Col>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            {ro.type}
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col sm={3}>
                                                    <Row>
                                                        <Col>
                                                            {ro.destHour}
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            {ro.destIATA}
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        ))
                                    }
                                    <Col style={{ position: 'absolute', top: 10, right: 10 }}>
                                        <Button style={{
                                            background: "#FDB12A",
                                            boxShadow: "0px 10px 20px #00000008",
                                            borderRadius: "12px",
                                            border: "none",
                                            opacity: 1

                                        }}>
                                            <Col>
                                                <BsFillCartPlusFill />
                                            </Col>
                                            <Col>90€</Col>
                                        </Button>
                                    </Col>
                                </Col>

                            </Card>
                        ))
                    }

                </Col>

                {/* {
                    bar_mil.data.data.map((el, index) => {
                        return <p key={index}>{el.id}</p>
                    })
                } */}
            </Row>
        </>
    )
}

const mapFli = {
    flight: [
        {
            travel:
                [
                    {
                        imageCompany: rya,
                        originHour: "21:00",
                        originIATA: "CTA",
                        destHour: "22:20",
                        destIATA: "FCO",
                        during: "1h 20m",
                        type: "diretto"
                    },
                    {
                        imageCompany: wiz,
                        originHour: "21:00",
                        originIATA: "FCO",
                        destHour: "22:20",
                        destIATA: "CTA",
                        during: "1h 20m",
                        type: "diretto"
                    }
                ],
            buttontype: {
                title: "Totale viaggio"
            }
        },
        {
            travel:
                [
                    {
                        imageCompany: rya,
                        originHour: "21:00",
                        originIATA: "CTA",
                        destHour: "22:20",
                        destIATA: "FCO",
                        during: "1h 20m",
                        type: "diretto"
                    },
                    {
                        imageCompany: wiz,
                        originHour: "21:00",
                        originIATA: "FCO",
                        destHour: "22:20",
                        destIATA: "CTA",
                        during: "1h 20m",
                        type: "diretto"
                    }
                ]
        }
    ]
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
