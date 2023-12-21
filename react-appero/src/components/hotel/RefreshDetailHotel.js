import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import ModalFormHotel from './ModalFormHotel';
import { BiSolidEditAlt } from "react-icons/bi";

const RefreshDetailHotel = ({ params }) => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    return (
        <>
            <Col xs={12} className='text-center mt-1 position-relative'>
                <Button
                    onClick={() => setIsOpenModal(!isOpenModal)}
                    className='btn-sm btn-outline-secondary btn-warning text-dark'
                    style={{ position: "absolute", top: -10, left: -20 }}>
                    <BiSolidEditAlt /></Button>
            </Col>
            <ModalFormHotel
                params={params}
                isOpenModal={isOpenModal}
                setIsOpenModal={setIsOpenModal} />
        </>
    )
}

export default RefreshDetailHotel
