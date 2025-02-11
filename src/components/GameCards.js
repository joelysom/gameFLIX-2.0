import React, { useState } from 'react';
// Importa o arquivo de estilo para os cards de jogos (caso seja necessário)
import './Styles/GameCards.module.css';

const GameCards = () => {
  // Estado que controla se o jogo foi carregado ou não
  const [gameLoaded, setGameLoaded] = useState(false);

  /**
   * Função chamada ao carregar o jogo. 
   * Ela configura a ROM e o emulador, cria elementos DOM necessários e carrega o jogo.
   */
  const handleGameLoad = async () => {
    const romUrl = './roms/firered.gba'; // Caminho para a ROM do FireRed
    const core = 'gba'; // Core utilizado (para GBA)

    // Criação de elementos DOM para a exibição do jogo
    const div = document.createElement('div');
    const sub = document.createElement('div');
    const script = document.createElement('script');

    sub.id = 'game';
    div.id = 'display';

    // Remove elementos existentes (como top e box) para renderizar o jogo
    const top = document.getElementById('top');
    top.remove();
    document.getElementById('box').remove();

    // Adiciona os novos elementos criados à página
    div.appendChild(sub);
    document.body.appendChild(div);

    // Configuração das variáveis globais do EmulatorJS para carregar o jogo
    window.EJS_player = '#game';
    window.EJS_gameName = 'Firered';
    window.EJS_biosUrl = ''; // URL do BIOS, se necessário
    window.EJS_gameUrl = romUrl;
    window.EJS_core = core;
    window.EJS_pathtodata = 'data/';
    window.EJS_startOnLoaded = true;
    window.EJS_DEBUG_XX = true;  // Habilita o modo de depuração (opcional)
    window.EJS_disableDatabases = true;  // Desativa o uso de bancos de dados
    window.EJS_threads = true;  // Habilita o uso de múltiplos threads

    // Carrega o script que inicializa o jogo
    script.src = './data/loader.js';
    document.body.appendChild(script);

    // Marca o jogo como carregado
    setGameLoaded(true);
  };

  return (
    <div className="game-card-container">
      <div className="game-card">
        {/* Exibe a imagem do jogo FireRed */}
        <img src="./firered.jpeg" alt="FireRed" />
        {/* Botão que carrega o jogo, e exibe "Game Loaded!" após o carregamento */}
        <button onClick={handleGameLoad}>
          {gameLoaded ? 'Game Loaded!' : 'Load FireRed'}
        </button>
      </div>
    </div>
  );
};

export default GameCards;
