import React, { useState } from 'react';
import { Button, Col, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle, Row } from 'react-bootstrap';
import { AiFillCloseCircle } from "react-icons/ai";
import { TbListDetails } from "react-icons/tb";
import ButtonCartFlight from './ButtonCartFlight';

const DetailFlight = ({ flight }) => {
    const { price, travelerPricings } = flight;


    const [showDetail, setShowDetail] = useState(false)

    const typeTravel = (travel) => {
        switch (travel) {
            case "ADULT":
                return "Adulto"
            case "CHILD":
                return "Bambino"
            case "HELD_INFANT":
                return "Neonato"
            default:
                return "Non Definito"
        }
    }

    return (
        <>
            <Col xs={2} className="text-end">
                <Button>
                    <TbListDetails onClick={() => setShowDetail(!showDetail)} />
                </Button>
            </Col>

            <Modal show={showDetail} onHide={() => setShowDetail(!showDetail)}>
                <ModalHeader closeButton>
                    <ModalTitle>
                        Info Viaggiatori
                    </ModalTitle>
                </ModalHeader>
                <ModalBody>
                    {
                        travelerPricings?.map((el, index) => (
                            <Col key={index}>
                                <Row className='mt-2'>
                                    <Col className='text-secondary fw-bold'>
                                        {typeTravel(el?.travelerType)}
                                    </Col>
                                    <Col className='text-primary fw-bold'>
                                        Tariffa {el?.fareOption}
                                    </Col>
                                </Row>
                                <Row style={{ fontSize: "13px" }} className='gx-0 fw-bold'>
                                    <Row className='gx-0'>
                                        <Col xs={10}>
                                            Prezzo base : {el?.price?.base}
                                        </Col>
                                        <Col xs={1}>{el?.price?.currency}</Col>
                                    </Row>

                                    <Row className='gx-0'>
                                        <Col xs={10}>
                                            Prezzo totale : {el?.price?.total}
                                        </Col>
                                        <Col xs={1}>{el?.price?.currency}</Col>
                                    </Row>
                                </Row>
                            </Col>
                        ))
                    }

                </ModalBody>
                <ModalFooter className='p-1 m-0'>
                    <Col xs={8}
                        style={{ fontSize: "13px" }}
                        className='text-start fw-bold'>Toale prezzo : {price?.grandTotal} {price?.currency}</Col>
                    <Col xs={1}>
                        <ButtonCartFlight look_in_detail={true} flight={flight} />
                    </Col>
                    <Col xs={1} className='ms-3'>
                        <Button
                            onClick={() => setShowDetail(!showDetail)}
                            size='sm' variant='danger'>
                            <AiFillCloseCircle />
                        </Button>
                    </Col>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default DetailFlight
