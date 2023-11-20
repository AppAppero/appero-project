import { memo, useEffect } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { BsFillCartPlusFill } from 'react-icons/bs';
import { GoArrowSwitch } from 'react-icons/go';
import { useDispatch, useSelector } from "react-redux";
import rya from "../../images/imgEx/rya.png";
import { addFlight, removeFlight } from "../../redux/reducerItinerary";
import { formatDuration, formatHourByDate } from "../../utils/formatDuration";

const CardContentFlight = memo(({ selectIdFlight, setSelectIdFlight, flight }) => {
    const { id, itineraries, price } = flight;
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

            <Row style={{ bottom: -12 }} className="position-absolute start-50 translate-middle-x">
                <Col>
                    <Button
                        variant={selectIdFlight !== id ? "secondary" : "warning"}
                        className="btn-md btn-outline-warning shadow-sm text-white border-0"
                        onClick={checkFlightItinery}
                    >
                        {price?.grandTotal} €
                    </Button>
                </Col>
            </Row>
        </>
    )

})

export default CardContentFlight