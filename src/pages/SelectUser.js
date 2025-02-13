import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Styles/SelectUser.css";
import { UserContext } from "../context/UserContext"; // Importa o contexto

const SelectUser = () => {
  const { selectProfile } = useContext(UserContext); // Usa o contexto
  const [profiles, setProfiles] = useState([]);
  const [userId, setUserId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [newProfileName, setNewProfileName] = useState("");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [profileToDelete, setProfileToDelete] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedUserId = localStorage.getItem("userId");
    if (!loggedUserId) {
      navigate("/login");
      return;
    }
    setUserId(loggedUserId);

    axios.get(`http://localhost:5000/profiles/${loggedUserId}`)
      .then((response) => {
        setProfiles(response.data || []);
      })
      .catch((error) => console.error("Erro ao buscar perfis", error));
  }, [navigate]);

  const handleAddProfile = () => {
    setShowForm(true);
  };

  const handleSubmitProfile = (e) => {
    e.preventDefault();
    if (!newProfileName) return;

    const profilePicture = `/avatars/user_${profiles.length}.png`;

    axios.post("http://localhost:5000/profiles", {
      userId,
      profile_name: newProfileName,
      profile_picture: profilePicture
    }).then((response) => {
      setProfiles([...profiles, { id: response.data.id, profile_name: newProfileName, profile_picture: profilePicture }]);
      setShowForm(false);
      setNewProfileName("");
    }).catch((error) => {
      console.error("Erro ao criar perfil", error);
    });
  };

  const handleSelectProfile = (profile) => {
    selectProfile(profile); // Atualiza o perfil no contexto global
    navigate("/EmulatorPlus");
  };  

  const confirmDeleteProfile = (profile) => {
    setProfileToDelete(profile);
    setShowDeleteConfirm(true);
  };

  const handleDeleteProfile = () => {
    if (profileToDelete) {
      axios.delete(`http://localhost:5000/profiles/${profileToDelete.id}`)
        .then(() => {
          setProfiles(profiles.filter((profile) => profile.id !== profileToDelete.id));
          setShowDeleteConfirm(false);
          setProfileToDelete(null);
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
            <div 
              key={profile.id} 
              className="profile-card" 
              onClick={() => handleSelectProfile(profile)}
              style={{ cursor: "pointer", userSelect: "none" }}
            >
              <img 
                src={profile.profile_picture} 
                alt={profile.profile_name} 
              />
              <p>{profile.profile_name}</p>
              <button 
                className="delete-btn" 
                onClick={(e) => {
                  e.stopPropagation(); 
                  confirmDeleteProfile(profile);
                }}
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
      
      {showForm && (
        <div className="modal-overlay">
          <div className="modal-card">
            <h3>Criar Novo Perfil</h3>
            <form onSubmit={handleSubmitProfile}>
              <input 
                type="text" 
                placeholder="Nome do perfil" 
                value={newProfileName} 
                onChange={(e) => setNewProfileName(e.target.value)}
              />
              <button type="submit">Criar</button>
              <button type="button" onClick={() => setShowForm(false)}>Cancelar</button>
            </form>
          </div>
        </div>
      )}

      {showDeleteConfirm && (
        <div className="modal-overlay">
          <div className="modal-card">
            <h3>Excluir Perfil</h3>
            <p>Tem certeza que deseja excluir "{profileToDelete?.profile_name}"?</p>
            <button className="confirm-btn" onClick={handleDeleteProfile}>Sim, Excluir</button>
            <button className="cancel-btn" onClick={() => setShowDeleteConfirm(false)}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectUser;
