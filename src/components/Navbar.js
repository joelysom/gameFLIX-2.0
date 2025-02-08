// components/Navbar.js

// Importa o arquivo CSS para a estilização do componente
import "./NavbarComponent.css";
// Importa o React para criar o componente
import React from "react";
// Importa a imagem do título que será usada no logo da navbar
import titleImage from "../assets/title.png";
// Importa a imagem de logout que será usada no botão de logout
import logoutImage from "../assets/logout.png";

/**
 * Componente Navbar que renderiza uma barra de navegação com um logo, botão de logout, 
 * e links para outras páginas como DEMO e EMULADOR+.
 * @returns {JSX.Element} Componente Navbar renderizado.
 */
const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Exibe a imagem do título com a classe logo */}
      <img src={titleImage} alt="Title" className="logo" />
      {/* Lista de links de navegação */}
      <ul className="nav-links">
        {/* Link de Logout, com a imagem de logout */}
        <li>
          <a href="/">
            <img src={logoutImage} alt="Logout" className="logout-button" />
          </a>
        </li>
        {/* Link para a página de DEMO */}
        <li><a href="/CustomRom">DEMO</a></li>
        {/* Link para a página do EMULADOR+ */}
        <li><a href="/EmulatorPlus">EMULADOR+</a></li>
      </ul>
    </nav>
  );
};

// Exporta o componente Navbar para ser usado em outros arquivos
export default Navbar;
