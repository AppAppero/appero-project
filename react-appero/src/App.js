import React from "react";
import Home from './screen/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Flight from "./screen/Flight";
import Hotel from "./screen/Hotel";
import Error from "./screen/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flight"
          element={<div style={styleBackground}><Flight /></div>}
        />
        <Route path="/hotel"
          element={<div style={styleBackground}><Hotel /> </div>}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

const colorBackground = "#F7F7F7"
const styleBackground = {
  backgroundColor: `${colorBackground}`
  , paddingBottom: "50px"
}


export default App;
