import React from 'react';
import { Col, Row } from 'react-bootstrap';
import detailFlight from '../../model/flight/detailFlight';

const HeaderDetail = ({ params }) => {
    // const [showModal, setShowModal] = useState(false)

    return (
        <>
            <Row className='rounded-3 p-2 justify-content-center gx-0'
                style={{ background: "#F29F05"}}>
                {
                    detailFlight(params).map((el, index) => (
                        <Col  key={index}>
                            <Row style={styleTile}>
                                <Col xs={1}></Col>
                                <Col>{el?.title}</Col>
                            </Row>
                            {
                                el.detail.map((d, i) => (
                                    <Row key={i}>
                                        <Col xs={1}>
                                            {d?.icon}
                                        </Col>
                                        <Col style={d?.style ? d.style : styleAu}>
                                            {d?.text}
                                        </Col>
                                    </Row>
                                ))
                            }
                        </Col>
                    ))
                }
            </Row>

            {/* <Col className="mt-1 d-flex justify-content-end">
                <Button onClick={() => setShowModal(!showModal)} className="btn btn-md" variant='light'>
                    <GrUpdate />
                </Button>
            </Col>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title key={0}>Cambia Parametri</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormFormik size={size} buttonHidden={false} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Chiudi
                    </Button>
                    <Button variant="warning" onClick={() => setShowModal(false)}>
                        Cerca
                    </Button>
                </Modal.Footer>
            </Modal> */}
        </>
    )
}

const styleTile = { fontSize: "12px", color: "white" }
const styleAu = { fontSize: "15px", fontWeight: "bold" }


export default HeaderDetail
