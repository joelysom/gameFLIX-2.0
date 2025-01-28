// components/Navbar.js
import "./NavbarComponent.css";
import React from "react";
import titleImage from "../assets/title.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={titleImage} alt="Title" className="logo" />
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/EmulatorPlus">Emulador+</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

