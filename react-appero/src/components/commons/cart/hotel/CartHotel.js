import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import HeaderCart from '../HeaderCart'
import TotalActivity from '../TotalActivity'

const CartHotel = ({ itinerary: hotel }) => {
    return (
        <Card className="p-2 border-0 bg-light">
            <HeaderCart name="hotel" />
            <Card className="mt-2 p-1 border-0 text-center">
                <Row>
                    <Col>
                        {hotel.nameHotel}
                    </Col>
                </Row>
                <Row className="mt-2" style={{ fontSize: "13px" }}>
                    <Col className='fw-bold' xs={12}>{hotel?.recapDetails}</Col>
                    <Col className='fw-bold mt-1' xs={12}>{hotel?.nearHotel}</Col>
                </Row>
                <Row className='mt-2'>
                    <Col xs={12} className='text-success'>Checkin : {hotel?.checkin?.fromTime} - {hotel?.checkin?.untilTime}</Col>
                    <Col xs={12} className='text-danger'>Checkout : {hotel?.checkout?.fromTime} - {hotel?.checkout?.untilTime}</Col>
                </Row>
                <Row className='mt-2' style={{ fontSize: "12px" }}>
                    <Col className='mt-1' xs={12}>{hotel?.detailsPrice}</Col>
                </Row>
            </Card>
            <TotalActivity message="Totale Hotel" price={hotel?.totalPrice} />
        </Card>
    )
}

export default CartHotel
