import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { IoRefreshCircleSharp } from "react-icons/io5";
import ModalFormHotel from './ModalFormHotel';

const RefreshDetailHotel = ({ params }) => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    return (
        <Row>
            <Col xs={12} className='text-center mt-1'>
                <Button
                    onClick={() => setIsOpenModal(!isOpenModal)}
                    className='btn-sm btn-warning text-white'>
                    Cambia città</Button>
            </Col>
            <ModalFormHotel
                params={params}
                isOpenModal={isOpenModal}
                setIsOpenModal={setIsOpenModal} />
        </Row>
    )
}

export default RefreshDetailHotel
