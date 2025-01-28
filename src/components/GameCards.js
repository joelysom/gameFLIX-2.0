import React, { useState } from 'react';
import './GameCards.module.css';  // Importar o arquivo de estilo (se necessário)

const GameCards = () => {
  const [gameLoaded, setGameLoaded] = useState(false);

  const handleGameLoad = async () => {
    const romUrl = './roms/firered.gba'; // Defina o caminho para a ROM do FireRed
    const core = 'gba'; // Defina o core para o GBA

    const div = document.createElement('div');
    const sub = document.createElement('div');
    const script = document.createElement('script');

    sub.id = 'game';
    div.id = 'display';

    const top = document.getElementById('top');
    top.remove();
    document.getElementById('box').remove();

    div.appendChild(sub);
    document.body.appendChild(div);

    window.EJS_player = '#game';
    window.EJS_gameName = 'Firered';
    window.EJS_biosUrl = '';
    window.EJS_gameUrl = romUrl;
    window.EJS_core = core;
    window.EJS_pathtodata = 'data/';
    window.EJS_startOnLoaded = true;
    window.EJS_DEBUG_XX = true;
    window.EJS_disableDatabases = true;
    window.EJS_threads = true;

    script.src = './data/loader.js';
    document.body.appendChild(script);
    
    setGameLoaded(true);
  };

  return (
    <div className="game-card-container">
      <div className="game-card">
        <img src="./firered.jpeg" alt="FireRed" />
        <button onClick={handleGameLoad}>
          {gameLoaded ? 'Game Loaded!' : 'Load FireRed'}
        </button>
      </div>
    </div>
  );
};

export default GameCards;
