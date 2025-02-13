import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // Importe useNavigate
import "./Styles/NavbarComponent.css";
import titleImage from "../assets/title.png";
import logoutImage from "../assets/logout.png";
import { UserContext } from "../context/UserContext"; 

const Navbar = () => {
  const { selectedProfile, logout } = useContext(UserContext); 
  const [storedProfile, setStoredProfile] = useState(null);
  const navigate = useNavigate(); // Hook para navegação

  useEffect(() => {
    const storedProfile = localStorage.getItem("selectedProfile");
    if (storedProfile) {
      setStoredProfile(JSON.parse(storedProfile));
    }
  }, []);

  const currentProfile = selectedProfile || storedProfile;

  // Lógica para logout e redirecionamento para "/"
  const handleLogout = () => {
    logout();
    navigate("/"); // Redireciona para a página inicial
  };

  return (
    <nav className="navbar">
      <img src={titleImage} alt="Title" className="logo" />
      <ul className="nav-links">
        {currentProfile && (
          <li className="profile-info">
            <img
              src={currentProfile.profile_picture}
              alt={currentProfile.profile_name}
              className="profile-avatar"
            />
            <span>{currentProfile.profile_name}</span>
          </li>
        )}
        <li>
          <button onClick={handleLogout} className="logout-button">
            <img src={logoutImage} alt="Logout" />
          </button>
        </li>
        <li><a href="/CustomRom">DEMO</a></li>
        <li><a href="/EmulatorPlus">EMULADOR+</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
