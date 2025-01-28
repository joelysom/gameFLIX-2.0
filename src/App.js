import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import EmulatorPlus from './pages/EmulatorPlus';
import EmulatorPage from './pages/EmulatorPage';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<EmulatorPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/EmulatorPlus" element={<EmulatorPlus />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
