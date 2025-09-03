// src/components/Navbar.js

import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logoTalita from '../assets/logo-talita.png';

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    const handlePopState = () => {
      setIsMenuOpen(false);
    };

    document.addEventListener('mousedown', handleOutsideClick);
    window.addEventListener('popstate', handlePopState);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [menuRef]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo-container">
        <Link to="/" className="navbar-logo-link">
          <img src={logoTalita} alt="Logo Talita Almeida" className="navbar-logo" />
        </Link>
      </div>

      <button className="hamburger-menu" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <div className={`nav-links-container ${isMenuOpen ? 'open' : ''}`} ref={menuRef}>
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
