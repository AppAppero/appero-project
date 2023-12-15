import React, { useEffect, useState } from 'react';
import { Button, Col, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle, Row } from 'react-bootstrap';
import { TbListDetails } from "react-icons/tb";
import { useGlobalContext } from '../../context/context';
import { getDetailHotel } from '../../api/hotel/fetchHotel';

const DetailHotel = ({ hotel }) => {
    const [showModal, setShowModal] = useState(false)
    const { params } = useGlobalContext()

    const handleClick = async () => {
        setShowModal(!showModal)
        // Chiama la Api del dettaglio Hotel singolo
        if (showModal)
            await getDetailHotel(createParamsHotelDetail())
    }


    const createParamsHotelDetail = () => {
        return {
            departureDate: params.departureDate,
            returnDate: params.returnDate,
            adults: params.adults,
            ageChildren: undefined,
            currencyCode: params.currencyCode,
            lang: "IT",
            hotelId: hotel?.hotel_id
        }
    }

    return (
        <>
            <Row className="mt-2">
                <Col>
                    <Button
                        onClick={handleClick}
                        variant="primary"
                        className="text-light btn-sm">
                        <TbListDetails />
                    </Button>
                </Col>
            </Row>

            <Modal show={showModal} onHide={handleClick}>
                <ModalHeader closeButton>
                    <ModalTitle>
                        {hotel?.nameHotel}
                    </ModalTitle>
                </ModalHeader>

                <ModalBody>

                </ModalBody>
                <ModalFooter></ModalFooter>
            </Modal>
        </>
    )
}

export default DetailHotel
