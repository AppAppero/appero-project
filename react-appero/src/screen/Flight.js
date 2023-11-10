import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BiSolidUser } from 'react-icons/bi';
import { BsCalendar3 } from 'react-icons/bs';
import { SiGooglemaps } from 'react-icons/si';
import Cart from '../components/Cart';
import HeaderDetail from '../components/HeaderDetail';
import HeaderImg from '../components/HeaderImg';
import SideBar from '../components/SideBar';
import ContentFlight from '../components/flight/ContentFlight';
import HeaderFilterFlight from '../components/flight/HeaderFilterFlight';
import { useGlobalContext } from '../context/context';
import useTitle from '../hook/useTitle';

const Flight = () => {
    useTitle("Voli")
    const { colContentXS, colContentSM, colContentMD } = useGlobalContext();

    return (
        <Container fluid>
            <Row className='justify-content-center align-items-center'>
                <SideBar page="Voli" />

                <Col
                    xs={colContentXS} sm={colContentSM} md={colContentMD}>
                    <HeaderImg />
                    <HeaderDetail detail={detailFlight} />
                    <HeaderFilterFlight />
                    <ContentFlight />
                </Col>

                <Cart />
            </Row>
        </Container>
    );
}

const detailFlight =
    [
        {
            title: "Destinazione",
            detail: [
                {
                    icon: <SiGooglemaps />,
                    text: "Zapponeta"
                },
                {
                    icon: "",
                    text: "Da Monte"
                }
            ]
        },
        {
            title: "Data del viaggio",
            detail: [
                {
                    icon: <BsCalendar3 />,
                    text: "13.12.2023 22.12.2022"
                },
                {
                    icon: "",
                    text: "9 Giorni"
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

export default Flight;
