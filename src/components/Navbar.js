// components/Navbar.js
import "./NavbarComponent.css";
import React from "react";
import titleImage from "../assets/title.png";
import logoutImage from "../assets/logout.png"; // Importa a imagem de logout

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={titleImage} alt="Title" className="logo" />
      <ul className="nav-links">
        <li>
          <a href="/">
            <img src={logoutImage} alt="Logout" className="logout-button" />
          </a>
        </li>
        <li><a href="/CustomRom">DEMO</a></li>
        <li><a href="/EmulatorPlus">EMULADOR+</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
