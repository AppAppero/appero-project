import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { BiSolidUser } from 'react-icons/bi';
import { BsCalendar3 } from 'react-icons/bs';
import { SiGooglemaps } from 'react-icons/si';
import RefreshDetailHotel from '../hotel/RefreshDetailHotel';

const HeaderDetail = ({ details, params }) => {
    const sizeIcon = 12
    const icons =
        [
            <SiGooglemaps size={sizeIcon} />,
            <BsCalendar3 size={sizeIcon} />,
            <BiSolidUser size={sizeIcon} />
        ]

    return (
        <>

            <RefreshDetailHotel params={params} />
            <Row className='rounded-3 p-1 justify-content-center gx-3'
                style={{ background: "#F29F05" }}>
                {
                    details?.map((el, index) => (
                        <Col xs={4} key={index}>
                            <Row className='text-white' style={{ fontSize: "10px" }}>
                                <Col xs={1}></Col>
                                <Col>{el?.title}</Col>
                            </Row>
                            {
                                el.detail.map((d, i) => (
                                    <Row key={i}>
                                        <Col xs={1}>
                                            {icons[index]}
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
