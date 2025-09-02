// src/components/Footer.js

import React from 'react';
import './Footer.css';
import { FaPhone, FaWhatsapp, FaInstagram, FaComment } from 'react-icons/fa';

function Footer({ openChat }) {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-icons">
          <a href="tel:+5511994649705" aria-label="Telefone">
            <FaPhone className="icon icon-flipped" />
          </a>
          <a href="https://wa.me/5511994649705" aria-label="Whatsapp">
            <FaWhatsapp className="icon" />
          </a>
          <a href="https://www.instagram.com/talitta.salmeida" aria-label="Instagram">
            <FaInstagram className="icon" />
          </a>
        </div>
        
        <div className="footer-chat-icon" onClick={openChat}>
          <span className="chat-text">Fale comigo!</span>
          <FaComment className="icon" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;