import React from "react";
import FormElement from "../components/home/FormElement";
import Navbar from "../components/home/NavBar";
import SuggestedTravel from "../components/home/SuggestedTravel";
import right from "../images/right.svg";
import left from "../images/left.svg";
import { useGlobalContext } from "../context/context";

const Home = () => {

  const { isMobile } = useGlobalContext()

  return (
    <div style={containerStyle}>

      {/* NavBar  */}
      <Navbar />

      <div style={imageContainerStyle}>
        <img
          src={left}
          alt="left"
          className="img-fluid"
          style={imgLeftStyle}
        />
        <img
          src={right}
          alt="right"
          className="img-fluid"
          style={imgRightStyle}
        />
      </div>

      {/* Viaggi suggeriti */}
      <SuggestedTravel isMobile={isMobile} />

      {/* Form di ricerca */}
      <FormElement isMobile={isMobile} />
    </div>

  );
}

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%", // Larghezza al 100% dello schermo
  height: "100vh", // Altezza al 100% dello schermo
  position: "absolute", // Posizionamento assoluto per coprire tutto lo schermo
};

const imageContainerStyle = {
  position: "relative",
  width: "100%",
  height: "100%",
};


const styleImg = {
  height: "100%",
  position: "absolute",
  top: 0,
  right: 0,
  objectFit: "cover",
  borderRadius: "10px"
}

const imgLeftStyle = {
  width: "100%",
  ...styleImg
};

const imgRightStyle = {
  width: "55%",
  zIndex: 2,
  ...styleImg
};




/**
const styleHome = {
  backgroundImage: `url('${bg}')`,
  backgroundSize: "cover",
  backgroundPosition: "center", // Sposta l'immagine più a sinistra
  width: "100%", // Larghezza al 100% dello schermo
  height: "100vh", // Altezza al 100% dello schermo
  position: "absolute", // Posizionamento assoluto per coprire tutto lo schermo
  //opacity: 1.1, // Opacità desiderata
};
 */
export default Home;
