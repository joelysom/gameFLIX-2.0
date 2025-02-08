import React from "react";
import "./Creditos.css";

/**
 * Componente de créditos do projeto.
 * 
 * Este componente exibe as informações de créditos para os desenvolvedores, design e música do projeto.
 * Ele inclui o título, informações detalhadas sobre as contribuições de cada pessoa, e o aviso de copyright.
 *
 * @returns {JSX.Element} Componente renderizado com informações de créditos.
 */
const Creditos = () => {
  return (
    <div className="creditos-container">
      <div className="creditos-box">
        <h1 className="creditos-title">Créditos</h1>
        <p className="creditos-text">Este projeto foi desenvolvido por: Joelysom & João</p>
        
        {/* Lista de contribuições de cada pessoa no projeto */}
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

        {/* Rodapé com o copyright */}
        <div className="creditos-footer">
          <p className="creditos-copy">© {new Date().getFullYear()} Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  );
};

export default Creditos;
