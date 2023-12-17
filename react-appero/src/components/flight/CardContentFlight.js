import { memo } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { GoArrowSwitch } from 'react-icons/go';
import imgDef from "../../images/default-plane.avif";
import { formatDuration, formatHourByDate } from "../../utils/commons/formatDuration";
import DetailFlight from "./DetailFlight";
import ButtonCartFlight from "./ButtonCartFlight";

const CardContentFlight = memo(({ flight }) => {
    const { itineraries, price } = flight;

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
                        <ButtonCartFlight flight={flight} />
                    </Col>

                    <DetailFlight flight={flight} />
                </Row>

            </Card>
        </Col>
    )

})

export default CardContentFlight