import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Cart from '../components/commons/cart/Cart'
import HeaderImg from '../components/commons/HeaderImg'
import SideBar from '../components/commons/menu/SideBar'
import { useGlobalContext } from '../context/context'
import useTitle from '../hook/useTitle'

const Hotel = () => {
  useTitle("Hotel")
  const { colContentXS, colContentSM, colContentMD } = useGlobalContext();
  return (
    <Container fluid>
      <Row className='justify-content-center align-items-center'>
        <SideBar page="Hotel" />

        <Col
          xs={colContentXS} sm={colContentSM} md={colContentMD}>
          <HeaderImg />
          {/* <HeaderDetail detail={detailFlight} /> */}

        </Col>

        <Cart />
      </Row>
    </Container>
  )
}

export default Hotel
