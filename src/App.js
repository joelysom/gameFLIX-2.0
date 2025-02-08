import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar';
import NavbarAuth from './components/NavbarAuth'; // Novo Navbar para Login e Cadastro
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import EmulatorPlus from './pages/EmulatorPlus';
import EmulatorPage from './pages/EmulatorPage';
import Creditos from './pages/Creditos';
import Footer from './components/Footer';
import './App.css';

/**
 * Componente principal da aplicação. 
 * O Router é usado para navegar entre as páginas.
 * 
 * @returns {JSX.Element} O layout da aplicação com navegação e conteúdo dinâmico.
 */
function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

/**
 * Layout da aplicação.
 * Responsável por decidir qual Navbar renderizar e por exibir as rotas.
 * 
 * @returns {JSX.Element} A estrutura da página com o conteúdo das rotas e Navbar apropriada.
 */
function Layout() {
  const location = useLocation();

  /**
   * Verifica se a página atual é uma página de autenticação.
   * Isso ajuda a renderizar um Navbar diferente em páginas como Login e Cadastro.
   * 
   * @type {boolean} true se for uma página de autenticação, caso contrário false.
   */
  const isAuthPage = location.pathname === '/' || location.pathname === '/Cadastro' || location.pathname === '/Creditos';

  return (
    <>
      {isAuthPage ? <NavbarAuth /> : <NavbarComponent />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/CustomRom" element={<EmulatorPage />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/EmulatorPlus" element={<EmulatorPlus />} />
        <Route path="/Creditos" element={<Creditos />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
