// src/components/Imoveis.js

import React from 'react';
import { Link } from 'react-router-dom';
import CardImovel from './CardImovel';

// Importe as imagens dos imóveis aqui
import imovel1 from '../assets/BlueMarine/imovel-A-1.png';
import imovel2 from '../assets/Agami/imovel-B-1.png';
import imovel3 from '../assets/Arcadio/imovel-C-1.png';

// Importe as imagens da galeria de cada imóvel
import imovelA1 from '../assets/BlueMarine/imovel-A-1.png';
import imovelA2 from '../assets/BlueMarine/imovel-A-2.png';
import imovelA3 from '../assets/BlueMarine/imovel-A-3.png';
import imovelB1 from '../assets/Agami/imovel-B-1.png';
import imovelB2 from '../assets/imovel-B-2.jpg';
import imovelB3 from '../assets/imovel-B-3.jpg';
import imovelC1 from '../assets/Arcadio/imovel-C-1.png';
import imovelC2 from '../assets/imovel-C-2.jpg';
import imovelC3 from '../assets/imovel-C-3.jpg';

function Imoveis() {
  const listaDeImoveis = [
    { 
      id: 'A',
      imagem: imovel1, 
      titulo: 'Blue Marine | Home Resort', 
      preco: 'A partir de R$ 990.000',
    },
    { 
      id: 'B',
      imagem: imovel2, 
      titulo: 'Agami Park Residences', 
      preco: 'A partir de R$ 990.000',
    },
    { 
      id: 'C',
      imagem: imovel3, 
      titulo: 'Arkadio | World-Class Residence', 
      preco: 'A partir de R$ 990.000',
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