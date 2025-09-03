import React from 'react';
import CardImovel from './CardImovel';
import { Link } from 'react-router-dom'; // 1. Importe o componente Link

import imagemGenerica from '../assets/imagemGenerica.jpg';

function Lancamentos() {
  const listaDeEmpreendimentos = [
    { 
      id: 'D', 
      imagem: imagemGenerica, 
      titulo: 'MAC | Vila Clementino', 
      preco: 'A partir de R$ (em breve)',
      galeria: [imagemGenerica, imagemGenerica, imagemGenerica]
    },
    { 
      id: 'E', 
      imagem: imagemGenerica, 
      titulo: 'Em breve novo lançamento!', 
      preco: 'A partir de R$ ----',
      galeria: [imagemGenerica, imagemGenerica, imagemGenerica]
    },
    { 
      id: 'F', 
      imagem: imagemGenerica, 
      titulo: 'Em breve novo lançamento!', 
      preco: 'A partir de R$ ----',
      galeria: [imagemGenerica, imagemGenerica, imagemGenerica]
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