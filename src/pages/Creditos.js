import React from "react";
import "./Creditos.css";

const Creditos = () => {
  return (
    <div className="creditos-container">
      <div className="creditos-box">
        <h1 className="creditos-title">Créditos</h1>
        <p className="creditos-text">Este projeto foi desenvolvido por: Joelysom & João</p>
        
        <div className="creditos-list">
          <div>
            <h2 className="creditos-subtitle">Desenvolvedor:</h2>
            <p className="creditos-name">Joelysom & João</p>
          </div>

          <div>
            <h2 className="creditos-subtitle">Design:</h2>
            <p className="creditos-name">Joelysom</p>
          </div>

          <div>
            <h2 className="creditos-subtitle">Música e Efeitos Sonoros:</h2>
            <p className="creditos-name">Joelysom</p>
          </div>
        </div>

        <div className="creditos-footer">
          <p className="creditos-copy">© {new Date().getFullYear()} Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  );
};

export default Creditos;
