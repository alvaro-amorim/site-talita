// src/components/Hero.js

import React from 'react';
import './Hero.css';
import corretoraImage from '../assets/corretora-talita.jpg';
import { useNavigate } from 'react-router-dom'; // 1. Importe o useNavigate

function Hero() {
  // 2. Chame o hook useNavigate para obter a função de navegação
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    // 3. Use a função navigate para ir para a rota '/imoveis'
    navigate('/imoveis');
  };

  return (
    <header className="hero-section text-white d-flex flex-grow-1 align-items-center justify-content-center text-center">
      <div className="hero-content-container">
        <div className="hero-image-container">
          <img src={corretoraImage} alt="Foto da Talita Almeida" className="hero-corretora-logo" />
        </div>

        <div className="container hero-text-box p-5">
          <h1 className="display-4 fw-bold">Seja bem-vindo(a)!</h1>
          <p>
            Sou corretora de imóveis e advogada, e minha missão é ajudá-lo(a) na busca pelo imóvel ideal para o conforto e bem-estar da sua família. 
          </p>
          <p>
            Atuo em parceria com as mais conceituadas construtoras da cidade de São Paulo e estou pronta para oferecer as melhores oportunidades em custo-benefício, seja para moradia ou investimento.
          </p>
          <p>
            LANÇAMENTOS, APARTAMENTOS NOVOS OU EM CONSTRUÇÃO VOCÊ ENCONTRA AQUI!
          </p>
          <button className="btn-cta mt-4 hero-button-container" onClick={handleClick}>ENCONTRE SEU PRÓXIMO IMÓVEL</button>
        </div>
      </div>
    </header>
  );
}

export default Hero;