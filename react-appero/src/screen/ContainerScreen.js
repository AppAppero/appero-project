import { useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { Outlet } from "react-router-dom"
import HeaderDetail from "../components/commons/HeaderDetail"
import HeaderImg from "../components/commons/HeaderImg"
import Cart from "../components/commons/cart/Cart"
import NavBarOrizzontal from "../components/commons/menu/NavBarOrizzontal"
import SideBar from "../components/commons/menu/SideBar"
import { useGlobalContext } from "../context/context"
import useSize from "../hook/useSize"
import { updateBudget } from "../redux/reducerItinerary"

const ContainerScreen = () => {
    const { context } = useGlobalContext()

    const { isAllScreen } = useSize().size;
    const dispatch = useDispatch()

    useEffect(() => {
        // TODO : verrà rimosso con i salvataggi in db
        // Tiene stabile il budget principale ad ogni refresh pagina
        console.log("eccomi")
        dispatch(updateBudget(localStorage.getItem("budgetSession")))
    }, [])


    return (
        <Container fluid>
            <Row className='gx-4'>
                {!isAllScreen && <SideBar page={context} />}

                <Col xs={12} md={6}>
                    <HeaderImg/>
                    <HeaderDetail/>
                    <Outlet />
                </Col>

                <Cart />
                {isAllScreen && <NavBarOrizzontal />}
            </Row>
        </Container>
    )
}

export default ContainerScreen