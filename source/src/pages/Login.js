import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      if (response.status === 200) {
        navigate("/EmulatorPlus");
      }
    } catch (err) {
      setError("Usuário ou senha incorretos.");
    }
  };

  const handleAudioPlay = () => {
    const audio = document.getElementById("background-audio");
    if (audio) {
      audio.play();
      setIsAudioPlaying(true);
    }
  };

  const handleCadastroRedirect = () => {
    navigate("/cadastro");
  };

  return (
    <div className="login-container">
      <video className="background-video" autoPlay loop muted>
        <source src="/loginbg.mp4" type="video/mp4" />
      </video>
      <audio id="background-audio" loop>
        <source src="/popular.mp3" type="audio/mp3" />
      </audio>
      {!isAudioPlaying && (
        <button className="play-audio-button" onClick={handleAudioPlay}>
          Reproduzir Música
        </button>
      )}
      <img src="/title.png" alt="Título" className="title-image" />
      <div className="login-box">
        <h2>LOGIN</h2>
        <input
          type="text"
          placeholder="E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
        <div className="login-buttons">
          <button onClick={handleLogin}>Entrar</button>
          <button onClick={handleCadastroRedirect}>Cadastrar</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
