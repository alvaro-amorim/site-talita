// src/components/ContactBar.js

import React from 'react';
import './ContactBar.css';
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';

function ContactBar() {
  return (
    <div className="contact-bar">
      <div className="contact-channels">
        <a href="https://wa.me/5511994649705" className="contact-link whatsapp" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="icon" /> WhatsApp (11) 99502-8723
        </a>
        <a href="https://www.facebook.com/miltonmatsumura" className="contact-link facebook" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="icon" />
        </a>
        <a href="https://www.instagram.com/miltonmatsumura" className="contact-link instagram" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a>
      </div>
      <div className="contact-info">
        <p>Telefone: (11) 994649705</p>
      </div>
    </div>
  );
}

export default ContactBar;