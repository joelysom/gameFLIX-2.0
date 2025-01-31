import React, { useState, useEffect } from 'react';
import './EmulatorPlus.module.css';

const EmulatorPlus = () => {
  const [enableDebug, setEnableDebug] = useState(false);
  const [enableThreads, setEnableThreads] = useState(false);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    if (urlParams.get('debug') === '1') {
      setEnableDebug(true);
      console.log('Debug is enabled');
    } else {
      console.log('Debug is disabled');
    }

    if (urlParams.get('threads') === '1') {
      if (window.SharedArrayBuffer) {
        setEnableThreads(true);
        console.log('Threads are enabled');
      } else {
        console.warn('Threads are disabled as SharedArrayBuffer is not available.');
        console.log('Threads are disabled');
      }
    } else {
      console.log('Threads are disabled');
    }
  }, []);

  const handleMouseEnter = (image) => {
    const backgroundDiv = document.getElementById('background');
    backgroundDiv.style.backgroundImage = `url(${image})`;
    backgroundDiv.style.backgroundSize = 'cover';
    backgroundDiv.style.backgroundPosition = 'center';
    backgroundDiv.style.filter = 'blur(8px)';
  };

  const handleMouseLeave = () => {
    const backgroundDiv = document.getElementById('background');
    backgroundDiv.style.backgroundImage = '';
    backgroundDiv.style.filter = '';
  };

  const handleFileChange = async (e) => {
    const input = e.target;
    const url = input.files[0];
    const parts = input.files[0].name.split('.');
    const core = await getCoreByExtension(parts.pop());

    setupGameEnvironment(url, parts.shift(), core);
  };

  const handleAutoLoad = async (romUrl) => {
    console.log(`Auto-loading ROM: ${romUrl}`);
    const parts = romUrl.split('.');
    const core = await getCoreByExtension(parts.pop());
    setupGameEnvironment(romUrl, parts.shift(), core);
  };

  const setupGameEnvironment = (url, gameName, core) => {
    const div = document.createElement('div');
    const sub = document.createElement('div');
    const script = document.createElement('script');

    sub.id = 'game';
    div.id = 'display';

    document.getElementById('top')?.remove();
    document.getElementById('box')?.remove();

    div.appendChild(sub);
    document.body.appendChild(div);

    window.EJS_player = '#game';
    window.EJS_gameName = gameName;
    window.EJS_biosUrl = '';
    window.EJS_gameUrl = url;
    window.EJS_core = core;
    window.EJS_pathtodata = 'data/';
    window.EJS_startOnLoaded = true;
    window.EJS_DEBUG_XX = enableDebug;
    window.EJS_disableDatabases = true;
    window.EJS_threads = enableThreads;

    script.src = './data/loader.js';
    document.body.appendChild(script);
  };

  const getCoreByExtension = async (ext) => {
    const coreMapping = {
      fds: 'nes', nes: 'nes', smc: 'snes', sfc: 'snes', z64: 'n64',
      n64: 'n64', pce: 'pce', ngp: 'ngp', ws: 'ws', gba: 'gba',
      gb: 'gb', nds: 'nds', col: 'coleco', d64: 'vice_x64sc', bin: 'psx'
    };

    if (coreMapping[ext]) return coreMapping[ext];

    return new Promise((resolve) => {
      const button = document.createElement('button');
      const select = document.createElement('select');
      const coreValues = {
        'Nintendo 64': 'n64', 'Game Boy': 'gb', 'GBA': 'gba', 'NDS': 'nds',
        'NES': 'nes', 'SNES': 'snes', 'PlayStation': 'psx', 'Sega Genesis': 'segaMD'
      };

      Object.keys(coreValues).forEach((type) => {
        const option = document.createElement('option');
        option.value = coreValues[type];
        option.textContent = type;
        select.appendChild(option);
      });

      button.onclick = () => resolve(select.value);
      button.textContent = 'Load game';
      document.getElementById('box').innerHTML = '';
      document.getElementById('box').append(select, button);
    });
  };

  const handleButtonClick = (romUrl) => {
    console.log(`Loading game from URL: ${romUrl}`);
    handleAutoLoad(romUrl);
  };

  return (
    <div>
      <div id="top"></div>
      <div id="background" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}></div>
      <div id="box">
        <div className="games-container">
          {games.map((game, index) => (
            <div
              key={index}
              className="game-card"
              onClick={() => handleButtonClick(game.romUrl)}
              onMouseEnter={() => handleMouseEnter(game.gif || game.image)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={game.image}
                alt={game.title}
                className="game-image"
              />
              <div className="game-title">{game.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const games = [
  { title: 'Pokémon FireRed (GBA)', romUrl: './roms/firered.gba', image: '/firered.jpeg', gif: '/firered.gif' },
  { title: 'Final Fantasy Tactics Advance (GBA)', romUrl: './roms/finalfantasytacticsadvance.gba', image: '/finalfantasytacticsadvance.jpeg', gif: '/finalfantasytacticsadvance.gif' },
  { title: 'Street Fighter Alpha 3 (GBA)', romUrl: './roms/StreetFA2.gba', image: '/Streetfighter3.jpg', gif: '/street.gif' },
  { title: 'Kirby Nightmare in Dream Land (GBA)', romUrl: './roms/kirbynightmareindreamland.gba', image: '/kirbynightmareindreamland.jpeg',gif: '/kirbynightmareindreamland.gif' },
  { title: 'Super Mario 64 (N64)', romUrl: './roms/mario64.n64', image: '/mario64.jpg', gif: '/mario64.gif' },
  { title: 'Pokemon Black (NDS)', romUrl: './roms/pokemonblack.nds', image: '/pokemonblack.jpg', gif: '/pokemonblack.gif' },
  { title: 'Legend of Zelda Ocarina of Time (N64)', romUrl: './roms/LegendOfZeldaOcarinaOfTime64.n64', image: '/LegendOfZeldaOcarinaOfTime64.jpg', gif: '/LegendOfZeldaOcarinaOfTime64.gif' },
  { title: 'Mis adventures of TronBonne (Playstation)', romUrl: './roms/MisadventuresofTronBonne/MisadventuresofTronBonne.bin', image: '/MisadventuresofTronBonne.jpg', gif: '/MisadventuresofTronBonne.gif' },
  { title: 'Mega Man Legends 2 (Playstation)', romUrl: './roms/Mega Man Legends 2/Mega Man Legends 2(Track 1).bin', image: '/Mega Man Legends 2.jpg', gif: '/MegaManLegends2.gif' }
];

export default EmulatorPlus;
