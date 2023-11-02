import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { BsArrowRightCircle } from "react-icons/bs";
import { useGlobalContext } from '../../context/context';

const SuggestedTravel = ({ isMobile }) => {

    const { width , height } = useGlobalContext().windowSize

    const contStyle = {
        zIndex: 5,
        position: "absolute",
        left: 0,
        top: isMobile || height < 762 ? 80 : 180,
        // width: "50%",
        height: "auto",
        padding: "20px",
        //boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.8)'
    };

    const cardStyle = {
        flex: "1",
        padding: "10px",
        height: "200px",
    };

    return (
        // d-none d-sm-block : sarà nascosto su dispositivi con una larghezza inferiore a md (768px) e sarà visibile solo su dispositivi di dimensioni md e superiori. Puoi adattare le classi d-* alle tue esigenze specifiche, a seconda del breakpoint in cui desideri nascondere o mostrare il componente.
        <Container className={!isMobile ? "w-60 w-md-100" : "w-90 w-md-100"} style={contStyle}>
            {
                // Se la lunghezza dello schermo è maggiore di 510 mostrami il titolo
               ( width > 560 && height > 510) &&
                <>
                    <p style={{ color: "white" }}>Montagne | Pianura | Spiaggia</p>
                    <div className="text-center">
                        <h1 className="h4"
                            style={{ color: "white", fontWeight: "bold", textAlign: "initial" }}>Trascorri le tue vacanze con le nostre attività</h1>
                    </div>
                </>
            }
            <Row className="align-items-center mt-2 mb-3">
                <Col xs={11} sm={11} md={6} className="ext-md-left">
                    <h3 className="h6"
                        style={{ color: "white", fontWeight: "bold" }}>I più popolari</h3>
                </Col>
                <Col xs={1}>
                    <BsArrowRightCircle color={"white"} size={20} />
                </Col>
            </Row>
            {!isMobile && height > 762 &&
                <Row className='align-items-center'>
                    <Col xs={6} sm={6} md={4} lg={4} xl={3}>
                        <Card className="card m-1" style={cardStyle}>
                            {/* Contenuto della Card 1 */}
                        </Card>
                    </Col>
                    <Col xs={6} sm={6} md={4} lg={4} xl={3}>
                        <Card className="card m-1" style={cardStyle}>
                            {/* Contenuto della Card 2 */}
                        </Card>
                    </Col>
                    <Col xs={6} sm={6} md={4} lg={4} xl={3}>
                        <Card className="card m-1" style={cardStyle}>
                            {/* Contenuto della Card 3 */}
                        </Card>
                    </Col>
                </Row>
            }
        </Container>
    );

};


export default SuggestedTravel;
