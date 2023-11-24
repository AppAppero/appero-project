import { Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { cleanCart } from "../../../redux/reducerItinerary";
import NavigateButton from "../NavigateButton";
import Budget from "./Budget";
import CartFlight from "./flight/CartFlight";

const ContentCart = () => {
    const { itinerary, counterCart } = useSelector(state => state.reducerItinerary);

    const dispach = useDispatch()

    return (
        <>
            <Row className="text-center mt-4">
                <Col className="h4">Carrello itinerario</Col>
            </Row>

            <Budget />

            {
                counterCart > 0 ?
                    (

                        <>
                            {/* CARRELLO VOLI */}
                            <CartFlight {...itinerary} />

                            <Row className="text-center mt-5">
                                <Col>
                                    <Link to={"/"} style={{ fontSize: "13px" }} className="text-dark">Conferma itinerario e scarica il preventivo</Link>
                                </Col>
                            </Row>
                            <Row className="text-center mt-5 gx-0">
                                <NavigateButton action="preview" />
                                <Col className="text-center">
                                    <Button
                                        onClick={() => dispach(cleanCart())}
                                        variant="danger">Svuota</Button>
                                </Col>
                                <NavigateButton action="next" />
                            </Row>
                        </>
                    ) :
                    (
                        <Row>
                            <Col className="h4 fw-bold text-center mt-4">
                                Il carrello è vuoto
                            </Col>
                        </Row>
                    )
            }

        </>
    )
}

export default ContentCart;