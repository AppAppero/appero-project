import React, { useEffect, useState } from 'react';
import { Badge, Button, Col, Navbar, Row } from 'react-bootstrap';
import { FaArrowAltCircleLeft, FaCartArrowDown } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useGlobalContext } from '../../../context/context';
import ModalCart from '../menu/ModalCart';
import { useNavigate } from 'react-router-dom';

const NavBarOrizzontal = () => {

  const { counterCart, itinerary } = useSelector(state => state.reducerItinerary);
  const [show, setShow] = useState(false);
  const { context } = useGlobalContext()
  const [checkNext, setCheckNext] = useState(false)
  const containerDisabilited = ["flight", "hotel"]
  const navigate = useNavigate()


  const clickNext = () => {
    let page = ""
    switch (context) {
      case "flight":
        page += "hotel"
        break;
      case "hotel":
        page += "render"
        break;
      case "render":
        page += "attraction"
        break;
      default:
        page += "/"
        break;
    }
    navigate(page)
  }


  const clickPreview = () => {
    let page = ""
    switch (context) {
      case "flight":
        page = "/"
        break;
      case "hotel":
        page += "flight"
        break;
      case "render":
        page += "hotel"
        break;
      case "attraction":
        page += "render"
        break;
      default:
        page += "/"
        break;
    }
    navigate(page)
  }


  useEffect(() => {
    checkEffect()
  }, [itinerary, context])
 
  const checkEffect = () => {
    if (context === "flight") {
      if (itinerary?.flight?.id !== undefined)
        setCheckNext(false)
      else
        setCheckNext(true)
    }
    if (context === "hotel") {
      if (itinerary?.hotel?.hotelId !== undefined)
        setCheckNext(false)
      else
        setCheckNext(true)
    }
  }

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

          <Col xs={3} className='text-center'>
            <Button
              onClick={clickPreview}
              variant='primary' className='btn-primary'>
              <FaArrowAltCircleLeft cursor="pointer" style={{ color: "white" }} size={22} />
            </Button>
          </Col>

          <Col xs={6} className='text-center'>
            <Button
              onClick={clickNext}
              style={{ width: "100%" }} disabled={checkNext}
              variant='warning' className='btn-md btn-warning text-light'>
              Prosegui
            </Button>
          </Col>

          <Col xs={3} className='position-relative text-center'>
            <Button variant='primary' className='btn-primary'>
              <FaCartArrowDown
                cursor="pointer"
                style={{ color: "white" }}
                size={22}
                onClick={() => setShow(!show)} />

              <Badge className='translate-middle position-absolute start-90 top-0 rounded-pill bg-danger'>
                {counterCart}
              </Badge>
            </Button>
          </Col>

        </Row>
      </Navbar >
    </>

  );
};


export default NavBarOrizzontal;
