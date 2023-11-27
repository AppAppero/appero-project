import React from "react";
import { Container, Row } from "react-bootstrap";
import FormElement from "../components/home/FormElement";
import NavbarHome from "../components/home/NavBarHome";
import SuggestedTravel from "../components/home/SuggestedTravel";
import useSize from "../hook/useSize";
import useTitle from "../hook/useTitle";
import bg from "../images/bg.png";

const Home = () => {
  useTitle("Home")

  const sizeGlobal = useSize("container")

  const containerStyle = {
    paddingBottom: "40px",
    margin: "0",
    backgroundImage: `url('${bg}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
    minHeight: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.4)"
  };

  return (
    <Container id="container" fluid style={containerStyle}>

      {/* NavBar  */}
      <NavbarHome />

      {/* Viaggi suggeriti */}
      <SuggestedTravel sizeGlobal={sizeGlobal} />


      {/* Form di ricerca */}
      <FormElement sizeGlobal={sizeGlobal} />

    </Container>
  );
}

export default Home;
