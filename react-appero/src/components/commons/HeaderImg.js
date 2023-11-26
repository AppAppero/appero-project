import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ex from '../../images/imgEx/ex.png';
import { linksMenu } from '../../utils/links';
import useSize from '../../hook/useSize';
import { Link } from 'react-router-dom';

const HeaderImg = () => {
    const { isAllScreen } = useSize().size

    return (
        <Row className='gx-2 mb-2'>
            <Col xs={2} sm={2} className='mt-3'>
                <img className='rounded-pill' src={ex} width={60} height={60} />
            </Col>
            <Col xs={8} sm={8}
                className='mt-3'>
                <Row className='fw-bold'>
                    <Col>Ciao Rosario</Col>
                </Row>
                <Row>
                    <Col style={{ fontSize: "12px" }}>Bentornato, organizza con noi il tuo prossimo viaggio</Col>
                </Row>
            </Col>

            {isAllScreen &&
                linksMenu(true).linksFooter.map((el, index) => (
                    <Col className='mt-4' xs={1} key={index}>
                        <Link to={el.path}>{el.icon}</Link>
                    </Col>
                ))
            }
        </Row>
    )
}

export default HeaderImg
