import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { BsArrowRightCircle } from "react-icons/bs";

const SuggestedTravel = ({ sizeGlobal }) => {

    const { size } = sizeGlobal;

    const contStyle = {
        marginTop: "30px",
        height: "auto",
        padding: "20px",
        //boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.8)'
    };
    const cardStyle = {
        padding: "10px",
        height: "200px",

    };

    return (
        // d-none d-sm-block : sarà nascosto su dispositivi con una larghezza inferiore a md (768px) e sarà visibile solo su dispositivi di dimensioni md e superiori. Puoi adattare le classi d-* alle tue esigenze specifiche, a seconda del breakpoint in cui desideri nascondere o mostrare il componente.
        <div style={contStyle}>
            <Row>
                <p style={{ color: "white" }}>Montagne | Pianura | Spiaggia</p>
                <div className="text-center">
                    <h1 className="h4"
                        style={{ color: "white", fontWeight: "bold", textAlign: "initial" }}>Trascorri le tue vacanze con le nostre attività</h1>
                </div>
            </Row>
            <Row className="align-items-center mt-2 mb-3">
                <Col xs={10} sm={10} md={6} lg={5}>
                    <h3 className="h6"
                        style={{ color: "white", fontWeight: "bold" }}>I più popolari</h3>
                </Col>
                <Col xs={2} sm={2} md={2} lg={2}>
                    <BsArrowRightCircle color={"white"} size={20} />
                </Col>
            </Row>
            {

                !size.isMobile &&

                <Row>
                    <Col xs={4} sm={3} md={3} lg={2} >
                        <Card className="card m-1" style={cardStyle}>
                            {/* Contenuto della Card 1 */}
                        </Card>
                    </Col>
                    <Col xs={4} sm={3} md={3} lg={2} >
                        <Card className="card m-1" style={cardStyle}>
                            {/* Contenuto della Card 2 */}
                        </Card>
                    </Col>
                    <Col xs={4} sm={3} md={3} lg={2} >
                        <Card className="card m-1" style={cardStyle}>
                            {/* Contenuto della Card 3 */}
                        </Card>
                    </Col>
                </Row>
            }
        </div>

    );

};


export default SuggestedTravel;
