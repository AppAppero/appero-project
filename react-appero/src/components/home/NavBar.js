import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../images/logo.svg";
import { linksNavBar } from '../../utils/links';
import PopUpCurrency from '../currency/PopUpCurrency';

const Navbar = () => {

    return (
        <Row>
            <nav className="navbar navbar-expand-md navbar-dark p-0 w-100 shadow-lg" style={{ background: 'rgba(0, 0, 0, 0.5)' }}>
                <div className="container-fluid">
                    <img src={logo}
                        alt="logo"
                        className="navbar-brand" />

                    {/* Modal change currency */}
                    <PopUpCurrency />

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            {
                                linksNavBar.map((el, index) => {
                                    return (
                                        <li className='nav-item mt-1 fw-bold ms-3'
                                            key={index}>
                                            <Link style={{ fontSize: "15px", color: "white" }}
                                                className="nav-link"
                                                to={el.path}
                                            >
                                                {el.name}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                            <li className="nav-item mt-1 fs-bold ms-3" style={{ fontSize: "15px" }}>
                                <button className="btn btn-md btn-outline-light">Login</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Row>
    )
}
export default Navbar;