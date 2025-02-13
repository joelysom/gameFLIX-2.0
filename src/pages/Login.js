import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Styles/Login.css";

/**
 * Componente de Login da aplicação.
 * Permite que o usuário faça login, escute música de fundo e visualize um vídeo de introdução.
 * 
 * @returns {JSX.Element} O formulário de login com áudio e vídeo de fundo.
 */
const Login = () => {
  const [email, setEmail] = useState(""); // Armazena o e-mail do usuário
  const [password, setPassword] = useState(""); // Armazena a senha do usuário
  const [error, setError] = useState(""); // Armazena mensagens de erro, caso haja
  const [isAudioPlaying, setIsAudioPlaying] = useState(false); // Controle se o áudio está tocando
  const [isIntroVideoVisible, setIsIntroVideoVisible] = useState(false); // Controle se o vídeo de introdução é visível
  const navigate = useNavigate();

  /**
   * Função chamada quando o usuário tenta fazer login.
   * Envia uma requisição para o servidor para validar o login.
   * Caso o login seja bem-sucedido, exibe o vídeo de introdução.
   */
  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      if (response.status === 200) {
        setIsIntroVideoVisible(true); // Exibe o vídeo após o login bem-sucedido
        // Redireciona após o vídeo terminar
        setTimeout(() => {
          localStorage.setItem("userId", response.data.userId); // Correção aqui
          navigate("/select-user");
        }, 7000);// Ajuste o tempo conforme a duração do seu vídeo
      }
    } catch (err) {
      setError("Usuário ou senha incorretos.");
    }
  };

  /**
   * Função para reproduzir a música de fundo ao ser chamada.
   * Altera o estado de `isAudioPlaying` para true.
   */
  const handleAudioPlay = () => {
    const audio = document.getElementById("background-audio");
    if (audio) {
      audio.play();
      setIsAudioPlaying(true);
    }
  };

  /**
   * Redireciona o usuário para a página de cadastro.
   */
  const handleCadastroRedirect = () => {
    navigate("/Cadastro");
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

      {/* Vídeo de introdução */}
      {isIntroVideoVisible && (
        <div className="intro-video-overlay">
          <video className="intro-video" autoPlay>
            <source src="./intro.mp4" type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  );
};

export default Login;
