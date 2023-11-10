import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BiSolidUser } from 'react-icons/bi'
import { BsCalendar3 } from 'react-icons/bs'
import { SiGooglemaps } from 'react-icons/si'
import Cart from '../components/Cart'
import HeaderDetail from '../components/HeaderDetail'
import HeaderImg from '../components/HeaderImg'
import SideBar from '../components/SideBar'
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
          <HeaderDetail detail={detailFlight} />

        </Col>

        <Cart />
      </Row>
    </Container>
  )
}

const detailFlight =
  [
    {
      title: "Destinazione/Home struttura",
      detail: [
        {
          icon: <SiGooglemaps />,
          text: "Zapponeta"
        }
      ]
    },
    {
      title: "Check in - Check-out",
      detail: [
        {
          icon: <BsCalendar3 />,
          text: "13.12.2023 22.12.2022"
        }
      ]
    },
    {
      title: "Persone",
      detail: [
        {
          icon: <BiSolidUser />,
          text: "2 Adulti 1 Stanza"
        }
      ]
    }
  ]

export default Hotel
