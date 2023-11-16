import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BiSolidUser } from 'react-icons/bi';
import { BsCalendar3 } from 'react-icons/bs';
import { SiGooglemaps } from 'react-icons/si';
import { useLocation } from 'react-router-dom';
import Cart from '../components/Cart';
import HeaderDetail from '../components/HeaderDetail';
import HeaderImg from '../components/HeaderImg';
import SideBar from '../components/SideBar';
import ContentFlight from '../components/flight/ContentFlight';
import HeaderFilterFlight from '../components/flight/HeaderFilterFlight';
import useTitle from '../hook/useTitle';
import { checkNameCity, checkTextCalculateDate, checkTextDate, checkTextPerson } from '../utils/formatState';
import NavBarOrizzontal from '../components/NavBarOrizzontal';
import useSize from '../hook/useSize';

const Flight = () => {
    const sizeGlobal = useSize()
    const { isMobile } = sizeGlobal.size;
    useTitle("Voli")
    // const { colContentXS, colContentSM, colContentMD } = useGlobalContext();
    // Con useLocation recupero lo state per evitare di passare tutto nell'url
    const { params } = useLocation()?.state

    const detailFlight =
        [
            {
                title: "Destinazione",
                detail: [
                    {
                        hidden: true,
                        type: "text",
                        icon: <SiGooglemaps />,
                        text: checkNameCity(params?.destinationLocationCode)
                    },
                    {
                        hidden: true,
                        type: "text",
                        text: "Da " + checkNameCity(params?.originLocationCode),
                        style: { fontSize: "12px" }
                    }
                ]
            },
            {
                type: "text",
                title: "Data del viaggio",
                detail: [
                    {
                        hidden: true,
                        type: "date",
                        icon: <BsCalendar3 />,
                        text: checkTextDate(params)
                    },
                    {
                        hidden: false,
                        icon: "",
                        text: checkTextCalculateDate(params),
                        style: { fontSize: "12px" }
                    }
                ]
            },
            {
                title: "Persone",
                detail: [
                    {
                        hidden: true,
                        icon: <BiSolidUser />,
                        text: checkTextPerson(params)
                    }
                ]
            }
        ]

    return (
        <Container fluid>
            <Row className='justify-content-center align-items-center'>
                {!isMobile && <SideBar page="Voli" />}

                <Col xs={12} sm={8} md={6}>
                    <HeaderImg />
                    <HeaderDetail detail={detailFlight} />
                    <HeaderFilterFlight />
                    <ContentFlight params={params} />
                </Col>

                <Cart />
                {isMobile && <NavBarOrizzontal />}
            </Row>
        </Container>
    );
}

export default Flight;
