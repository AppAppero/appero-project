import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Attraction from "./screen/Attraction";
import ContainerScreen from "./screen/ContainerScreen";
import Error from "./screen/Error";
import Flight from "./screen/Flight";
import Home from './screen/Home';
import Hotel from "./screen/Hotel";
import Render from "./screen/Render";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div style={{ ...styleBackground, backgroundColor: "", paddingBottom: "" }}><Home /></div>} />
        <Route path="/travel" element={<div style={styleBackground}><ContainerScreen /></div>}>
          <Route path="/travel/flight" element={<Flight />} />
          <Route path="/travel/hotel" element={<Hotel />} />
          <Route path="/travel/render" element={<Render />} />
          <Route path="/travel/attraction" element={<Attraction />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter >
  );
}

const colorBackground = "#F7F7F7"
const styleBackground = {
  backgroundColor: `${colorBackground}`,
  paddingBottom: "150px",
  fontFamily: 'Montserrat, sans-serif',
  color: "#141414"
}


export default App;
