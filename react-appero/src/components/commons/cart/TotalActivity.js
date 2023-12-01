import React from 'react'
import { Col, Row } from 'react-bootstrap'

const TotalActivity = ({ message, price }) => {
    return (
        <Row className="justify-content-center mt-2">
            <Col
                style=
                {
                    {
                        // backgroundColor: 'rgba(169, 169, 169, 0.5)'
                        fontSize:"13px"
                    }
                }
                sm={10}
                className="text-primary p-2 mb-2 text-center fw-bold p-1">
                {message} : {price} €
            </Col>
        </Row>
    )
}

export default TotalActivity
