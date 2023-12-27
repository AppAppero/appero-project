import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import FormElement from "../components/home/form/FormElement";
import NavbarHome from "../components/home/NavBarHome";
import SuggestedTravel from "../components/home/SuggestedTravel";
import useSize from "../hook/useSize";
import useTitle from "../hook/useTitle";
import bg from "../images/bg.png";
import { useGlobalContext } from "../context/context";
import axios from "axios";

const Home = () => {
  useTitle("Home")

  const sizeGlobal = useSize("container")
  const { reset } = useGlobalContext()

  useEffect(() => {
    reset()
  }, [])

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

  const click = async () => {
    let response = await axios.get("travel-search-provider.eu-south-1.elasticbeanstalk.com/api/test")
    console.log(response)
  }

  return (
    <Container id="container" fluid style={containerStyle}>

      {/* NavBar  */}
      <NavbarHome />
      <button onClick={click}>
        Testssssssssssssssssssssssssssssssss
      </button>

      {/* Viaggi suggeriti */}
      <SuggestedTravel sizeGlobal={sizeGlobal} />


      {/* Form di ricerca */}
      <FormElement sizeGlobal={sizeGlobal} />

    </Container>
  );
}

export default Home;
