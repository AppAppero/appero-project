import { Link } from 'react-router-dom';
import logo from "../../images/logo.svg";
import links from "../../utils/linksNavBar";
import PopUpCurrency from '../currency/PopUpCurrency';

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark p-0"
            style={navbarStyle}>
            <div className="container-fluid">
                <img src={logo}
                    alt="logo"
                    className="navbar-brand" />

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
                            links.map((el, index) => {
                                return (
                                    <li className='nav-item mt-1'
                                        key={index}>
                                        <Link style={{
                                            color: "white",
                                            fontSize: "15px",
                                            fontWeight: "bold",
                                            marginLeft: "30px"
                                        }}
                                            className="nav-link"
                                            to={el.path}
                                        >
                                            {el.name}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                        <li className="nav-item mt-1"
                            style={{ marginLeft: "30px", fontSize: "15px", fontWeight: "bold" }}>
                            <button className="btn btn-md btn-outline-light">Login</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


const navbarStyle = {
    width: "100%",
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)',
    background: 'rgba(0, 0, 0, 0.5)' /* Grigio più chiaro con trasparenza al 50% */
};


export default Navbar;