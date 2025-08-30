// src/components/Navbar.js

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logoTalita from '../assets/logo-talita.png';
import corretoraImage from '../assets/corretora-talita.jpg';

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand-container">
        <Link to="/" className="navbar-logo-link">
          <img src={logoTalita} alt="Logo Talita Almeida" className="navbar-logo" />
        </Link>
      </div>

      <button className="hamburger-menu" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <div className={`nav-links-container ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={toggleMenu}>HOME</Link>
        <Link to="/imoveis" className={`nav-link ${location.pathname === '/imoveis' ? 'active' : ''}`} onClick={toggleMenu}>Imóveis</Link>
        <Link to="/lancamentos" className={`nav-link ${location.pathname === '/lancamentos' ? 'active' : ''}`} onClick={toggleMenu}>Lançamentos</Link>
        <Link to="/sobre" className={`nav-link ${location.pathname === '/sobre' ? 'active' : ''}`} onClick={toggleMenu}>Sobre</Link>
        <Link to="/contato" className={`nav-link ${location.pathname === '/contato' ? 'active' : ''}`} onClick={toggleMenu}>Contato</Link>
      </div>
    </nav>
  );
}

export default Navbar;