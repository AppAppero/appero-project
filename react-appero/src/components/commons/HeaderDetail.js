import React from 'react';
import { Col, Row } from 'react-bootstrap';
import detailFlight from '../../model/flight/detailFlight';

const HeaderDetail = ({ params }) => {
    // const [showModal, setShowModal] = useState(false)

    return (
        <>
            <Row className='rounded-3 p-1 justify-content-center gx-3'
                style={{ background: "#F29F05" }}>
                {
                    detailFlight(params).map((el, index) => (
                        <Col xs={4} key={index}>
                            <Row className='text-white' style={{ fontSize: "12px" }}>
                                <Col xs={1}></Col>
                                <Col>{el?.title}</Col>
                            </Row>
                            {
                                el.detail.map((d, i) => (
                                    <Row key={i}>
                                        <Col xs={1}>
                                            {d?.icon}
                                        </Col>
                                        <Col className='mt-1' xs={9} md={9}
                                            style={d?.style ? d.style : { fontSize: "12px", fontWeight: "bold" }}>
                                            {d?.text}
                                        </Col>
                                    </Row>
                                ))
                            }
                        </Col>
                    ))
                }
            </Row>
        </>
    )
}


export default HeaderDetail
