import { memo, useEffect } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { FaArrowCircleRight } from "react-icons/fa";
import { GoArrowSwitch } from 'react-icons/go';
import { useDispatch, useSelector } from "react-redux";
import { useGlobalContext } from "../../context/context";
import imgDef from "../../images/default-plane.avif";
import { selectedFlight } from "../../redux/reducerFlight";
import { addFlight, removeFlight } from "../../redux/reducerItinerary";
import { formatDuration, formatHourByDate } from "../../utils/commons/formatDuration";
import CartFlight from "../commons/cart/flight/CartFlight";
import DetailFlight from "./DetailFlight";

const CardContentFlight = memo(({ selectFlightId, flight }) => {
    const { id, itineraries, price, travelerPricings } = flight;
    const { counterCart } = useSelector(state => state.reducerItinerary)
    const dispatch = useDispatch();
    const { addElement, removeElement } = useGlobalContext()

    /**
     * Gestisce il bottone del carrello del volo controllando per id volo
     * Se non c'è lo aggiunge all'itinerario e illumina il bottone 
     * Altrimenti lo rimuove spegnendo il bottone
     */
    const checkFlightItinery = () => {
        if (id === selectFlightId) {
            dispatch(selectedFlight(0))
            dispatch(removeFlight())
            removeElement("Volo")
        } else {
            dispatch(selectedFlight(id))
            dispatch(addFlight(flight))
            addElement("Volo", <CartFlight itinerary={flight} />)
        }
    }

    // Se il carrello è vuoto, toglie il seleziona da bottone
    useEffect(() => {
        if (counterCart === 0)
            dispatch(selectedFlight(0))
    }, [counterCart])

    return (
        <Col xs={12}>
            <Card
                className='shadow-lg border-0 justify-content-center rounded-3 p-3 mt-4 border-none'>
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
                        <Card className="mt-2 border-0 shadow-lg" key={i}>
                            {
                                iti?.segments.map((seg, ind) => (
                                    <Row key={ind} className='gx-0 m-3'>
                                        <Col xs={3}>
                                            {/* Se l'immagine è presente la visualizza altrimenti inserisci quella di default */}
                                            {seg?.urlCarrier ? <img style={{ width: "50px" }} src={seg.urlCarrier} /> : <img className="rounded-pill" style={{ width: "50px" }} src={imgDef} />}
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
                            variant={selectFlightId !== id ? "secondary" : "warning"}
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

            </Card>
        </Col>
    )

})

export default CardContentFlight