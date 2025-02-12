import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Styles/SelectUser.css";

const SelectUser = () => {
  const [profiles, setProfiles] = useState([]);
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulação de usuário logado (substituir pelo login real)
    const loggedUserId = localStorage.getItem("userId");
    if (!loggedUserId) {
      navigate("/login");
      return;
    }
    setUserId(loggedUserId);

    // Buscar perfis do usuário após o login
    axios.get(`http://localhost:5000/profiles/${loggedUserId}`)
      .then((response) => {
        // Garantir que os dados sejam definidos
        setProfiles(response.data || []);
      })
      .catch((error) => console.error("Erro ao buscar perfis", error));
  }, [navigate]);

  const handleAddProfile = () => {
    const profileName = prompt("Digite o nome do perfil:");
    if (!profileName) return;

    const profilePicture = `/avatars/user_${profiles.length}.png`;

    axios.post("http://localhost:5000/profiles", {
      userId,
      profile_name: profileName, // Alterado para 'profile_name' (com underscore)
      profile_picture: profilePicture // Alterado para 'profile_picture' (com underscore)
    }).then((response) => {
      setProfiles([...profiles, { id: response.data.id, profile_name: profileName, profile_picture: profilePicture }]);
    }).catch((error) => {
      console.error("Erro ao criar perfil", error);
    });
  };

  const handleSelectProfile = (profile) => {
    localStorage.setItem("selectedProfile", JSON.stringify(profile));
    navigate("/EmulatorPlus");
  };

  const handleDeleteProfile = (profileId) => {
    // Confirmação antes de deletar o perfil
    if (window.confirm("Você tem certeza que deseja deletar este perfil?")) {
      axios.delete(`http://localhost:5000/profiles/${profileId}`)
        .then(() => {
          // Atualiza o estado removendo o perfil deletado
          setProfiles(profiles.filter((profile) => profile.id !== profileId));
        })
        .catch((error) => {
          console.error("Erro ao deletar perfil", error);
        });
    }
  };

  return (
    <div className="select-user-container">
      <h2>Selecione um perfil</h2>
      <div className="profiles-grid">
        {profiles.length > 0 ? (
          profiles.map((profile) => (
            <div key={profile.id} className="profile-card">
              <img 
                src={profile.profile_picture} 
                alt={profile.profile_name} 
                onClick={() => handleSelectProfile(profile)} 
              />
              <p>{profile.profile_name}</p>
              <button 
                className="delete-btn" 
                onClick={() => handleDeleteProfile(profile.id)}
              >
                Excluir
              </button>
            </div>
          ))
        ) : (
          <p>Nenhum perfil encontrado. Crie um novo!</p>
        )}
        {profiles.length < 5 && (
          <div className="profile-card add-profile" onClick={handleAddProfile}>
            <img src="/avatars/plus.png" alt="Adicionar perfil" />
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectUser;
