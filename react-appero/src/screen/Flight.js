import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Cart from '../components/commons/cart/Cart';
import HeaderDetail from '../components/commons/HeaderDetail';
import HeaderImg from '../components/commons/HeaderImg';
import NavBarOrizzontal from '../components/commons/menu/NavBarOrizzontal';
import SideBar from '../components/commons/menu/SideBar';
import ContentFlight from '../components/flight/ContentFlight';
import HeaderFilterFlight from '../components/flight/HeaderFilterFlight';
import useSize from '../hook/useSize';
import useTitle from '../hook/useTitle';

const Flight = () => {
    useTitle("Voli")

    const { isAllScreen } = useSize().size;
    // const { colContentXS, colContentSM, colContentMD } = useGlobalContext();

    // Con useLocation recupero lo state per evitare di passare tutto nell'url
    const { params } = useLocation()?.state


    return (
        <Container fluid>
            <Row className='gx-4'>
                {!isAllScreen && <SideBar page="Voli" />}

                <Col xs={12} md={6}>
                    <HeaderImg />
                    <HeaderDetail params={params} />
                    <HeaderFilterFlight />
                    <ContentFlight params={params} />
                </Col>

                <Cart />
                {isAllScreen && <NavBarOrizzontal />}
            </Row>
        </Container>
    );
}

export default Flight;
