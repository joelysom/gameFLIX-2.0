/**
 * Retorna o core de emulação correspondente à extensão ou nome do jogo.
 * 
 * O método primeiro tenta corresponder a extensão do arquivo com os cores predefinidos.
 * Se não houver correspondência, ele exibe uma interface para o usuário escolher um core manualmente.
 *
 * @param {string} ext A extensão do arquivo ROM (ex: 'smc', 'nes').
 * @param {Array} parts O nome do arquivo dividido em partes (utilizado para detectar o nome do jogo).
 * @returns {Promise<string>} O core que será utilizado para emular o jogo.
 */
export const getCore = async (ext, parts) => {
    // Mapeia extensões de arquivos para cores de emulação.
    const cores = {
      "fds": "nes", "nes": "nes", "unif": "nes", "unf": "nes",
      "smc": "snes", "fig": "snes", "sfc": "snes",
      "z64": "n64", "n64": "n64",
      "pce": "pce", "ngp": "ngp", "ngc": "ngp",
      "ws": "ws", "wsc": "ws", "col": "coleco", "cv": "coleco",
      "d64": "vice_x64sc",
      "nds": "nds", "gba": "gba", "gb": "gb"
    };

    // Retorna o core associado à extensão do arquivo se encontrado no mapeamento.
    if (cores[ext]) {
      return cores[ext];
    }
  
    // Caso a extensão não seja mapeada, apresenta um menu para o usuário escolher um core.
    return new Promise((resolve) => {
      // Mapeia os nomes de sistemas para seus cores de emulação correspondentes.
      const coreValues = {
        "Nintendo 64": "n64",
        "Nintendo Game Boy": "gb",
        "Nintendo Game Boy Advance": "gba",
        "Nintendo DS": "nds",
        "Nintendo Entertainment System": "nes",
        "Super Nintendo Entertainment System": "snes",
        "PlayStation": "psx",
        "Virtual Boy": "vb",
        "Sega Mega Drive": "segaMD",
        "Sega Master System": "segaMS",
        "Sega CD": "segaCD",
        "Atari Lynx": "lynx",
        "Sega 32X": "sega32x",
        "Atari Jaguar": "jaguar",
        "Sega Game Gear": "segaGG",
        "Sega Saturn": "segaSaturn",
        "Atari 7800": "atari7800",
        "Atari 2600": "atari2600",
        "Arcade": "arcade",
        "NEC TurboGrafx-16/SuperGrafx/PC Engine": "pce",
        "NEC PC-FX": "pcfx",
        "SNK NeoGeo Pocket (Color)": "ngp",
        "Bandai WonderSwan (Color)": "ws",
        "ColecoVision": "coleco",
        "Commodore 64": "vice_x64sc",
        "Commodore 128": "vice_x128",
        "Commodore VIC20": "vice_xvic",
        "Commodore Plus/4": "vice_xplus4",
        "Commodore PET": "vice_xpet"
      };

      // Cria um dropdown para o usuário selecionar o core desejado.
      const select = document.createElement("select");
      const button = document.createElement("button");

      // Preenche o dropdown com as opções de cores.
      Object.entries(coreValues).forEach(([label, value]) => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = label;
        select.appendChild(option);
      });
  
      // Ação ao clicar no botão: resolve a promessa com o core selecionado.
      button.onclick = () => resolve(select.value);
      button.textContent = "Load game";
  
      // Adiciona a interface ao DOM para que o usuário possa fazer a seleção.
      const box = document.querySelector(".box");
      box.innerHTML = "";
      box.appendChild(select);
      box.appendChild(button);
    });
  };
