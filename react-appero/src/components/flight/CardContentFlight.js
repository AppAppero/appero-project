import { Button, Card, Col, Row } from "react-bootstrap";
import { BsFillCartPlusFill } from 'react-icons/bs';

const CardContentFlight = ({ itineraries, card }) => {


    const formatHourByDate = (data) => {
        let da = new Date(data)

        // Estrai l'ora e i minuti
        const hours = da.getHours();
        const minutes = da.getMinutes();

        // Formatta l'ora
        const hourFormatted = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
        return hourFormatted;
    }


    return (
        <>
            {
                itineraries.map((iti, i) => (
                    <Card key={i} style={{ marginTop: "20px" }}>
                        {
                            iti?.segments.map((seg, ind) => (
                                <Row key={ind} className='gx-5 m-3'>
                                    <Col sm={3}>
                                        <img src={seg?.imageCompany} />
                                    </Col>
                                    <Col sm={3}>
                                        <Row>
                                            <Col>
                                                {formatHourByDate(seg?.departure?.at)}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                {seg?.departure?.iataCode}
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col sm={3}>
                                        <Row>
                                            <Col>
                                                {seg?.duration}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col></Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                {
                                                    iti?.segments.length === 1 ?
                                                        "Diretto" : iti?.segments.length - 1 + " Scali"
                                                }
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col sm={3}>
                                        <Row>
                                            <Col>
                                                {formatHourByDate(seg?.arrival?.at)}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                {seg?.arrival?.iataCode}
                                            </Col>
                                        </Row>
                                    </Col>

                                </Row>
                            ))
                        }
                    </Card>
                ))


            }

            <Button style={{
                position: 'absolute', top: -10, right: -10,
                background: "#FDB12A",
                boxShadow: "0px 10px 20px #00000008",
                borderRadius: "12px",
                border: "none",
                opacity: 1

            }}>
                <Col>
                    <BsFillCartPlusFill />
                </Col>
                <Col>{card.price.grandTotal}</Col>
            </Button>

        </>
    )

}



export default CardContentFlight