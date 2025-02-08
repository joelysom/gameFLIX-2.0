import React, { useState, useRef } from "react";
import "./EmulatorPage.css";

const Emulator = () => {
  const [drag, setDrag] = useState(false);
  const inputRef = useRef(null);
  const [gameLoaded, setGameLoaded] = useState(false);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const parts = file.name.split(".");
    const ext = parts.pop();

    const { getCore } = await import("./EmulatorLogic");
    const core = await getCore(ext, parts);

    loadGame(file, core, parts.shift());
  };

  const loadGame = (file, core, gameName) => {
    setGameLoaded(true);
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
