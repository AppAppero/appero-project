import React, { useState } from 'react';
import { Badge, Col, Modal, ModalBody, ModalHeader, Navbar, Row } from 'react-bootstrap';
import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { linksMenu } from '../../../utils/links';
import ContentCart from '../cart/ContentCart';
import { useGlobalContext } from '../../../context/context'

const NavBarOrizzontal = () => {

  const { counterCart } = useSelector(state => state.reducerItinerary);
  const [show, setShow] = useState(false);
  const { context } = useGlobalContext()

  return (
    <>

      {/* Modal del carrello */}
      <ModalCart show={show} setShow={setShow} />

      {/* NavBar orizzontale */}
      <Navbar
        className='position-fixed w-100 bottom-0 start-0 z-index-1000 m-0 p-0'
        expand="xl"
        bg="white"
        variant="light"
        style={{ height: "80px" }}
      >
        <Row className='w-100 text-center gx-0'>
          {
            linksMenu(true).linksTop.map((el, index) => (
              <Col xs={2} key={index}>
                <Link style={{ padding: "10px", color: "blue", background: context === el.name ? "blue" : "" }}
                  className={context === el.name ? 'rounded-pill text-white' : ""} to={el.path}>{el.icon}</Link>
              </Col>
            ))
          }

          <Col xs={2} className='position-relative text-center'>
            <FaCartArrowDown
              style={{ color: "blue" }}
              size={22}
              onClick={() => setShow(!show)} />

            <Badge className='translate-middle position-absolute start-90 top-0 rounded-pill bg-danger'>
              {counterCart}
            </Badge>
          </Col>

        </Row>
      </Navbar >
    </>

  );
};

// Modal per il carrello ---> Attualmente interno
const ModalCart = ({ show, setShow }) => {
  return (
    <Modal show={show} onHide={() => setShow(!show)}>
      <ModalHeader closeButton>
        {/* <div className="d-flex justify-content-between w-100">
          <ModalTitle>Carrello - Budget :</ModalTitle>
          <ModalTitle
            className={actualBudget <= 0 ? 'text-danger' : 'text-success'}>
            {actualBudget} €
          </ModalTitle>
        </div> */}
      </ModalHeader>
      <ModalBody>

        {/* CARRELLO VOLI */}
        <ContentCart />

      </ModalBody>
    </Modal>
  )
}

export default NavBarOrizzontal;
