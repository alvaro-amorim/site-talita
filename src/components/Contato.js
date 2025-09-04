// src/components/Contato.js

import React, { useState } from 'react';
import { FaWhatsapp, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import './Contato.css';

function Contato() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      setFormSubmitted(true);
    } else {
      alert("Houve um erro ao enviar a mensagem. Por favor, tente novamente.");
    }
  };

  return (
    <div className="container mt-4 page-content">
      <h2>Fale Comigo!</h2>
      
      <div className="d-flex justify-content-center align-items-start gap-5">
        {/* Formulário de Contato no lado esquerdo */}
        <div className="contact-form-container">
          {formSubmitted ? (
            <div className="alert alert-success text-center" role="alert">
              Sua mensagem foi enviada com sucesso!
            </div>
          ) : (
            <form onSubmit={handleSubmit} action="https://formspree.io/f/mandbrrj" method="POST" className="contact-form">
              <div className="form-group mb-3">
                <label htmlFor="name">Nome:</label>
                <input type="text" id="name" name="name" className="form-control" required />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="phone">Telefone:</label>
                <input type="tel" id="phone" name="phone" className="form-control" required />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="email">E-mail:</label>
                <input type="email" id="email" name="email" className="form-control" required />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="message">Mensagem:</label>
                <textarea id="message" name="message" rows="4" className="form-control" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Enviar</button>
            </form>
          )}
        </div>

        {/* Quadro com outras opções de contato no lado direito */}
        <div className="contact-info-box">
          <h4 className="mb-2">Outras maneiras de entrar em contato!</h4>
          <p className="small-text">(A resposta pode ser mais rápida.)</p>
          <div className="social-icons-container">
            <a href="https://wa.me/5511994649705" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp">
              <FaWhatsapp className="social-icon whatsapp" />
            </a>
            <a href="https://www.instagram.com/talitta.salmeida" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="social-icon instagram" />
            </a>
            <a href="tel:+5511994649705" aria-label="Telefone">
              <FaPhoneAlt className="social-icon phone" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contato;