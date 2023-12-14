import { memo } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { formatHourByDate } from "../../../../utils/commons/formatDuration";
import { checkTextDateByValue, nameCityByIATA } from "../../../../utils/commons/formatState";
import HeaderCart from "../HeaderCart";
import TotalActivity from "../TotalActivity";
const CartFlight = ({ itinerary: flight }) => {

    return (
        <>
            {
                flight?.id &&
                <Card className="p-2 border-0 bg-light">

                    <HeaderCart name="flight" />

                    {
                        flight?.itineraries?.map((el, index) => {
                            return <HeaderFlight
                                key={index}
                                index={index}
                                {...el} />
                        })
                    }

                    <TotalActivity message="Totale Volo" price={flight?.price?.grandTotal} />

                </Card>
            }
        </>
    )
}

// Header Voli
const HeaderFlight = memo(({ index, segments }) => {
    return (
        <Card className="mt-2 p-1 border-0">
            <Row className="text-center">
                <Col>{index === 0 ? "Andata" : "Ritorno"}</Col>
            </Row>
            {
                segments.map((segment, indexSegment) => {
                    return <RowCartFlight key={indexSegment} {...segment} />
                })
            }
        </Card>
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
                <Col xs={4}>{checkTextDateByValue(departure?.at)}</Col>
                <Col xs={4}>{formatHourByDate(departure?.at)} - {formatHourByDate(arrival?.at)} </Col>
                <Col xs={4}>{carrierCode}</Col>
            </Row >
        </>
    )
})

const styleText = {
    fontSize: "12px"
}

export default CartFlight