import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar';
import NavbarAuth from './components/NavbarAuth'; // Novo Navbar para Login e Cadastro
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import EmulatorPlus from './pages/EmulatorPlus';
import EmulatorPage from './pages/EmulatorPage';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

function Layout() {
  const location = useLocation();

  // Definir quais páginas terão um Navbar diferente
  const isAuthPage = location.pathname === '/' || location.pathname === '/Cadastro';

  return (
    <>
      {isAuthPage ? <NavbarAuth /> : <NavbarComponent />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Emulator" element={<EmulatorPage />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/EmulatorPlus" element={<EmulatorPlus />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
