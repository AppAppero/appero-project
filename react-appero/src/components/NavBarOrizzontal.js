import React from 'react';
import { Col, Nav, Navbar } from 'react-bootstrap';
import { AiFillCar } from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';
import { MdAttractions, MdHotel, MdOutlineFlight } from 'react-icons/md';

const NavBarOrizzontal = () => {
  return (
    <Navbar
      expand="xl"
      bg="white"
      variant="light"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        zIndex: 1000, 
        height:"80px",
        padding:"10px"
      }}
    >
    
        {
          linksSideBar.map((el, index) => (
            <Col key={index}>
              <Nav.Link href={el.path}>{el.icon}</Nav.Link>
            </Col>
          )
          )
        }
    </Navbar>
  );
};

const colorIcon = "blue";
const sizeIcon = 22;


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

export default NavBarOrizzontal;
