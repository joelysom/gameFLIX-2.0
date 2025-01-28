import React, { useState, useEffect } from 'react';
import './EmulatorPlus.module.css';
import GameCards from '../components/GameCards';

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
        console.warn(
          'Threads are disabled as SharedArrayBuffer is not available. Threads requires two headers to be set when sending you html page. See https://stackoverflow.com/a/68630724'
        );
        console.log('Threads are disabled');
      }
    } else {
      console.log('Threads are disabled');
    }
  }, []);

  const handleFileChange = async (e) => {
    const input = e.target;
    const url = input.files[0];
    const parts = input.files[0].name.split('.');

    const core = await getCoreByExtension(parts.pop());

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
    window.EJS_gameName = parts.shift();
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
      fds: 'nes',
      nes: 'nes',
      unif: 'nes',
      unf: 'nes',
      smc: 'snes',
      fig: 'snes',
      sfc: 'snes',
      gd3: 'snes',
      gd7: 'snes',
      dx2: 'snes',
      bsx: 'snes',
      swc: 'snes',
      z64: 'n64',
      n64: 'n64',
      pce: 'pce',
      ngp: 'ngp',
      ngc: 'ngp',
      ws: 'ws',
      wsc: 'ws',
      col: 'coleco',
      cv: 'coleco',
      d64: 'vice_x64sc',
      gba: 'gba',
      gb: 'gb',
      nds: 'nds',
    };

    if (coreMapping[ext]) return coreMapping[ext];

    const coreValues = {
      'Nintendo 64': 'n64',
      'Nintendo Game Boy': 'gb',
      'Nintendo Game Boy Advance': 'gba',
      'Nintendo DS': 'nds',
      'Nintendo Entertainment System': 'nes',
      'Super Nintendo Entertainment System': 'snes',
      'PlayStation': 'psx',
      'Virtual Boy': 'vb',
      'Sega Mega Drive': 'segaMD',
      'Sega Master System': 'segaMS',
      'Sega CD': 'segaCD',
      'Atari Lynx': 'lynx',
      'Sega 32X': 'sega32x',
      'Atari Jaguar': 'jaguar',
      'Sega Game Gear': 'segaGG',
      'Sega Saturn': 'segaSaturn',
      'Atari 7800': 'atari7800',
      'Atari 2600': 'atari2600',
      Arcade: 'arcade',
      'NEC TurboGrafx-16/SuperGrafx/PC Engine': 'pce',
      'NEC PC-FX': 'pcfx',
      'SNK NeoGeo Pocket (Color)': 'ngp',
      'Bandai WonderSwan (Color)': 'ws',
      ColecoVision: 'coleco',
      'Commodore 64': 'vice_x64sc',
      'Commodore 128': 'vice_x128',
      'Commodore VIC20': 'vice_xvic',
      'Commodore Plus/4': 'vice_xplus4',
      'Commodore PET': 'vice_xpet',
    };

    return await new Promise((resolve) => {
      const button = document.createElement('button');
      const select = document.createElement('select');

      Object.keys(coreValues).forEach((type) => {
        const option = document.createElement('option');
        option.value = coreValues[type];
        option.textContent = type;
        select.appendChild(option);
      });

      button.onclick = () => resolve(select[select.selectedIndex].value);
      button.textContent = 'Load game';

      document.getElementById('box').innerHTML = '';
      document.getElementById('box').appendChild(select);
      document.getElementById('box').appendChild(button);
    });
  };

  return (
    <div>
      <div id="top">
        {/* Coloque aqui o conteúdo do topo, se necessário */}
      </div>
  
      {/* Carrossel de game cards */}
      <div id="game-cards-container">
        {/* <GameCards /> */}
      </div>
  
      {/* Área para carregar ROMs manualmente */}
      <div id="file-upload-container">
        <input type="file" id="input" onChange={handleFileChange} />
        Drag ROM file or click here
      </div>
    </div>
  );
};

export default EmulatorPlus;
