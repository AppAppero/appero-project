import { Button, Col, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../images/logo.svg";
import { linksNavBar } from '../../utils/links';
import PopUpCurrency from '../currency/PopUpCurrency';
import useSize from '../../hook/useSize'
import { useState } from 'react';
import { SlMenu } from "react-icons/sl";

const NavbarHome = () => {
    const { isAllScreen } = useSize().size
    const [isOpenCollapse, setIsOpenCollapse] = useState(false)

    const valCollapse = "navbar-collapse justify-content-end"
    const a = "d-flex justify-content-between";

    return (
        <Row>
            <nav className="navbar navbar-expand-md navbar-dark p-0 w-100 shadow-lg" style={{ background: 'rgba(0, 0, 0, 0.5)' }}>
                <Col xs={1} className='text-start'>
                    <img src={logo} alt="logo" className="navbar-brand" />
                </Col>

                <Col xs={1}>
                    <PopUpCurrency />
                </Col>

                {isAllScreen &&
                    <>
                        <Col xs={1} className='text-end'><ButtonLogin /></Col>

                        <Col xs={2} className='text-end'>
                            <Button
                                style={{ marginRight: "5px", background: "none" }}
                                onClick={() => setIsOpenCollapse(!isOpenCollapse)} className="navbar-toggler text-light btn-md btn-outline-light">
                                <SlMenu />
                            </Button>
                        </Col>
                    </>
                }

                <Col className={!isOpenCollapse ? "collapse " + valCollapse : valCollapse} id="navbarNav">
                    <ul className="navbar-nav">
                        {
                            linksNavBar.map((el, index) => {
                                return (
                                    <li className='nav-item mt-1 fw-bold ms-2'
                                        key={index}>
                                        <Link style={{ fontSize: "13px", color: "white" }}
                                            className="nav-link"
                                            to={el.path}
                                        >
                                            {el.name}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                        {!isAllScreen && <li className="nav-item mt-1 fs-bold ms-3" style={{ fontSize: "15px", marginRight: "10px" }}>
                            <ButtonLogin />
                        </li>
                        }
                    </ul>
                </Col>

            </nav>
        </Row >
    )

}

const ButtonLogin = () => {
    return <Button className="btn-md btn-outline-light text-light" style={{ background: "none" }}>Login</Button>
}
export default NavbarHome;