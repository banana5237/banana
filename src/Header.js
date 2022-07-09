import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Work from "./Work";

const Header = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={`/`} element={<Home />} />
      <Route path={`/About/`} element={<About />} />
      <Route path={`/Work/`} element={<Work />} />
    </Routes>
  </BrowserRouter>
  );
};

export default Header;