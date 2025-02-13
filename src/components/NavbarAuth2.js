// components/Navbar.js

// Importa o arquivo CSS para a estilização do componente
import "./Styles/NavbarComponent.css";
// Importa o React para criar o componente
import React from "react";
// Importa a imagem do título que será usada no logo da navbar
import titleImage from "../assets/title.png";

/**
 * Componente Navbar que renderiza uma barra de navegação com um logo e links.
 * @returns {JSX.Element} Componente Navbar renderizado.
 */
const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Exibe a imagem do título com a classe logo */}
      <img src={titleImage} alt="Title" className="logo" />
      {/* Lista de links de navegação */}
      <ul className="nav-links">
      </ul>
    </nav>
  );
};

// Exporta o componente Navbar para ser usado em outros arquivos
export default Navbar;
