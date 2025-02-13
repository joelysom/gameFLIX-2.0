import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar';
import NavbarAuth from './components/NavbarAuth';
import NavbarAuth2 from './components/NavbarAuth2'; // Corrigido aqui
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import EmulatorPlus from './pages/EmulatorPlus';
import EmulatorPage from './pages/EmulatorPage';
import Creditos from './pages/Creditos';
import Footer from './components/Footer';
import SelectUser from './pages/SelectUser';
import { UserProvider } from './context/UserContext';
import './App.css';

/**
 * Componente principal da aplicação. 
 * O Router é usado para navegar entre as páginas.
 * 
 * @returns {JSX.Element} O layout da aplicação com navegação e conteúdo dinâmico.
 */
function App() {
  return (
    <UserProvider> {/* Envolvendo toda a aplicação com o contexto */}
      <Router>
        <Layout />
      </Router>
    </UserProvider>
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
   * Definindo as condições para cada Navbar.
   */
  const isAuthPage = location.pathname === '/' || location.pathname === '/Cadastro' || location.pathname === '/Creditos';
  const isSelectUserPage = location.pathname === '/select-user';
  const isEmulatorPage = location.pathname === '/EmulatorPlus' || location.pathname === '/CustomRom';

  return (
    <>
      {isSelectUserPage ? <NavbarAuth2 /> : isAuthPage ? <NavbarAuth /> : isEmulatorPage ? <NavbarComponent /> : <NavbarComponent />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/CustomRom" element={<EmulatorPage />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/EmulatorPlus" element={<EmulatorPlus />} />
        <Route path="/Creditos" element={<Creditos />} />
        <Route path="/select-user" element={<SelectUser />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
