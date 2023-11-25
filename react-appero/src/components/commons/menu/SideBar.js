import SideNav, { NavIcon, NavItem, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import React from 'react';
import { Col } from 'react-bootstrap';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../../context/context';
import '../../../css/sidebar.css';
import useSize from '../../../hook/useSize';
import { linksMenu } from '../../../utils/links';


const SideBar = () => {

    const sizeGlobal = useSize()
    const { isMobile } = sizeGlobal.size;
    const { isOpen, setIsOpen, setContext, context } = useGlobalContext()

    const navigate = useNavigate()

    const sidebarClasses = `bg-white position-fixed sidenav---sidenav---_2tBP ${isOpen && !isMobile
        ? "sidenav---expanded---1KdUL"
        : "sidenav---collapsed---LQDEv"
        } ${isOpen && isMobile ? "mobile-sidebar" : ""}`;

    return (

        <Col xs={2}>

            <SideNav className={sidebarClasses} onSelect={(selected) => {
                linksMenu().linksTop.map(el => {
                    if (selected === el.name) {
                        setContext(selected)
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
                <SideNav.Nav defaultSelected={context}>
                    {
                        linksMenu().linksTop.map((el, index) => (
                            <NavItem key={index} eventKey={el.name}>
                                <NavIcon>
                                    {el.icon}
                                </NavIcon>
                                <NavText style={{ color: `${colorText}` }}>
                                    {el.title}
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
                                    {el.title}
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
