import { Button, Col, Row } from "react-bootstrap";
import CartFlight from "./flight/CartFlight";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { cleanCart } from "../../../redux/reducerItinerary";
import { Link } from 'react-router-dom';

const ContentCart = memo(({ itinerary, counterCart }) => {
    const dispach = useDispatch()

    if (counterCart > 0) {
        return (
            <>
                {/* CARRELLO VOLI */}
                <CartFlight {...itinerary} />

                {
                    counterCart > 0 &&
                    <>
                        <Row className="text-center mt-5">
                            <Col>
                                <Link to={"/"} style={{ fontSize: "13px" }} className="text-dark">Conferma itinerario e scarica il preventivo</Link>
                            </Col>
                        </Row>
                        <Row className="text-center mt-5">
                            <Col>
                                <Button
                                    onClick={() => dispach(cleanCart())}
                                    variant="danger">Svuota</Button>
                            </Col>
                        </Row>
                    </>
                }

            </>
        )
    } else {
        return (
            <Row>
                <Col className="h4 fw-bold text-center mt-4">
                    Il carrello è vuoto
                </Col>
            </Row>
        )
    }
})

export default ContentCart;