import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ex from '../../images/imgEx/ex.png';

const HeaderImg = () => {

    return (
        <Row className='gx-0 mb-2'>
            <Col xs={3} sm={2} className='mt-3'>
                <img className='rounded-pill' src={ex} width={60} height={60} />
            </Col>
            <Col xs={9} sm={10}
                className='mt-3'>
                <Row className='fw-bold'>
                    <Col>Ciao Rosario</Col>
                </Row>
                <Row>
                    <Col style={{ fontSize: "12px" }}>Bentornato, organizza con noi il tuo prossimo viaggio</Col>
                </Row>
            </Col>
        </Row>
    )
}

export default HeaderImg
