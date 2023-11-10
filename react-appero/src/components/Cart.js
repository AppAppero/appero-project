import React, { useState } from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap'
import useSize from '../hook/useSize';
import { useGlobalContext } from '../context/context';

const Cart = () => {
  const sizeGlobal = useSize()
  const { isMobile } = sizeGlobal.size;
  const { isOpen, setIsOpen } = useGlobalContext()
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const column = isOpen && !isMobile ? 2 : 2;

  if (true) {
    if (!isMobile)
      return (
        <Col xs={column} sm={column} md={column}
          className="position-fixed top-0 end-0 vh-100 bg-white"
        >

          <Row>
            <Col>Riepilogo del tuo viaggio</Col>
          </Row>


          {/* <Button variant="primary" onClick={handleShow}>
            Apri Carrello
          </Button> */}

          {/* <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Il tuo Carrello</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Prodotto 1</p>
              <p>Prodotto 2</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Chiudi
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Paga
              </Button>
            </Modal.Footer>
          </Modal> 
        */}

        </Col>
      )
  } else {
    return (
      <Col>
        <div className="position-fixed top-0 end-0 vh-100" style={{ width: '200px' }}>
          <Button variant="primary" onClick={handleShow}>
            Apri Carrello
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Il tuo Carrello</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* Aggiungi qui i tuoi elementi del carrello */}
              <p>Prodotto 1</p>
              <p>Prodotto 2</p>
              {/* ... */}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Chiudi
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Paga
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </Col>
    )
  }

}

export default Cart
