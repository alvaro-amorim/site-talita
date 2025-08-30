// src/components/Imoveis.js

import React from 'react';
import { Link } from 'react-router-dom';
import CardImovel from './CardImovel';

// Importe as imagens dos imóveis aqui
import imovel1 from '../assets/imovel1.jpg';
import imovel2 from '../assets/imovel2.jpg';
import imovel3 from '../assets/imovel3.jpg';

// Importe as imagens da galeria de cada imóvel
import imovelA1 from '../assets/imovel-A-1.jpg';
import imovelA2 from '../assets/imovel-A-2.jpg';
import imovelA3 from '../assets/imovel-A-3.jpg';
import imovelB1 from '../assets/imovel-B-1.jpg';
import imovelB2 from '../assets/imovel-B-2.jpg';
import imovelB3 from '../assets/imovel-B-3.jpg';
import imovelC1 from '../assets/imovel-C-1.jpg';
import imovelC2 from '../assets/imovel-C-2.jpg';
import imovelC3 from '../assets/imovel-C-3.jpg';

function Imoveis() {
  const listaDeImoveis = [
    { 
      id: 'A',
      imagem: imovel1, 
      titulo: 'Apartamento de Luxo', 
      preco: 'R$ 1.500.000',
      galeria: [imovelA1, imovelA2, imovelA3]
    },
    { 
      id: 'B',
      imagem: imovel2, 
      titulo: 'Casa com Jardim', 
      preco: 'R$ 850.000',
      galeria: [imovelB1, imovelB2, imovelB3]
    },
    { 
      id: 'C',
      imagem: imovel3, 
      titulo: 'Loft Moderno', 
      preco: 'R$ 520.000',
      galeria: [imovelC1, imovelC2, imovelC3]
    },
  ];

  return (
    <section id="imoveis" className="container my-5 page-content">
      <h2 className="text-center mb-4">Imóveis à venda</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {listaDeImoveis.map(imovel => (
          <div key={imovel.id} className="col">
            <CardImovel 
              imovel={imovel}
              linkDetalhes={`/detalhes/${imovel.id}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Imoveis;