import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dairyproduct from "./components/pages/Dairyproduct";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Dynamic route for each product */}
        <Route path="/product/:id" element={<Dairyproduct />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

