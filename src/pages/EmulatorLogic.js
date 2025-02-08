export const getCore = async (ext, parts) => {
    const cores = {
      "fds": "nes", "nes": "nes", "unif": "nes", "unf": "nes",
      "smc": "snes", "fig": "snes", "sfc": "snes",
      "z64": "n64", "n64": "n64",
      "pce": "pce", "ngp": "ngp", "ngc": "ngp",
      "ws": "ws", "wsc": "ws", "col": "coleco", "cv": "coleco",
      "d64": "vice_x64sc",
      "nds": "nds", "gba": "gba", "gb": "gb"
    };
  
    if (cores[ext]) {
      return cores[ext];
    }
  
    return new Promise((resolve) => {
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
  
      const select = document.createElement("select");
      const button = document.createElement("button");
  
      Object.entries(coreValues).forEach(([label, value]) => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = label;
        select.appendChild(option);
      });
  
      button.onclick = () => resolve(select.value);
      button.textContent = "Load game";
  
      const box = document.querySelector(".box");
      box.innerHTML = "";
      box.appendChild(select);
      box.appendChild(button);
    });
  };
  