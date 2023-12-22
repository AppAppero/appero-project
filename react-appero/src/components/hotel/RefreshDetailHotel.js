import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import ModalFormHotel from './ModalFormHotel';
import { BiSolidEditAlt } from "react-icons/bi";

const RefreshDetailHotel = ({ params }) => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    return (
        <>

            <Button
                onClick={() => setIsOpenModal(!isOpenModal)}
                className='btn-warning text-light'
                style={{padding:"2px 5px 2px 5px"}}
            >
                <BiSolidEditAlt /></Button>

            <ModalFormHotel
                params={params}
                isOpenModal={isOpenModal}
                setIsOpenModal={setIsOpenModal} />
        </>
    )
}

export default RefreshDetailHotel
