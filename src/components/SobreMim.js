// src/components/SobreMim.js

import React from 'react';
import './SobreMim.css';
import corretoraImage from '../assets/corretora-talita.jpg';
import { FaWhatsapp, FaInstagram, FaPhoneAlt } from 'react-icons/fa';

function SobreMim() {
  return (
    <section id="sobre" className="container mt-5 page-content">
      <div className="row">
        <h2 className="h2 mb-4">Sobre Mim:</h2>
        <div className="col-md-5 d-flex align-items-justify justify-content-center gap-4">
          <div className="text-center">
            <img src={corretoraImage} alt="Foto de Talitta Almeida" className="img-fluid rounded-circle shadow" />
          </div>
          <div className="d-flex flex-column justify-content-start gap-3 mt-4">
            <a href="https://wa.me/5532991165003" aria-label="WhatsApp">
              <FaWhatsapp className="icon" />
            </a>
            <a href="https://www.instagram.com/talitta.salmeida" aria-label="Instagram">
              <FaInstagram className="icon" />
            </a>
            <a href="tel:+5532991165003" aria-label="Telefone">
              <FaPhoneAlt className="icon" />
            </a>
          </div>
        </div>
        <div className="text-sb col-md-7">
          <p className="lead">
            Sou Corretora de Imóveis e Advogada, minha missão é ajudar você e sua família a encontrar o lar dos seus sonhos! Atuo diretamente com as mais conceituadas Construtoras da cidade de São Paulo, oferecendo as melhores ofertas de custo-benefício, seja para moradia ou investimento.
          </p>
          <p>
            Com anos de experiência no mercado imobiliário, tenho o conhecimento e a paixão para guiar você em cada etapa do processo, garantindo uma experiência tranquila e segura. Acredito que um lar é mais do que tijolos e cimento; é o lugar onde memórias são construídas e a vida acontece.
          </p>
          <p>
            Minha missão é transformar o seu sonho em realidade! Estou à disposição para te auxiliar a encontrar o imóvel perfeito!
          </p>
          <p>
            Talitta Almeida 🏘️🤝✔️ CRECI/SP 251039F <br></br> (Corretora Imobiliária)
          </p>
        </div>
      </div>
    </section>
  );
}

export default SobreMim;