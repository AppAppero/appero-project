import React, { useState } from 'react';
import { Badge, Col, Modal, ModalBody, ModalHeader, Navbar } from 'react-bootstrap';
import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { linksMenu } from '../../../utils/links';
import ContentCart from '../cart/ContentCart';

const NavBarOrizzontal = () => {

  const { counterCart } = useSelector(state => state.reducerItinerary);
  const [show, setShow] = useState(false);

  return (
    <>

      {/* Modal del carrello */}
      <ModalCart show={show} setShow={setShow} />

      {/* NavBar orizzontale */}
      <Navbar
        className='position-fixed w-100 bottom-0 start-0 z-index-1000'
        expand="xl"
        bg="white"
        variant="light"
        style={{ height: "80px", padding: "10px 10px 20px 10px" }}
      >

        {
          linksMenu().linksTop.map((el, index) => (
            <Col key={index}>
              <Link to={el.path}>{el.icon}</Link>
            </Col>
          ))
        }

        <Col className='position-relative'
          style={{ display: counterCart === 0 ? "none" : "" }}
        >
          <FaCartArrowDown
            size={22} color="orange"
            onClick={() => setShow(!show)} />

          <Badge className=' translate-middle position-absolute start-50 top-0 rounded-pill bg-danger'>
            {counterCart}
          </Badge>
        </Col>

        {
          linksMenu().linksFooter.map((el, index) => (
            <Col key={index}>
              <Link to={el.path}>{el.icon}</Link>
            </Col>
          ))
        }
      </Navbar>
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
