import logo from "./logo.svg";
import "./App.css";
import LOGOPRINTY from "./assets/images/LOGOPRINTY.svg";
import PRINTYPLANET from "./assets/images/PRINTYPLANET.svg";
import centralLogo from "./assets/images/centralLogo.png";
import CADDIE from "./assets/images/CADDIE.svg";
import MONTRE from "./assets/images/MONTRE.svg";
import CLICK from "./assets/images/CLICK.svg";
import LOCAL from "./assets/images/LOCAL.png";
import CARROUSSEL1 from "./assets/images/carroussel.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./containers/Home";
import Affiche from "./containers/Affiche";
import React, { useState } from "react";
import CartContext from "./CartContext.js";

function App() {
  const [cart, setCart] = useState([]);

  const cartObj = { cart, setCart };

  return (
    <CartContext.Provider value={cartObj}>
      <Router>
        <Routes>
          <Route path="/affiche" element={<Affiche />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
