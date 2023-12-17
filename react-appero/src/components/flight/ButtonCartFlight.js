import { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { FaArrowCircleRight, FaCartArrowDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useGlobalContext } from "../../context/context";
import { selectedFlight } from "../../redux/reducerFlight";
import { addFlight, removeFlight } from "../../redux/reducerItinerary";
import CartFlight from "../commons/cart/flight/CartFlight";

const ButtonCartFlight = ({ look_in_detail, flight }) => {
    const { addElement, removeElement } = useGlobalContext()
    const { counterCart } = useSelector(state => state.reducerItinerary)
    const { selectFlightId} = useSelector(state => state.reducerFlight)

    const dispatch = useDispatch();
    /**
     * Gestisce il bottone del carrello del volo controllando per id volo
     * Se non c'è lo aggiunge all'itinerario e illumina il bottone 
     * Altrimenti lo rimuove spegnendo il bottone
     */
    const checkFlightItinery = () => {
        if (flight.id === selectFlightId) {
            dispatch(selectedFlight(0))
            dispatch(removeFlight())
            removeElement("Volo")
        } else {
            dispatch(selectedFlight(flight.id))
            dispatch(addFlight(flight))
            addElement("Volo", <CartFlight itinerary={flight} />)
        }
    }

    // Se il carrello è vuoto, toglie il seleziona da bottone
    useEffect(() => {
        if (counterCart === 0)
            dispatch(selectedFlight(0))
    }, [counterCart])


    if (look_in_detail) {
        return (
            <Button
                onClick={checkFlightItinery}
                size='sm' 
                variant={selectFlightId !== flight.id ? "secondary" : "warning"}>
                <FaCartArrowDown color='white' />
            </Button>
        )
    }

    return (
        <Button
            style={{ width: "100%" }}
            variant={selectFlightId !== flight.id ? "secondary" : "warning"}
            className="btn-md btn-outline-warning shadow-sm text-white border-0"
            onClick={checkFlightItinery}
        >
            <Row>
                <Col xs={8} className="text-end">Seleziona volo</Col>
                <Col xs={4} className="text-end"><FaArrowCircleRight /></Col>
            </Row>
        </Button>
    )
}
export default ButtonCartFlight