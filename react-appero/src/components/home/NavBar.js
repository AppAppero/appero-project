import logo from "../../images/logo.svg";
import links from "../../utils/linksNavBar";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={navbarStyle}>
            <div className="container">
                <img src={logo}
                    alt="logo"
                    className="navbar-brand" />
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
                                            fontSize: "22px",
                                            fontWeight: "bold",
                                            marginLeft: "50px"
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
                        <li className="nav-link"
                            style={{ marginLeft: "50px", fontSize: "22px", fontWeight: "bold" }}>
                            <button className="btn btn-lg btn-outline-light">Explore</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


const navbarStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 4,
    backgroundColor: "transparent",
};


export default Navbar;