import React from 'react';
import { Button, Col, Form, FormControl, FormGroup, Container, Row } from "react-bootstrap";

const FormElement = ({ isMobile }) => {

    const formStyle = {
        position: "absolute",
        bottom: isMobile ? 10 : 40,
        left: 0,
        right: 0,
        zIndex: 5,
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        padding: "20px",
        width: "95%",
        borderRadius: "10px",
        textAlign: "center",
        boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)'
    };


    return (
        <Container fluid
            className="justify-content-center align-items-center"
            style={formStyle}>
            <Row>
                <Col xs={12} sm={11} md={10} lg={10}>
                    <Form>
                        <div className="bg-white p-3 rounded mt-0">
                            <FormGroup className='row'>
                                <Col sm={6} md={3} >
                                    <FormControl
                                        className='mt-2'
                                        placeholder='Partenza'
                                        type="text"
                                        id='partenza'
                                        name='partenza'
                                    />
                                    <FormControl
                                        className='mt-2'
                                        type="date"
                                        id="start"
                                        name="start"
                                    />
                                </Col>

                                <Col sm={6} md={3}>
                                    <FormControl
                                        className='mt-2'
                                        placeholder='Arrivo'
                                        type="text"
                                        id='partenza'
                                        name='partenza'
                                    />
                                    <Col>
                                        <FormControl
                                            className='mt-2'
                                            type="date"
                                            id="end"
                                            name="end" />
                                    </Col>
                                </Col>

                                <Col xs={4} sm={4} md={2}>
                                    <FormControl
                                        className='mt-2'
                                        placeholder='Adulti'
                                        type='number' />
                                </Col>
                                <Col xs={4} sm={4} md={2}>
                                    <FormControl
                                        className='mt-2'
                                        placeholder='Bambini'
                                        type='number' />
                                </Col>
                                <Col xs={4} sm={4} md={2}>
                                    <FormControl
                                        className='mt-2'
                                        placeholder='Budget'
                                        type='number' />
                                </Col>

                            </FormGroup>
                        </div>
                    </Form>
                </Col>
                <Col sm={2} className="mt-4">
                    <Button size='lg' className="btn btn-warning"
                        style={{ color: "white", fontWeight: "bold" }}>Search</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default FormElement;
