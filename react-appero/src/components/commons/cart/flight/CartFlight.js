import { memo } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { MdOutlineFlight } from 'react-icons/md';
import { useDispatch } from "react-redux";
import { removeFlight } from "../../../../redux/reducerItinerary";
import { checkNameCity, checkParam, checkTextDate, checkTextDateByValue } from "../../../../utils/formatState";
import { formatHourByDate } from "../../../../utils/formatDuration";

const CartFlight = ({ flight }) => {

    const dispach = useDispatch()

    return (
        <>
            {
                flight?.id &&
                <>
                    <Row>
                        <Col className="fw-bold fs-5 text-center mt-2">Voli</Col>
                        {
                            flight?.itineraries?.map((el, index) => {
                                return <HeaderFlight
                                    key={index}
                                    index={index}
                                    {...el} />
                            })
                        }

                    </Row>
                    <Row className="justify-content-center">
                        <Col
                            style={{ backgroundColor: 'rgba(169, 169, 169, 0.5)' }}
                            sm={10}
                            className="rounded-pill p-2 mb-2 text-center fw-bold p-1">
                            Totale Volo : {flight?.price?.grandTotal}
                        </Col>
                    </Row>
                    <Row className="text-center">
                        <Col>
                            <Button
                                variant="light"
                                className="btn-outline-warning btn-sm">Conferma</Button>
                        </Col>
                        <Col>
                            <Button
                                onClick={() => dispach(removeFlight())}
                                variant="light"
                                className="btn-outline-danger btn-sm">Elimina</Button>
                        </Col>
                    </Row>
                </>
            }
        </>
    )
}

// Header Voli
const HeaderFlight = memo(({ index, segments }) => {
    return (
        <>
            <Row className="text-center">
                <Col sm={2}>
                    <MdOutlineFlight
                        size={16}
                        color={"blue"} />
                </Col>
                <Col
                    className='fs-5'>
                    {index === 0 ? "Andata" : "Ritorno"}</Col>
            </Row>
            {
                segments.map((segment, indexSegment) => {
                    return <RowCartFlight key={indexSegment} {...segment} />
                })
            }
            <hr />
        </>
    )
})

// Row Voli
const RowCartFlight = memo(({ departure, arrival, carrierCode }) => {
    return (
        <>
            <Row className="mt-2 text-center">
                <Col
                    style={styleText}
                    className="fw-bold">
                    {checkNameCity(departure?.iataCode)}
                </Col>
                <Col
                    style={styleText}
                    className="fw-bold">
                    {checkNameCity(arrival?.iataCode)}
                </Col>
            </Row>
            <Row style={{ fontSize: "12px" }}
                className="text-secondary text-center gx-0">
                <Row>
                    <Col>{checkTextDateByValue(departure?.at)}</Col>
                    <Col>{formatHourByDate(departure?.at)} - {formatHourByDate(arrival?.at)} </Col>
                    <Col>{carrierCode}</Col>
                </Row>
            </Row >
        </>
    )
})

const styleText = {
    fontSize: "12px"
}

export default CartFlight