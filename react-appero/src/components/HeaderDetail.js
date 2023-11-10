import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useGlobalContext } from '../context/context';
import useSize from '../hook/useSize';

const HeaderDetail = ({ detail }) => {
    const { isMobile } = useSize().size;
    const { isOpen } = useGlobalContext()

    const colSmall = isOpen && !isMobile ? 1 : 1;
    const a = isOpen && !isMobile ? 4 : 4;

    return (
        <Row className='p-2 justify-content-center gx-0'
            style={{ background: "#F29F05", borderRadius: "10px" }}>
            {
                detail.map((el, index) => (
                    <Col key={index}>
                        <Row style={styleTile}>
                            <Col xs={colSmall} sm={colSmall} md={colSmall}></Col>
                            <Col>{el?.title}</Col>
                        </Row>
                        {
                            el.detail.map((d, i) => (
                                <Row key={i}>
                                    <Col xs={colSmall} sm={colSmall} md={colSmall}>
                                        {d?.icon}
                                    </Col>
                                    <Col style={styleAu}>
                                        {d?.text}
                                    </Col>
                                </Row>
                            ))
                        }
                    </Col>
                ))
            }
        </Row>
    )
}

const styleTile = { fontSize: "12px", color: "white" }
const styleAu = { fonsSize: "15px", color: "#141414", fontWeight: "bold" }


export default HeaderDetail
