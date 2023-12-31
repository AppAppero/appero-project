import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { FaHotel } from "react-icons/fa";
import { MdOutlineFlight, MdSignalCellularConnectedNoInternet0Bar } from 'react-icons/md';
import { RiDeleteBack2Line } from 'react-icons/ri';
import { useDispatch } from "react-redux";
import { useGlobalContext } from '../../../context/context';
import { removeFlight, removeHotel } from "../../../redux/reducerItinerary";

const HeaderCart = ({ name }) => {
    const dispach = useDispatch()
    const { removeElement } = useGlobalContext()

    // In base al nome richiesto, restituisce l'icona
    const switchIcon = () => {
        let size = 20
        let color = "blue"
        switch (name) {
            case "flight":
                return <MdOutlineFlight size={size} color={color} />
            case "hotel":
                return <FaHotel size={size} color={color} />
            default:
                return <MdSignalCellularConnectedNoInternet0Bar size={size} color={color} />
        }
    }

    // In base al nome, rimuove dall'itinerario l'elemento richiesto
    const checkRemove = () => {
        if (name === "flight") {
            dispach(removeFlight())
            removeElement("Volo")
        } else if (name === "hotel") {
            dispach(removeHotel())
            removeElement("Hotel")
        }
    }


    return (
        <Row className="mt-3 mb-2 gx-3">
            <Col xs={9} className='text-start'>
                {switchIcon()}
            </Col>
            <Col xs={2} className='text-end'>
                <Button
                    onClick={checkRemove}
                    variant="light"
                    className="btn-outline-danger btn-sm">
                    <RiDeleteBack2Line />
                </Button>
            </Col>
        </Row>
    )
}

export default HeaderCart
