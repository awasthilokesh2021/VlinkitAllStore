// src/App.jsx
import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Dairyproduct from "./components/pages/Dairyproduct";
import Cardpage from "./components/Card/Cardpage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Dairyproduct />} />
        <Route path="/cart" element={<Cardpage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
