// src/components/CardImovel.js

import React from 'react';
import { Link } from 'react-router-dom';
import './CardImovel.css';

function CardImovel({ imovel, linkDetalhes }) {
  return (
    <div className="card shadow-sm">
      <img src={imovel.imagem} className="card-img" alt={imovel.titulo} />
      <div className="card-body">
        <h5 className="card-title">{imovel.titulo}</h5>
        <p className="card-text fw-bold">{imovel.preco}</p>
        <div className="d-flex justify-content-between align-items-center">
          <Link to={linkDetalhes} className="btn btn-primary">Detalhes</Link>
        </div>
      </div>
    </div>
  );
}

export default CardImovel;