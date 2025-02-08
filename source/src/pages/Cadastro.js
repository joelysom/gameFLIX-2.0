import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Cadastro.css";

const Cadastro = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    birthdate: "",
    email: "",
    plan: "Básico",
    nostalgia: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    if (step === 1 && (!formData.name || !formData.password)) {
      setError("Preencha todos os campos.");
      return;
    }
    if (step === 2) {
      const birthYear = new Date(formData.birthdate).getFullYear();
      const currentYear = new Date().getFullYear();
      if (currentYear - birthYear < 18) {
        setError("Você precisa ter pelo menos 18 anos.");
        return;
      }
      if (!formData.email) {
        setError("Preencha o campo de e-mail.");
        return;
      }
    }
    setError("");
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:5000/register", formData);
      setStep(4);  // Alterando para mostrar a tela final
    } catch (err) {
      setError("Erro ao cadastrar. Verifique seus dados.");
    }
  };

  return (
    <div className="cadastro-container">
      <img className="background-image" src="/backgroundRegistro.jpg" alt="Background de Cadastro" />
      {step === 1 && (
        <div className="step">
          <img className="step-image" src="/STEP1.png" alt="Passo 1" />
          <div className="step-content">
            <h2>Etapa 1: Dados Pessoais</h2>
            <input
              type="text"
              placeholder="Nome"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="password"
              placeholder="Senha"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            {error && <p className="error">{error}</p>}
            <button onClick={handleNext}>Próximo</button>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="step">
          <img className="step-image" src="/STEP2.png" alt="Passo 2" />
          <div className="step-content">
            <h2>Etapa 2: Informações Adicionais</h2>
            <input
              type="date"
              value={formData.birthdate}
              onChange={(e) => setFormData({ ...formData, birthdate: e.target.value })}
            />
            <input
              type="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <select
              value={formData.plan}
              onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
            >
              <option value="Básico">Básico</option>
              <option value="Plus">Plus</option>
              <option value="Gold">Gold</option>
              <option value="Diamond">Diamond</option>
            </select>
            {error && <p className="error">{error}</p>}
            <button onClick={handleBack}>Voltar</button>
            <button onClick={handleNext}>Próximo</button>
          </div>
        </div>
      )}
      {step === 3 && (
        <div className="step">
          <img className="step-image" src="/STEP3.png" alt="Passo 3" />
          <div className="step-content">
            <h2>Etapa 3: Nostalgia</h2>
            <textarea
              placeholder="Fale um pouco sobre sua nostalgia..."
              value={formData.nostalgia}
              onChange={(e) => setFormData({ ...formData, nostalgia: e.target.value })}
            />
            <button onClick={handleBack}>Voltar</button>
            <button onClick={handleSubmit}>Concluir</button>
          </div>
        </div>
      )}
      {step === 4 && (
        <div className="step">
          <img className="step-image" src="/STEPFINAL.png" alt="Cadastro Finalizado" />
          <div className="step-content">
            <h2>Parabéns, Cadastro Realizado!</h2>
            <button onClick={() => navigate("/")}>Continuar para Área de Login</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cadastro;
