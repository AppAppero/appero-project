import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ex from '../../images/imgEx/ex.png';

const HeaderImg = () => {

    return (
        <Row className='gx-3 mb-2'>
            <Col xs={2} className='mt-3'>
                <img className='rounded-pill' src={ex} width={"80%"} height={"100%"} />
            </Col>
            <Col xs={10}
                className='mt-3'>
                <Row className='fw-bold'>
                    <Col>Ciao Rosario</Col>
                </Row>
                <Row>
                    <Col>Bentornato,organizza il tuo prossimo viaggio</Col>
                </Row>
            </Col>
        </Row>
    )
}

export default HeaderImg
