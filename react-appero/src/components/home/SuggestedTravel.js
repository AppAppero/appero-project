import React from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'react-bootstrap';
import { BsArrowRightCircle } from "react-icons/bs";

const SuggestedTravel = ({ sizeGlobal }) => {

    const { size } = sizeGlobal;

    const cardStyle = {

    };

    return (
        // d-none d-sm-block : sarà nascosto su dispositivi con una larghezza inferiore a md (768px) e sarà visibile solo su dispositivi di dimensioni md e superiori. Puoi adattare le classi d-* alle tue esigenze specifiche, a seconda del breakpoint in cui desideri nascondere o mostrare il componente.
        <Row className='mt-5 p-0'>
            <Row>
                <Col className='text-white'>Montagne | Pianura | Spiaggia</Col>
            </Row>
            <Row>
                <Col className="text-white fw-bold text-start h4 mt-3">
                    Trascorri le tue vacanze con le nostre attività
                </Col>
            </Row>

            <Row className="align-items-center mt-2 mb-3">
                <Col xs={4} className='h6 text-white fw-bold'>
                    I più popolari
                </Col>
                <Col xs={2}>
                    <BsArrowRightCircle color={"white"} size={20} />
                </Col>
            </Row>
            {

                !size.isMobile &&

                <Row>
                    {
                        Array(3).fill(0).map((el, index) => (
                            <Col key={index} xs={3}>
                                <Card className="p-4">
                                    <CardHeader>
                                        Test - {index}

                                    </CardHeader>
                                    <CardBody>

                                    </CardBody>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            }
        </Row>

    );

};


export default SuggestedTravel;
