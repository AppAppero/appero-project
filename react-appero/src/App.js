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
        <Route path="/flight" element={<Flight />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
