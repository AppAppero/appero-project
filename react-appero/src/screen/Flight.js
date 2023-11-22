import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import HeaderDetail from '../components/commons/HeaderDetail';
import HeaderImg from '../components/commons/HeaderImg';
import Cart from '../components/commons/cart/Cart';
import NavBarOrizzontal from '../components/commons/menu/NavBarOrizzontal';
import SideBar from '../components/commons/menu/SideBar';
import ContentFlight from '../components/flight/ContentFlight';
import HeaderFilterFlight from '../components/flight/HeaderFilterFlight';
import useSize from '../hook/useSize';
import useTitle from '../hook/useTitle';
import { updateBudget } from '../redux/reducerItinerary';

const Flight = () => {
    useTitle("Voli")

    const { isAllScreen } = useSize().size;
    // const { colContentXS, colContentSM, colContentMD } = useGlobalContext();

    // Con useLocation recupero lo state per evitare di passare tutto nell'url
    let { params } = useLocation()?.state
    const dispatch = useDispatch()

    useEffect(() => {
        // TODO : verrà rimosso con i salvataggi in db
        // Tiene stabile il budget principale ad ogni refresh pagina
        dispatch(updateBudget(localStorage.getItem("budgetSession")))
    }, [])

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
