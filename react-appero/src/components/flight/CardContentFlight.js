import { memo, useEffect } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { FaArrowCircleRight } from "react-icons/fa";
import { GoArrowSwitch } from 'react-icons/go';
import { useDispatch, useSelector } from "react-redux";
import rya from "../../images/imgEx/rya.png";
import { addFlight, removeFlight } from "../../redux/reducerItinerary";
import { formatDuration, formatHourByDate } from "../../utils/formatDuration";
import DetailFlight from "./DetailFlight";

const CardContentFlight = memo(({ selectIdFlight, setSelectIdFlight, flight }) => {
    const { id, itineraries, price, travelerPricings } = flight;
    const { counterCart } = useSelector(state => state.reducerItinerary)
    const dispatch = useDispatch();

    /**
     * Gestisce il bottone del carrello del volo controllando per id volo
     * Se non c'è lo aggiunge all'itinerario e illumina il bottone 
     * Altrimenti lo rimuove spegnendo il bottone
     */
    const checkFlightItinery = () => {
        if (id === selectIdFlight) {
            setSelectIdFlight(0)
            dispatch(removeFlight())
        } else {
            setSelectIdFlight(id)
            dispatch(addFlight(flight))
        }
    }

    // Se il carrello è vuoto, toglie il seleziona da bottone
    useEffect(() => {
        if (counterCart === 0)
            setSelectIdFlight(0)
    }, [counterCart])

    return (
        <>
            <Row>
                {/* <Col xs={2} className="text-start m-0">
                    <Button size="sm" variant="warning" ><AiOutlineInfoCircle color="white"/></Button>
                </Col> */}
                <Col xs={12} className="text-end fw-bold text-success" style={{ fontSize: "15px" }}>
                    Totale : {price?.grandTotal} €
                </Col>
            </Row>
            {
                itineraries.map((iti, i) => (
                    <Card className="mt-2 border-0 shadow-sm" key={i}>
                        {
                            iti?.segments.map((seg, ind) => (
                                <Row key={ind} className='gx-0 m-2'>
                                    <Col xs={3}>
                                        <img src={rya} />
                                    </Col>
                                    <Col className="text-center" xs={3}>
                                        <Row>
                                            <Col className="fw-bold">
                                                {formatHourByDate(seg?.departure?.at)}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                {seg?.departure?.iataCode}
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={3} className="text-center">
                                        <Row>
                                            <Col>
                                                {formatDuration(seg?.duration)}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <GoArrowSwitch size={20} />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                {
                                                    iti?.segments?.length === 1 ?
                                                        "Diretto"
                                                        : iti?.segments?.length - 1 + " Scali"
                                                }
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={3} className="text-center">
                                        <Row>
                                            <Col className="fw-bold">
                                                {formatHourByDate(seg?.arrival?.at)}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                {seg?.arrival?.iataCode}
                                            </Col>
                                        </Row>
                                    </Col>

                                </Row>
                            ))
                        }
                    </Card>
                ))


            }

            <Row className="mt-3 gx-1">
                <Col xs={10}>
                    <Button
                        style={{ width: "100%" }}
                        variant={selectIdFlight !== id ? "secondary" : "warning"}
                        className="btn-md btn-outline-warning shadow-sm text-white border-0"
                        onClick={checkFlightItinery}
                    >
                        <Row>
                            <Col xs={8} className="text-end">Seleziona volo</Col>
                            <Col xs={4} className="text-end"><FaArrowCircleRight /></Col>
                        </Row>
                    </Button>
                </Col>

                <DetailFlight
                    price={price}
                    travelerPricings={travelerPricings}
                    checkFlightItinery={checkFlightItinery}
                />
            </Row>


        </>
    )

})

export default CardContentFlight