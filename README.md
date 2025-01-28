# Documentação do Projeto "Session Fit"

## Equipe de Desenvolvimento
- **Pedro Lucas**
- **Sérgio Rennan**

---

## Descrição do Site

O projeto "Session Fit" é um site desenvolvido para uma academia que visa apresentar seus serviços, planos e informações institucionais. O site oferece uma experiência de navegação intuitiva e um design moderno, proporcionando aos usuários acesso rápido a informações como:

- **Treinos Disponíveis:** Apresentação de diferentes tipos de treinos, como Treino de Força, Cardio Intenso e Treino Funcional.
- **Planos:** Descrição detalhada dos planos oferecidos pela academia.
- **Sobre:** Informações sobre a história e os valores da academia.
- **Contato:** Formulário e meios de comunicação para os usuários.

O objetivo é facilitar o acesso dos clientes às informações e promover uma melhor experiência de usuário.

---

## Estrutura de Organização do Projeto

O projeto é dividido em pastas e arquivos de forma clara para manter a organização do código:

### Diretórios e Arquivos Principais:

- **`/src`**: Contém todo o código fonte do projeto.
  - **`/assets`**: Armazena imagens e recursos estáticos.
  - **`App.js`**: Componente principal que define a estrutura geral do site.
  - **`App.css`**: Arquivo de estilos principais.
  - **`index.js`**: Ponto de entrada do aplicativo React.
  - **`components/`**: Componentes reutilizáveis, como Navbar, Footer, Cards, etc.

- **`/public`**: Contém arquivos públicos acessíveis diretamente pelo navegador.
  - **`index.html`**: Template HTML principal.

---

## Hooks Utilizados

O projeto faz uso dos seguintes hooks do React para funcionalidade dinâmica:

1. **`useState`**:
   - Gerenciamento de estados locais dentro dos componentes, como controlar a exibição de menus dropdown.

2. **`useEffect`**:
   - Gerenciamento de efeitos colaterais, como alterações baseadas em atualizações de dados ou carregamento inicial.

---

## Estrutura de Navegação

A navegação do site é gerenciada pela biblioteca `react-router-dom`. A estrutura inclui as seguintes rotas:

- **`/`**: Rota principal que carrega a página inicial com informações sobre treinos e planos.
- **`/about`**: Página "Sobre" com informações institucionais.
- **`/contact`**: Página "Contato" com um formulário de envio de mensagens.

Cada rota é vinculada a um componente React que renderiza o conteúdo correspondente.

---

## Bibliotecas Utilizadas

1. **`React`**: Biblioteca principal para criação da interface do usuário.
2. **`React Bootstrap`**: Framework CSS para componentes responsivos e estilização.
3. **`react-router-dom`**: Gerenciamento de rotas para navegação entre páginas.

---


