import { useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { Outlet } from "react-router-dom"
import HeaderImg from "../components/commons/HeaderImg"
import Cart from "../components/commons/cart/Cart"
import NavBarOrizzontal from "../components/commons/menu/NavBarOrizzontal"
import SideBar from "../components/commons/menu/SideBar"
import useSize from "../hook/useSize"
import { updateBudget } from "../redux/reducerItinerary"
import { BUDGET } from "../utils/commons/constStorageCookie"

const ContainerScreen = () => {

    const { isAllScreen } = useSize().size;
    const dispatch = useDispatch()

    useEffect(() => {
        // TODO : verrà rimosso con i salvataggi in db
        // Tiene stabile il budget principale ad ogni refresh pagina
        dispatch(updateBudget(localStorage.getItem(BUDGET)))
    }, [])


    return (
        <Container fluid>
            <Row className='gx-4'>
                {!isAllScreen && <SideBar />}

                <Col xs={12} md={!isAllScreen ? 6 : 12}>
                    <HeaderImg />
                    <Outlet />
                </Col>

                <Cart />
                {isAllScreen && <NavBarOrizzontal />}
            </Row>
        </Container>
    )
}

export default ContainerScreen