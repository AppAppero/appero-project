import { memo } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { encodedSymbolCurrency } from "../../utils/commons/formatState";
import ButtonCartHotel from "./ButtonCartHotel";
import DetailHotel from "./DetailHotel";

const CardContentHotel = memo(({ hotel }) => {
    const { urlPhotos, nameHotel, nearHotel, recapDetails, quantityRating,
        availableRooms, mainDetailsHotel, rating, totalPrice, detailsPrice, currency } = hotel
    return (
        <Col xs={12} className="p-0">
            <Card
                className='shadow-lg border-0 rounded-3 p-3 mt-4 border-none'>
                <Row>
                    <Col xs={12} sm={5} className="text-start">
                        <Row>
                            <Col className="position-relative">
                                {/* <p className="text-light rounded-3 position-absolute"
                                    style={{ ...sizeText, top: "-10px", left: "40px", background: "#2AC936", padding: "3px 7px 2px 7px" }}>Tipology</p> */}
                                <img
                                    className="rounded-3"
                                    src={urlPhotos[0]} style={{ width: "100%", height: "150px" }}></img>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={6} sm={4} className="text-start">
                        <Row>
                            <Col className="fw-bold">{nameHotel}</Col>
                        </Row>
                        <Row>
                            <Col style={sizeText}>{nearHotel}</Col>
                        </Row>
                        {/* <Row className="mt-2">
                            <Col style={sizeText} className="text-danger">{availableRooms} camere disponibili</Col>
                        </Row> */}
                        <Row className="mt-2">
                            <Col style={sizeText} className="text-secondary">{recapDetails}</Col>
                        </Row>
                        <Row>
                            <Col style={{ ...sizeText, color: "#2AC936" }}>{mainDetailsHotel}</Col>
                        </Row>
                    </Col>
                    <Col xs={6} sm={3} className="text-end">
                        <Row>
                            <Col className="fw-bold"><FaStar color="orange" style={{ marginTop: "-5px" }} size={14} /> {rating}</Col>
                        </Row>
                        <Row>
                            <Col style={sizeText} className="text-secondary">{quantityRating}</Col>
                        </Row>
                        <Row>
                            <Col style={{ fontSize: "18px" }} className="fw-bold">{totalPrice} {encodedSymbolCurrency(currency)}</Col>
                        </Row>
                        <Row>
                            <Col style={sizeText} className="text-secondary">{detailsPrice}</Col>
                        </Row>

                        <DetailHotel hotel={hotel} />

                        <Row className="mt-2">
                            <Col>
                                <ButtonCartHotel hotel={hotel} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card>
        </Col>
    )
})

const sizeText = { fontSize: "10px" }

export default CardContentHotel