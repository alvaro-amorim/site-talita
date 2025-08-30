// src/components/ChatModal.js

import React from 'react';
import './ChatModal.css';

function ChatModal({ show, onClose }) {
  if (!show) {
    return null;
  }

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
      alert("Sua mensagem foi enviada com sucesso!");
      onClose(); // Fecha o modal após o envio
    } else {
      alert("Houve um erro ao enviar a mensagem. Por favor, tente novamente.");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="chat-modal">
        <button className="close-button" onClick={onClose}>&times;</button>
        <h3>Fale Comigo</h3>
        <p>Preencha o formulário e entro em contato com você o mais breve possível!</p>
        <form onSubmit={handleSubmit} action="https://formspree.io/f/seu-id-do-formspree" method="POST">
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Telefone:</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensagem:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit" className="submit-button">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default ChatModal;