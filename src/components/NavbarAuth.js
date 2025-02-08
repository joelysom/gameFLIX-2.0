// components/Navbar.js
import "./NavbarComponent.css";
import React from "react";
import titleImage from "../assets/title.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={titleImage} alt="Title" className="logo" />
      <ul className="nav-links">
        <li><a href="/">Login</a></li>
        <li><a href="/Cadastro">Cadastro</a></li>
        <li><a href="/Creditos">Creditos</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

