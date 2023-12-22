import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { BiSolidUser } from 'react-icons/bi';
import { BsCalendar3 } from 'react-icons/bs';
import { SiGooglemaps } from 'react-icons/si';
import RefreshDetailHotel from '../hotel/RefreshDetailHotel';

const HeaderDetail = ({ details, params, context }) => {
    const sizeIcon = 12
    const icons =
        [
            <SiGooglemaps size={sizeIcon} />,
            <BsCalendar3 size={sizeIcon} />,
            <BiSolidUser size={sizeIcon} />
        ]

    return (
        <>
            <Row className='rounded-3 p-1 justify-content-center'
                style={{ background: "#F29F05", wordWrap: "break-word" }}>
                {
                    details?.map((el, index) => (
                        <Col xs={4} key={index}>
                            <Row className='text-white text-center' style={{ fontSize: "10px" }}>
                                <Col xs={1}></Col>
                                <Col>{el?.title}</Col>
                            </Row>
                            {
                                el.detail.map((d, i) => (
                                    <Row key={i} className='gx-0'>
                                        <Col xs={2} className='text-end'>
                                            {i == 0 && icons[index]}
                                        </Col>
                                        <Col className='mt-1 text-center' xs={9}
                                            style={d?.style ? d.style : { fontSize: "11px", fontWeight: "bold" }}>
                                            {d?.text}
                                        </Col>
                                        {
                                            index == 0 && context == "hotel" &&
                                            <Col xs={1} className='text-start'>
                                                <RefreshDetailHotel params={params} />
                                            </Col>
                                        }
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
