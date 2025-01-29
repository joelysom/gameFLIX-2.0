import React, { useState, useEffect } from 'react';
import './EmulatorPage.css'; // Importando o arquivo CSS

const Emulator = () => {

  const [loading, setLoading] = useState(false);
  const [gameLoaded, setGameLoaded] = useState(false);
  const [backgroundGif, setBackgroundGif] = useState(''); // Estado para controlar o fundo
  const [introPlayed, setIntroPlayed] = useState(false); // Estado para controlar se a intro foi exibida

  useEffect(() => {
    // Adiciona um listener para a tecla Enter para pular a intro
    const handleSkipIntro = (e) => {
      if (e.key === 'Enter' && !introPlayed) {
        setIntroPlayed(true);
      }
    };

    window.addEventListener('keydown', handleSkipIntro);
    return () => {
      window.removeEventListener('keydown', handleSkipIntro);
    };
  }, [introPlayed]);

  // Função para carregar o jogo
  const loadGame = async (romUrl) => {
    try {
      setLoading(true);
      setGameLoaded(true); // Marca que o jogo foi carregado

      const { Nostalgist } = await import('https://esm.run/nostalgist');

      // Carregar o jogo com a URL fornecida
      if (romUrl.endsWith('.md')) {
        await Nostalgist.megadrive(romUrl);
      } else if (romUrl.endsWith('.gba')) {
        await Nostalgist.gba(romUrl);
      } else if (romUrl.endsWith('.smc')) {
        await Nostalgist.snes(romUrl);
      }

      console.log('Jogo carregado com sucesso!');
    } catch (error) {
      console.error('Erro ao carregar o jogo:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleBackButton = () => { // Aqui está definida a função associada ao erro 'handleBackButton is not defined'
    window.location.reload(); // Linha do erro 317:28
  };

  // Função para quando um botão for clicado
  const handleButtonClick = (romUrl) => {
    loadGame(romUrl);
  };

  // Funções para mudar o fundo ao passar o mouse sobre os cards
  const handleMouseEnter = (gif) => {
    setBackgroundGif(gif); // Muda o fundo para o GIF correspondente
  };

  const handleMouseLeave = () => {
    setBackgroundGif(''); // Restaura o fundo original
  };
  
  if (!introPlayed) {
    return (
      <div className="intro-container">
        <video 
          src="/intro.mp4" 
          className="intro-video" 
          autoPlay 
          muted 
          onEnded={() => setIntroPlayed(true)} // Quando o vídeo terminar, a intro será considerada concluída
        />
        <p className="skip-intro">Pressione Enter para pular</p>
      </div>
    );
  }

  return (
    <div className="app-container">
      {/* Novo contêiner para o fundo com a classe de blur */}
      <div 
        className={`background-container ${backgroundGif ? 'blur' : ''}`} 
        style={{ 
          backgroundImage: `url(${backgroundGif || '/background.png'})`, // Exibe background.png por padrão
          backgroundSize: 'cover', // Garante que a imagem cubra toda a tela
          backgroundPosition: 'center', // Alinha o fundo ao centro
        }} 
      />

      {loading && <p className="loading">Carregando o jogo...</p>}


      {/* Seleção de jogos */}
      {!gameLoaded && (
        <div className="games-container">
          {/* Sonic 3 */}
          <div 
            className="game-card" 
            onClick={() => handleButtonClick('https://raw.githubusercontent.com/joelysom/git-test/main/assets/roms/Sonic3.md')}
            onMouseEnter={() => handleMouseEnter('/sonic3.gif')}
            onMouseLeave={handleMouseLeave}
          >
            <img src="/sonic3.jpg" alt="Sonic 3" className="game-image" />
            <div className="game-title">Sonic 3 (Megadrive)</div>
          </div>

          {/* Sonic Advance 2 */}
          <div 
            className="game-card" 
            onClick={() => handleButtonClick('https://raw.githubusercontent.com/joelysom/git-test/main/assets/roms/sonicadvance2.gba')}
            onMouseEnter={() => handleMouseEnter('/sonicadvance2.gif')}
            onMouseLeave={handleMouseLeave}
          >
            <img src="/sonicadvance2.png" alt="Sonic Advance 2" className="game-image" />
            <div className="game-title">Sonic Advance 2 (GBA)</div>
          </div>

          {/* Pokémon FireRed */}
          <div 
            className="game-card" 
            onClick={() => handleButtonClick('./roms/firered.gba')}
            onMouseEnter={() => handleMouseEnter('/firered.gif')}
            onMouseLeave={handleMouseLeave}
          >
            <img src="/firered.jpeg" alt="Pokémon FireRed" className="game-image" />
            <div className="game-title">Pokémon FireRed (GBA)</div>
          </div>

          {/* Street Fighter Alpha 3 */}
          <div 
            className="game-card" 
            onClick={() => handleButtonClick('https://raw.githubusercontent.com/joelysom/git-test/main/assets/roms/StreetFA2.gba')}
            onMouseEnter={() => handleMouseEnter('/street.gif')}
            onMouseLeave={handleMouseLeave}
          >
            <img src="/streetfighter3.jpg" alt="Street Fighter Alpha 3" className="game-image" />
            <div className="game-title">Street Fighter Alpha 3 (GBA)</div>
          </div>

          {/* Castlevania: Bloodlines */}
          <div 
            className="game-card" 
            onClick={() => handleButtonClick('https://raw.githubusercontent.com/joelysom/git-test/main/assets/roms/CastlevaniaBlood.md')}
            onMouseEnter={() => handleMouseEnter('/castlevania.gif')}
            onMouseLeave={handleMouseLeave}
          >
            <img src="/castlevania.jpg" alt="Castlevania: Bloodlines" className="game-image" />
            <div className="game-title">Castlevania: Bloodlines (Megadrive)</div>
          </div>

          {/* Kirby Nightmare in Dreamland */}
          <div 
            className="game-card" 
            onClick={() => handleButtonClick('https://raw.githubusercontent.com/joelysom/git-test/main/assets/roms/kirbynightmareindreamland.gba')}
            onMouseEnter={() => handleMouseEnter('/kirbynightmareindreamland.gif')}
            onMouseLeave={handleMouseLeave}
          >
            <img src="/kirbynightmareindreamland.jpeg" alt="Kirby Nightmare in Dreamland" className="game-image" />
            <div className="game-title">Kirby: Nightmare in Dreamland (GBA)</div>
          </div>

          {/* Legend of Zelda: Minish Cap */}
          <div 
            className="game-card" 
            onClick={() => handleButtonClick('https://raw.githubusercontent.com/joelysom/git-test/main/assets/roms/legendzeldaminishcap.gba')}
            onMouseEnter={() => handleMouseEnter('/legendzeldaminishcap.gif')}
            onMouseLeave={handleMouseLeave}
          >
            <img src="/legendzeldaminishcap.jpeg" alt="Legend of Zelda: Minish Cap" className="game-image" />
            <div className="game-title">Legend of Zelda: Minish Cap (GBA)</div>
          </div>

          {/* Mortal Kombat 3 */}
          <div 
            className="game-card" 
            onClick={() => handleButtonClick('https://raw.githubusercontent.com/joelysom/git-test/main/assets/roms/mortalkombat3.md')}
            onMouseEnter={() => handleMouseEnter('/mortalkombat3.gif')}
            onMouseLeave={handleMouseLeave}
          >
            <img src="/mortalkombat3.jpeg" alt="Mortal Kombat 3" className="game-image" />
            <div className="game-title">Mortal Kombat 3 (Megadrive)</div>
          </div>

          {/* Pokémon Emerald */}
          <div 
            className="game-card" 
            onClick={() => handleButtonClick('https://raw.githubusercontent.com/joelysom/git-test/main/assets/roms/pokemonemerald.gba')}
            onMouseEnter={() => handleMouseEnter('/pokemonemerald.gif')}
            onMouseLeave={handleMouseLeave}
          >
            <img src="/pokemonemerald.jpeg" alt="Pokémon Emerald" className="game-image" />
            <div className="game-title">Pokémon Emerald (GBA)</div>
          </div>

          {/* Sonic 3D Blast */}
          <div 
            className="game-card" 
            onClick={() => handleButtonClick('https://raw.githubusercontent.com/joelysom/git-test/main/assets/roms/sonic3dblast.md')}
            onMouseEnter={() => handleMouseEnter('/sonic3dblast.gif')}
            onMouseLeave={handleMouseLeave}
          >
            <img src="/sonic3dblast.jpeg" alt="Sonic 3D Blast" className="game-image" />
            <div className="game-title">Sonic 3D Blast (Megadrive)</div>
          </div>

          {/* Super Mario Advance 2: Super Mario World */}
          <div 
            className="game-card" 
            onClick={() => handleButtonClick('https://raw.githubusercontent.com/joelysom/git-test/main/assets/roms/supermarioadvance2supermarioworld.gba')}
            onMouseEnter={() => handleMouseEnter('/supermarioadvance2supermarioworld.gif')}
            onMouseLeave={handleMouseLeave}
          >
            <img src="/supermarioadvance2supermarioworld.jpeg" alt="Super Mario Advance 2" className="game-image" />
            <div className="game-title">Super Mario Advance 2: Super Mario World (GBA)</div>
          </div>

          {/* Mega Man X */}
          <div 
            className="game-card" 
            onClick={() => handleButtonClick('https://raw.githubusercontent.com/joelysom/git-test/main/assets/roms/megamanx.smc')}
            onMouseEnter={() => handleMouseEnter('/megamanx.gif')}
            onMouseLeave={handleMouseLeave}
          >
            <img src="/megamanx.png" alt="Mega Man X" className="game-image" />
            <div className="game-title">Mega Man X (Super Nintendo)</div>
          </div>

          {/* Final Fantasy Tactics Advance */}
          <div 
            className="game-card" 
            onClick={() => handleButtonClick('https://raw.githubusercontent.com/joelysom/git-test/main/assets/roms/finalfantasytacticsadvance.gba')}
            onMouseEnter={() => handleMouseEnter('/finalfantasytacticsadvance.gif')}
            onMouseLeave={handleMouseLeave}
          >
            <img src="/finalfantasytacticsadvance.jpeg" alt="Final Fantasy Tactics Advance" className="game-image" />
            <div className="game-title">Final Fantasy Tactics Advance (GBA)</div>
          </div>

          {/* Metroid Fusion */}
          <div 
            className="game-card" 
            onClick={() => handleButtonClick('https://raw.githubusercontent.com/joelysom/git-test/main/assets/roms/metroidfusion.gba')}
            onMouseEnter={() => handleMouseEnter('/metroidfusion.gif')}
            onMouseLeave={handleMouseLeave}
          >
            <img src="/metroidfusion.jpg" alt="Metroid Fusion" className="game-image" />
            <div className="game-title">Metroid Fusion (GBA)</div>
          </div>

        </div>
      )}

      {gameLoaded && (
        <div className="game-controls">
          <button onClick={handleBackButton} className="back-button">
            <img src="/back.png" alt="Voltar" className="back-image" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Emulator;
