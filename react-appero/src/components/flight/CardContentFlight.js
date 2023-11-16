import { Card, Col, Row } from "react-bootstrap";
import { BsFillCartPlusFill } from 'react-icons/bs';
import { GoArrowSwitch } from 'react-icons/go';
import rya from "../../images/imgEx/rya.png";
import { formatDuration, formatHourByDate } from "../../utils/formatDuration";

const CardContentFlight = ({ itineraries, price }) => {

    return (
        <>
            {
                itineraries.map((iti, i) => (
                    <Card key={i}
                        style={
                            {
                                marginTop: "20px",
                                boxShadow: "3px 10px 20px #0005770D",
                                border: "none"
                            }
                        }>
                        {
                            iti?.segments.map((seg, ind) => (
                                <Row key={ind} className='gx-0 m-2'>
                                    <Col sm={3}>
                                        <img src={rya} />
                                    </Col>
                                    <Col sm={3} style={{ textAlign: "center" }}>
                                        <Row>
                                            <Col style={styleHour}>
                                                {formatHourByDate(seg?.departure?.at)}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                {seg?.departure?.iataCode}
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col sm={3} style={{ ...styleTime, ...styleAlign }}>
                                        <Row>
                                            <Col>
                                                {formatDuration(seg?.duration)}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <GoArrowSwitch size={20} />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                {
                                                    iti?.segments.length === 1 ?
                                                        "Diretto"
                                                        : iti?.segments.length - 1 + " Scali"
                                                }
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col sm={3} style={styleAlign}>
                                        <Row>
                                            <Col style={styleHour}>
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

            <button style={
                {
                    position: 'absolute',
                    color: "white",
                    padding: "3px",
                    top: -10, right: -10,
                    background: "#FDB12A",
                    boxShadow: "0px 10px 20px #00000008",
                    borderRadius: "12px",
                    border: "none",
                    opacity: 1
                }
            }>
                <Col>
                    <BsFillCartPlusFill />
                </Col>
                <Col>{price?.grandTotal}</Col>
            </button>

        </>
    )

}

const styleHour = { fontWeight: "bold", fontSize: "18px" }
const styleTime = { fontSize: "13px" }
const styleAlign = { textAlign: "center" }


export default CardContentFlight