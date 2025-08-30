import React from 'react';
import CardImovel from './CardImovel';
import { Link } from 'react-router-dom'; // 1. Importe o componente Link

import lancamento1 from '../assets/lancamento1.jpg';
import lancamento2 from '../assets/lancamento2.jpg';
import lancamento3 from '../assets/lancamento3.jpg';

function Lancamentos() {
  const listaDeEmpreendimentos = [
    { 
      id: 'D', 
      imagem: lancamento1, 
      titulo: 'Residencial Vida Nova', 
      preco: 'A partir de R$ 350.000',
      galeria: [lancamento1, lancamento2, lancamento3]
    },
    { 
      id: 'E', 
      imagem: lancamento2, 
      titulo: 'Condomínio Flórida', 
      preco: 'A partir de R$ 900.000',
      galeria: [lancamento1, lancamento2, lancamento3]
    },
    { 
      id: 'F', 
      imagem: lancamento3, 
      titulo: 'Oceano Residences', 
      preco: 'A partir de R$ 600.000',
      galeria: [lancamento1, lancamento2, lancamento3]
    },
  ];

  return (
    <section id="lancamentos" className="container my-5 page-content">
      <h2 className-="text-center mb-4">Empreendimentos em Lançamento</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {listaDeEmpreendimentos.map(empreendimento => (
          <div key={empreendimento.id} className="col">
            <CardImovel 
              imovel={empreendimento}
              // 2. Passe a rota completa para o CardImovel
              linkDetalhes={`/detalhes/${empreendimento.id}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Lancamentos;