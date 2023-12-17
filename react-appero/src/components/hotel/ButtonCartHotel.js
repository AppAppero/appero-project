import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useGlobalContext } from "../../context/context";
import { selectedHotel } from "../../redux/reducerHotel";
import { addHotel, removeHotel } from "../../redux/reducerItinerary";
import CartHotel from "../commons/cart/hotel/CartHotel";
import { FaCartArrowDown } from "react-icons/fa";

const ButtonCartHotel = ({ hotel, look_in_detail }) => {
    const dispatch = useDispatch()
    const { counterCart } = useSelector(state => state.reducerItinerary)
    const { selectHotelId } = useSelector(state => state.reducerHotel)
    const { addElement, removeElement } = useGlobalContext()

    /**
  * Gestisce il bottone del carrello dell'hotel controllando per id hotel
  * Se non c'è lo aggiunge all'itinerario e illumina il bottone 
  * Altrimenti lo rimuove spegnendo il bottone
  */
    const checkHotelItinery = () => {
        if (hotel.hotelId === selectHotelId) {
            dispatch(selectedHotel(0))
            dispatch(removeHotel())
            removeElement("Hotel")
        } else {
            dispatch(selectedHotel(hotel.hotelId))
            dispatch(addHotel(hotel))
            addElement("Hotel", <CartHotel itinerary={hotel} />)
        }
    }


    // Se il carrello è vuoto, toglie il seleziona da bottone
    useEffect(() => {
        if (counterCart === 0)
            dispatch(selectedHotel(0))
    }, [counterCart])


    return (
        <Button
            onClick={checkHotelItinery}
            variant={selectHotelId !== hotel.hotelId ? "secondary" : "warning"}
            className="text-light btn-sm">
            {look_in_detail ? <FaCartArrowDown color='white' /> : "Seleziona Hotel"}
        </Button>
    )
}
export default ButtonCartHotel