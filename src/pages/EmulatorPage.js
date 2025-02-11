import React, { useState, useRef } from "react";
import "./Styles/EmulatorPage.css";

/**
 * Componente principal para carregar e iniciar o emulador de ROMs.
 * Permite que o usuário carregue arquivos ROM e comece a jogar.
 * 
 * @returns {JSX.Element} O componente do emulador com a interface de carregamento de ROM.
 */
const Emulator = () => {
  // Estado para controlar se o arquivo está sendo arrastado
  const [drag, setDrag] = useState(false);

  // Referência para o input de arquivo
  const inputRef = useRef(null);

  // Estado para saber se o jogo foi carregado
  const [gameLoaded, setGameLoaded] = useState(false);

  /**
   * Manipulador de evento para quando um arquivo é selecionado.
   * Processa o arquivo selecionado, determina o core necessário e carrega o jogo.
   * 
   * @param {Event} event O evento de mudança do arquivo.
   */
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Divide o nome do arquivo para determinar a extensão
    const parts = file.name.split(".");
    const ext = parts.pop();

    // Importa a lógica do emulador dinamicamente e obtém o core apropriado
    const { getCore } = await import("./EmulatorLogic");
    const core = await getCore(ext, parts);

    loadGame(file, core, parts.shift());
  };

  /**
   * Carrega o jogo no emulador com as configurações apropriadas.
   * Define variáveis globais para a emulação e carrega o script do emulador.
   * 
   * @param {File} file O arquivo da ROM que será carregado.
   * @param {string} core O core de emulação a ser utilizado.
   * @param {string} gameName O nome do jogo.
   */
  const loadGame = (file, core, gameName) => {
    setGameLoaded(true);

    // Define variáveis globais para o emulador
    window.EJS_player = "#game";
    window.EJS_gameName = gameName;
    window.EJS_biosUrl = "";
    window.EJS_gameUrl = file;
    window.EJS_core = core;
    window.EJS_pathtodata = "data/";
    window.EJS_startOnLoaded = true;
    window.EJS_DEBUG_XX = false;
    window.EJS_disableDatabases = true;
    window.EJS_threads = false;

    // Carrega o script necessário para iniciar a emulação
    const script = document.createElement("script");
    script.src = "data/loader.js";
    document.body.appendChild(script);
  };

  return (
    <div className="container">
      {!gameLoaded ? (
        <>
          <div className="top">
            <h1>Carregue sua ROM !!Demo!!</h1>
            <img src="./select.png" alt="Logo" className="logo" />
          </div>
          <div
            className={`box ${drag ? "drag" : ""}`}
            onDragOver={() => setDrag(true)}
            onDragLeave={() => setDrag(false)}
          >
            <input
              type="file"
              id="input"
              ref={inputRef}
              onChange={handleFileChange}
            />
            Arraste e solte o arquivo ROM ou clique aqui
          </div>
        </>
      ) : (
        <div id="display">
          <div id="game"></div>
        </div>
      )}
    </div>
  );
};

export default Emulator;
