Aqui está a documentação atualizada com as novas dependências incluídas:

---

## Documentação do Projeto: Emulador Sega Genesis com React
![GamingFlix](gamingFLIX.PNG)

### Introdução
Este projeto tem como objetivo desenvolver Site Estilo Netflix com emuladores utilizando React como base para a interface. A aplicação permite a execução de jogos de Gameboy á Playstation, proporcionando uma experiência nostálgica para os usuários.

---

### Tecnologias Utilizadas

- **React**: Biblioteca principal para o desenvolvimento da interface do usuário.
- **React Router DOM**: Gerenciamento de rotas para navegação dentro da aplicação.
- **EmulatorPlus/JS**: Lógica completa do hardware dos Emuladores.
- **React DOM**: Renderização dos componentes React no DOM.
- **React Scripts**: Scripts e ferramentas de suporte ao desenvolvimento.
- **CRA Template**: Template base para inicializar o projeto com Create React App.
- **Express**: Framework para desenvolvimento de APIs e servidores web.
- **SQLite3**: Banco de dados leve e eficiente para armazenamento de dados.
- **Axios**: Cliente HTTP para requisições assíncronas.
- **Bootstrap e React Bootstrap**: Biblioteca de estilos para um design responsivo.
- **Bcrypt**: Biblioteca para criptografia de senhas.
- **CORS**: Middleware para controle de acessos entre domínios diferentes.



---

### Estrutura do Projeto

Abaixo está a estrutura inicial do projeto:

```
GameFlix2.0/
├── node_modules/       # Dependências do projeto
├── public/             # Arquivos públicos, como index.html
│   ├── assets              # Arquivos de mídia e Gifs
│   ├── avatars             # Fotos de Perfils
│   ├── roms                #Local onde estão as ROMS dos jogos
├── src/                    # Código-fonte principal
│   ├── assets/             # Arquivos de mídia e estáticos
│   ├── backend/            # Lógica do servidor e banco de dados
│   │   ├── db.js           # Configuração do banco de dados
│   │   ├── server.js       # Servidor principal
│   │   ├── user_data.db    # Banco de dados de usuários
│   ├── components/         # Componentes reutilizáveis
│   │   ├── Styles/         # Estilos dos componentes
│   │   ├── Footer.js       # Rodapé da aplicação
│   │   ├── GameCards.js    # Cartões de jogos
│   │   ├── Navbar.js       # Barra de navegação
│   │   ├── NavbarAuth.js   # Navbar com autenticação
│   │   ├── NavbarAuth2.js  # Navbar Para Espera de seleção de Perfil
│   │   ├── EmulatorPlus.js # Componente adicional do emulador
│   ├── context/            # Parqa o Navbar carregar a logica dos perfis e contas.
│   │   ├── UserContext.js  # Para Verificar qual conta e Perfil Estão Sendo Usados em Tempo Real
│   ├── EmulatorPlus/       # Logica com os Dados dos Emuladores para exibição
│   ├── pages/              # Páginas principais da aplicação
│   │   ├── Styles/         # Estilos das páginas
│   │   ├── Cadastro.js     # Página de cadastro de usuários
│   │   ├── Creditos.js     # Página de créditos
│   │   ├── EmulatorLogic.js# Lógica principal do emulador
│   │   ├── EmulatorPage.js # Página do emulador
│   │   ├── EmulatorPlus.js # Página extra do emulador
│   │   ├── Login.js        # Página de login
│   │   ├── SelectUser.js   # Página de Seleção de Perfil
│   ├── App.js              # Componente principal da aplicação
│   ├── App.css             # Estilos globais da aplicação
│   ├── index.js        # Ponto de entrada do React
├── .gitignore          # Arquivos ignorados pelo Git
├── package.json        # Configuração do projeto e dependências
├── README.md           # Informações gerais do projeto
```

---

### Configuração do Ambiente

#### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas no seu ambiente de desenvolvimento:

- **Node.js** (>= 14.x)
- **Yarn** ou **npm**

#### Passos para Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/sega-genesis-emulator.git
   ```

2. Navegue para o diretório do projeto:
   ```bash
   cd sega-genesis-emulator
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

5. Acesse a aplicação no navegador:
   ```bash
   http://localhost:3000
   ```

---

### Funcionalidades

- **Carregar ROMs**: O usuário pode Jogar Jogos Retro de plataformas como GameBoy Advance, SNS, Mega Drive, GENESIS, GBC, GB.
- **Controles Virtuais**: Interface para controles do jogo aparece para dispositivos celulares e tablets.
![Keys](gameflixKeys.png)
- **Salvamento de Progresso**: Possibilidade de salvar e carregar estados dos jogos.
- **Configurações de Login**: Para acessar a interface, o usuário deve fazer login com E-Mail e Senha.
- **Configurações de Cadastro**: Para cadastrar o Conta no banco de dados.
- **Seleção de Perfis Estilo Netflix**: Para diversificar e deixar mais bonito o projeto todo.
- **Carregar Jogo Salvo**: O projeto tem opçao para Importar/Exportar Dados de salvamento do jogo, evitando que o usuário tenha que recomeçar o jogo.
- **Carregamento de Cheats**: Para usuários mais preguiçosos com o processo dos jogos, podem adicionar cheats codes.
- **Aumentar a tela/Zoom/FullScreen**: Para facilitar a jogabilidade dando mais visão.
- **Verificação de cachê**: para limpar ou analisar o cachê de jogos carregados.
- **Play, Pausa, Acelerar**: pode pausar o jogo independente da fase, voltar a dar play ou acelerar o jogo em cenas lentas.

---

### Bibliotecas Utilizadas

#### Lista de Dependências

- `axios@^1.7.9`
- `bcrypt@^5.1.1`
- `bootstrap@^5.3.3`
- `cors@^2.8.5`
- `cra-template@1.2.0`
- `express@^4.21.2`
- `GameFlix@file:`
- `react@^19.0.0`
- `react-bootstrap@^2.10.8`
- `react-dom@^19.0.0`
- `react-router-dom@^7.1.3`
- `react-scripts@5.0.1`
- `sqlite3@^5.1.7`

---

#### Emulator.js  
**Descrição:** Emulator.js é uma biblioteca de emulação baseada em JavaScript, projetada para fornecer suporte a emuladores de consoles retro, incluindo o Sega Genesis. Ele oferece uma performance eficiente e é altamente compatível com vários tipos de hardware retro. Essa biblioteca permite que você crie emuladores web de forma simples e acessível.

**Documentação:** [Emulator.js GitHub](https://github.com/EmulatorJS/EmulatorJS)

---

### Roadmap

- [x] Configurar ambiente de desenvolvimento
- [x] Implementar interface inicial
- [x] ROMs hospedadas no react
- [x] Adicionar suporte a ROMs
- [x] Implementar controles virtuais
- [x] Desenvolver sistema de salvamento
- [x] Sistema de Seleção de perfis na conta
- [x] Banco de dados funcional no Back-End
- [ ] Testes finais e lançamento

---

### Finalização

*"É preciso desafiar as regras para encontrar a verdadeira liberdade; às vezes, voar contra o vento é a única maneira de alcançar o que parece impossível."* – **Elphaba, Wicked.**

Essa frase reflete a ousadia de criar algo inovador e desafiar limites.

--- 

Agora, a documentação inclui as novas dependências como `axios`, `bcrypt`, `express`, `react-bootstrap`, `sqlite3` e outras.