import SideNav, { NavIcon, NavItem, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import { AiFillCar, AiFillSetting, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { FaHome } from 'react-icons/fa';
import { MdAttractions, MdHotel, MdOutlineFlight } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../context/context';
import useSize from '../hook/useSize';


const SideBar = ({ page }) => {
    const sizeGlobal = useSize()
    const { isMobile } = sizeGlobal.size;
    const { isOpen, setIsOpen } = useGlobalContext()

    const navigate = useNavigate()
    const [currentPage, setCurrentPage] = useState(page);

    const column = isOpen && !isMobile ? 1 : "none";

    return (

        <Col xs={column} sm={column} md={column}>

            <SideNav className={isOpen && !isMobile ?
                "sidenav---sidenav---_2tBP sidenav---expanded---1KdUL" :
                "sidenav---sidenav---_2tBP sidenav---collapsed---LQDEv"}
                style={{ background: "white", position: "fixed" }}
                onSelect={(selected) => {
                    linksSideBar.map(el => {
                        if (selected === el.name) {
                            setCurrentPage(selected)
                            navigate(el.path)
                        }
                    })
                }}
            >
                <button role="button"
                    onClick={() => {
                        setIsOpen(!isOpen)
                        if (isOpen && !isMobile)
                            setIsOpen(false)
                    }}
                    className="sidenav---sidenav-toggle---1KRjR"
                    aria-expanded={isOpen}>
                    {
                        (!isOpen || isMobile) ? <AiOutlineMenu /> : <AiOutlineClose />
                    }
                </button>
                <SideNav.Nav defaultSelected={currentPage}>
                    {
                        linksSideBar.map((el, index) => (
                            <NavItem key={index} eventKey={el.name}>
                                <NavIcon>
                                    {el.icon}
                                </NavIcon>
                                <NavText style={{ color: `${colorText}` }}>
                                    {el.name}
                                </NavText>
                                {/**Per eventuali sotto pagine 
                                <NavItem eventKey="name/linechart">
                                    <NavText>
                                        Line Chart
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="name/barchart">
                                    <NavText>
                                        Bar Chart
                                    </NavText>
                                </NavItem>*/}
                            </NavItem>
                        ))
                    }
                </SideNav.Nav>
                <SideNav.Nav style={footerStyle} expanded={isOpen}>

                    <NavItem eventKey="Impostazioni">
                        <NavIcon>
                            <AiFillSetting color={colorIcon} size={sizeIcon} />
                        </NavIcon>
                        <NavText style={{ color: `${colorText}` }}>
                            Impostazioni
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="LogOut">
                        <NavIcon>
                            <BiLogOut color={colorIcon} size={sizeIcon} />
                        </NavIcon>
                        <NavText style={{ color: `${colorText}` }}>
                            LogOut
                        </NavText>
                    </NavItem>

                </SideNav.Nav>
            </SideNav>
        </Col>

    )
}


const colorIcon = "blue";
const sizeIcon = 22;
const colorText = "#141414";


const linksSideBar =
    [
        {
            name: "Home",
            icon: <FaHome color={colorIcon} size={sizeIcon} />,
            path: "/"
        },
        {
            name: "Voli",
            icon: <MdOutlineFlight color={colorIcon} size={sizeIcon} />,
            path: "/flight"
        },
        {
            name: "Hotel",
            icon: <MdHotel color={colorIcon} size={sizeIcon} />,
            path: "/hotel"
        },
        {
            name: "Noleggio",
            icon: <AiFillCar color={colorIcon} size={sizeIcon} />,
            path: "*"
        },
        {
            name: "Attrazioni",
            icon: <MdAttractions color={colorIcon} size={sizeIcon} />,
            path: "*"
        }
    ]

const footerStyle = {
    position: 'absolute',
    bottom: 40,
};


export default SideBar
