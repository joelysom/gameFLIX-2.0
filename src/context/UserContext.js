import React, { createContext, useState, useEffect } from "react";

// Criar o contexto do usuário
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  // Buscar o perfil do localStorage ao iniciar
  useEffect(() => {
    const storedProfile = localStorage.getItem("selectedProfile");
    if (storedProfile) {
      setSelectedProfile(JSON.parse(storedProfile));
    }
  }, []);

  // Atualizar o localStorage sempre que o perfil mudar
  const selectProfile = (profile) => {
    localStorage.setItem("selectedProfile", JSON.stringify(profile));
    setSelectedProfile(profile);
  };

  // Fazer logout removendo o perfil do localStorage
  const logout = () => {
    localStorage.removeItem("selectedProfile");
    setSelectedProfile(null);
  };

  return (
    <UserContext.Provider value={{ selectedProfile, selectProfile, logout }}>
      {children}
    </UserContext.Provider>
  );
};
