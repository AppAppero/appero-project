import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ex from '../images/imgEx/ex.png';

const HeaderImg = () => {

       return (
        <Row>
            <Col xs={1} sm={1} md={1} className='m-3'>
                <img src={ex} width={60} height={60}
                    style={{ borderRadius: "50%" }} />
            </Col>
            <Col xs={9} sm={7} md={7}
                className='m-3'>
                <Row style={{ color: "#141414", fontWeight: "bold" }}>Ciao Rosario</Row>
                <Row>Bentornato,organizza il tuo prossimo viaggio</Row>
            </Col>
        </Row>
    )
}

export default HeaderImg
