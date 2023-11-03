import React from 'react';
import { Button, Col, Form, FormControl, FormGroup, Container, Row } from "react-bootstrap";

const FormElement = ({ sizeGlobal }) => {

    const { size } = sizeGlobal;

    const formStyle = {
        margin: !size.isMobile ? "120px auto 0 auto" : "50px auto 0 auto",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        padding: "20px",
        width: "90%",
        borderRadius: "10px",
        textAlign: "center",
        boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)',
    };


    return (
        <div
            className="justify-content-center align-items-center"
            style={formStyle}>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                    <Form>
                        <div className="bg-white p-3 rounded mt-0">
                            <FormGroup className='row m-auto'>
                                <Col xs={6} sm={6} md={6}>
                                    <FormControl
                                        className='mt-2'
                                        placeholder='Partenza'
                                        type="text"
                                        id='partenza'
                                        name='partenza'
                                    />
                                    <FormControl
                                        placeholder='Data di partenza'
                                        className='mt-2'
                                        type="date"
                                        id="start"
                                        name="start"
                                    />
                                </Col>

                                <Col xs={6} sm={6} md={6}>
                                    <FormControl
                                        className='mt-2'
                                        placeholder='Arrivo'
                                        type="text"
                                        id='partenza'
                                        name='partenza'
                                    />
                                    <Col>
                                        <FormControl
                                            placeholder='Data di ritorno'
                                            className='mt-2'
                                            type="date"
                                            id="end"
                                            name="end" />
                                    </Col>
                                </Col>

                                <Col xs={6} sm={5} md={3}>
                                    <FormControl
                                        className='mt-2'
                                        placeholder='Adulti'
                                        type='number' />
                                </Col>
                                <Col xs={6} sm={5} md={3}>
                                    <FormControl
                                        className='mt-2'
                                        placeholder='Bambini'
                                        type='number' />
                                </Col>
                                <Col xs={6} sm={5} md={3}>
                                    <FormControl
                                        className='mt-2'
                                        placeholder='Budget'
                                        type='number' />
                                </Col>
                                <Col xs={6} sm={5} md={3} className="mt-2">
                                    <button className="btn btn-md btn-outline-warning"
                                        style={{ fontWeight: "bold" }}>Cerca</button>
                                </Col>
                            </FormGroup>
                        </div>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default FormElement;
