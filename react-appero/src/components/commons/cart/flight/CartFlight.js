import { memo } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { MdOutlineFlight } from 'react-icons/md';
import { useDispatch } from "react-redux";
import { removeFlight } from "../../../../redux/reducerItinerary";
import { formatHourByDate } from "../../../../utils/formatDuration";
import { checkTextDateByValue, nameCityByIATA } from "../../../../utils/formatState";
import { RiDeleteBack2Line } from "react-icons/ri";
const CartFlight = ({ flight }) => {

    const dispach = useDispatch()

    return (
        <>
            {
                flight?.id &&
                <>
                    <Card className="p-1 border-0">
                        <Row className="gx-5">
                            {/* <Col xs={2} className="fw-bold fs-5">Voli </Col> */}
                            <Col xs={9}>
                                <MdOutlineFlight
                                    size={20}
                                    color={"blue"}>
                                </MdOutlineFlight>
                            </Col>
                            <Col xs={2}>
                                <Button
                                    onClick={() => dispach(removeFlight())}
                                    variant="light"
                                    className="btn-outline-danger btn-sm">
                                    <RiDeleteBack2Line />
                                </Button>
                            </Col>
                            {
                                flight?.itineraries?.map((el, index) => {
                                    return <HeaderFlight
                                        key={index}
                                        index={index}
                                        {...el} />
                                })
                            }

                        </Row>

                        <Row className="justify-content-center mt-2">
                            <Col
                                style={{ backgroundColor: 'rgba(169, 169, 169, 0.5)' }}
                                sm={10}
                                className="rounded-pill p-2 mb-2 text-center fw-bold p-1">
                                Totale Volo : {flight?.price?.grandTotal}
                            </Col>
                        </Row>
                    </Card>
                </>
            }
        </>
    )
}

// Header Voli
const HeaderFlight = memo(({ index, segments }) => {
    return (
        <>
            <Row className="mt-2 text-center">
                {/* <Col sm={2}>
                    <MdOutlineFlight
                        size={16}
                        color={"blue"} />
                </Col> */}
                {/* <Col
                    className='fs-5'>
                    {index === 0 ? "Andata" : "Ritorno"}</Col> */}
            </Row>
            {
                segments.map((segment, indexSegment) => {
                    return <RowCartFlight key={indexSegment} {...segment} />
                })
            }
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
                    {nameCityByIATA(departure?.iataCode)}
                </Col>
                <Col
                    style={styleText}
                    className="fw-bold">
                    {nameCityByIATA(arrival?.iataCode)}
                </Col>
            </Row>
            <Row style={{ fontSize: "12px" }}
                className="text-secondary text-center gx-0">
                <Col>{checkTextDateByValue(departure?.at)}</Col>
                <Col>{formatHourByDate(departure?.at)} - {formatHourByDate(arrival?.at)} </Col>
                <Col>{carrierCode}</Col>
            </Row >
        </>
    )
})

const styleText = {
    fontSize: "12px"
}

export default CartFlight