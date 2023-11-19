import SideNav, { NavIcon, NavItem, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../../context/context';
import useSize from '../../../hook/useSize';
import { linksMenu } from '../../../utils/links';
import '../../../css/sidebar.css';


const SideBar = ({ page }) => {
    const { params } = useLocation().state
    const sizeGlobal = useSize()
    const { isMobile } = sizeGlobal.size;
    const { isOpen, setIsOpen } = useGlobalContext()

    const navigate = useNavigate()
    const [currentPage, setCurrentPage] = useState(page);

    const sidebarClasses = `sidenav---sidenav---_2tBP ${isOpen && !isMobile
        ? "sidenav---expanded---1KdUL"
        : "sidenav---collapsed---LQDEv"
        } ${isOpen && isMobile ? "mobile-sidebar" : ""}`;

    return (

        <Col xs={2}>

            <SideNav className={sidebarClasses}
                style={{ background: "white", position: "fixed" }}
                onSelect={(selected) => {
                    linksMenu().linksTop.map(el => {
                        if (selected === el.name) {
                            setCurrentPage(selected)
                            navigate(el.path, { state: { params } })
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
                        linksMenu().linksTop.map((el, index) => (
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
                <SideNav.Nav
                    className="position-absolute bottom-0 end-0 mb-4"
                    expanded={isOpen}>
                    {
                        linksMenu().linksFooter.map((el, index) => (
                            <NavItem key={index} eventKey={el.name}>
                                <NavIcon>
                                    {el.icon}
                                </NavIcon>
                                <NavText style={{ color: `${colorText}` }}>
                                    {el.name}
                                </NavText>
                            </NavItem>
                        ))
                    }
                </SideNav.Nav>
            </SideNav>
        </Col>

    )
}
const colorText = "#141414";

export default SideBar
