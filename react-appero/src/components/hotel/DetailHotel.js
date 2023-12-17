import React, { useState } from 'react';
import { Button, Col, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle, Row } from 'react-bootstrap';
import { TbListDetails } from "react-icons/tb";
import { useGlobalContext } from '../../context/context';
import ButtonCartHotel from './ButtonCartHotel';
// import { getDetailHotel } from '../../api/hotel/fetchHotel';
import { AiFillCloseCircle } from "react-icons/ai";
import { detail_hotel } from '../../utils/hotel/exHotel';
import ImageDetailHotel from './ImageDetailHotel';

const DetailHotel = ({ hotel }) => {
    const [showModal, setShowModal] = useState(false)
    const { params } = useGlobalContext()
    const [detailsHotel, setHotelDetail] = useState(detail_hotel)

    const handleClick = async () => {
        statusModal()
        // Chiama la Api del dettaglio Hotel singolo
        // if (showModal)
        //     setHotelDetail(await getDetailHotel(createParamsHotelDetail()))
    }

    const statusModal = () => {
        setShowModal(!showModal)
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

            <Modal show={showModal} onHide={statusModal}>
                <ModalHeader closeButton>
                    <ModalTitle>
                        {hotel?.nameHotel}
                    </ModalTitle>
                </ModalHeader>


                <ModalBody>

                    <ImageDetailHotel {...detailsHotel} />


                </ModalBody>


                <ModalFooter className='p-2 m-0'>
                    <Col xs={12} className='text-center fw-bold'>
                        Trovi maggiorni info per questo hotel qui :
                    </Col>
                    <Col xs={12} className='text-center mt-0'>
                        <a target="_blank" href={detailsHotel?.url}>{detailsHotel?.url}</a>
                    </Col>
                    <Col xs={8}
                        style={{ fontSize: "14px" }}
                        className='text-start fw-bold'>Toale prezzo : {detailsHotel?.product_price_breakdown?.gross_amount?.amount_rounded}</Col>
                    <Col xs={1}>
                        <ButtonCartHotel look_in_detail={true} hotel={hotel} />
                    </Col>
                    <Col xs={1} className='ms-3'>
                        <Button
                            onClick={statusModal}
                            size='sm' variant='danger'>
                            <AiFillCloseCircle />
                        </Button>
                    </Col>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default DetailHotel
