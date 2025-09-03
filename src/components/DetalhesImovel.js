// src/components/DetalhesImovel.js

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaPlusCircle, FaDownload } from 'react-icons/fa';
import GaleriaModal from './GaleriaModal';
import './DetalhesImovel.css';

// Imagens exemplo (substitua depois pelas corretas de cada empreendimento)
import imovelA1 from '../assets/BlueMarine/imovel-A-1.png';
import imovelA2 from '../assets/BlueMarine/imovel-A-2.png';
import imovelA3 from '../assets/BlueMarine/imovel-A-3.png';
import imovelA4 from '../assets/BlueMarine/imovel-A-4.png';
import imovelA5 from '../assets/BlueMarine/imovel-A-5.png';
import imovelA6 from '../assets/BlueMarine/imovel-A-6.png';
import imovelA7 from '../assets/BlueMarine/imovel-A-7.png';
import imovelA8 from '../assets/BlueMarine/imovel-A-8.png';
import imovelA9 from '../assets/BlueMarine/imovel-A-9.png';
import imovelA10 from '../assets/BlueMarine/imovel-A-10.png';
import imovelA11 from '../assets/BlueMarine/imovel-A-11.png';
import imovelA12 from '../assets/BlueMarine/imovel-A-12.png';
import imovelA13 from '../assets/BlueMarine/imovel-A-13.png';
import imovelA14 from '../assets/BlueMarine/imovel-A-14.png';
import imovelA15 from '../assets/BlueMarine/imovel-A-15.png';
import imovelA16 from '../assets/BlueMarine/imovel-A-16.png';
import imovelA17 from '../assets/BlueMarine/imovel-A-17.png';
import imovelA18 from '../assets/BlueMarine/imovel-A-18.png';
import imovelA19 from '../assets/BlueMarine/imovel-A-19.png';
import imovelA20 from '../assets/BlueMarine/imovel-A-20.png';
import imovelA21 from '../assets/BlueMarine/imovel-A-21.png';
import imovelA22 from '../assets/BlueMarine/imovel-A-22.png';
import imovelA23 from '../assets/BlueMarine/imovel-A-23.png';

import imovelB1 from '../assets/Agami/imovel-B-1.png';
import imovelB2 from '../assets/Agami/imovel-B-2.png';
import imovelB3 from '../assets/Agami/imovel-B-3.png';
import imovelB4 from '../assets/Agami/imovel-B-4.png';
import imovelB5 from '../assets/Agami/imovel-B-5.png';
import imovelB6 from '../assets/Agami/imovel-B-6.png';
import imovelB7 from '../assets/Agami/imovel-B-7.png';
import imovelB8 from '../assets/Agami/imovel-B-8.png';
import imovelB9 from '../assets/Agami/imovel-B-9.png';
import imovelB10 from '../assets/Agami/imovel-B-10.png';
import imovelB11 from '../assets/Agami/imovel-B-11.png';
import imovelB12 from '../assets/Agami/imovel-B-12.png';
import imovelB13 from '../assets/Agami/imovel-B-13.png';
import imovelB14 from '../assets/Agami/imovel-B-14.png';
import imovelB15 from '../assets/Agami/imovel-B-15.png';
import imovelB16 from '../assets/Agami/imovel-B-16.png';
import imovelB17 from '../assets/Agami/imovel-B-17.png';
import imovelB18 from '../assets/Agami/imovel-B-18.png';
import imovelB19 from '../assets/Agami/imovel-B-19.png';
import imovelB20 from '../assets/Agami/imovel-B-20.png';
import imovelB21 from '../assets/Agami/imovel-B-21.png';
import imovelB22 from '../assets/Agami/imovel-B-22.png';
import imovelB23 from '../assets/Agami/imovel-B-23.png';
import imovelB24 from '../assets/Agami/imovel-B-24.png';
import imovelB25 from '../assets/Agami/imovel-B-25.png';
import imovelB26 from '../assets/Agami/imovel-B-26.png';
import imovelB27 from '../assets/Agami/imovel-B-27.png';


import imovelC1 from '../assets/Arcadio/imovel-C-1.png';
import imovelC2 from '../assets/Arcadio/imovel-C-2.png';
import imovelC3 from '../assets/Arcadio/imovel-C-3.png';
import imovelC4 from '../assets/Arcadio/imovel-C-4.png';
import imovelC5 from '../assets/Arcadio/imovel-C-5.png';
import imovelC6 from '../assets/Arcadio/imovel-C-6.png';
import imovelC7 from '../assets/Arcadio/imovel-C-7.png';
import imovelC8 from '../assets/Arcadio/imovel-C-8.png';
import imovelC9 from '../assets/Arcadio/imovel-C-9.png';
import imovelC10 from '../assets/Arcadio/imovel-C-10.png';
import imovelC11 from '../assets/Arcadio/imovel-C-11.png';
import imovelC12 from '../assets/Arcadio/imovel-C-12.png';
import imovelC13 from '../assets/Arcadio/imovel-C-13.png';
import imovelC14 from '../assets/Arcadio/imovel-C-14.png';
import imovelC15 from '../assets/Arcadio/imovel-C-15.png';
import imovelC16 from '../assets/Arcadio/imovel-C-16.png';
import imovelC17 from '../assets/Arcadio/imovel-C-17.png';
import imovelC18 from '../assets/Arcadio/imovel-C-18.png';
import imovelC19 from '../assets/Arcadio/imovel-C-19.png';
import imovelC20 from '../assets/Arcadio/imovel-C-20.png';
import imovelC21 from '../assets/Arcadio/imovel-C-21.png';
import imovelC22 from '../assets/Arcadio/imovel-C-22.png';
import imovelC23 from '../assets/Arcadio/imovel-C-23.png';
import imovelC24 from '../assets/Arcadio/imovel-C-24.png';
import imovelC25 from '../assets/Arcadio/imovel-C-25.png';
import imovelC26 from '../assets/Arcadio/imovel-C-26.png';
import imovelC27 from '../assets/Arcadio/imovel-C-27.png';
import imovelC28 from '../assets/Arcadio/imovel-C-28.png';
import imovelC29 from '../assets/Arcadio/imovel-C-29.png';
import imovelC30 from '../assets/Arcadio/imovel-C-30.png';
import imovelC31 from '../assets/Arcadio/imovel-C-31.png';
import imovelC32 from '../assets/Arcadio/imovel-C-32.png';
import imovelC33 from '../assets/Arcadio/imovel-C-33.png';
import imovelC34 from '../assets/Arcadio/imovel-C-34.png';
import imovelC35 from '../assets/Arcadio/imovel-C-35.png';
import imovelC36 from '../assets/Arcadio/imovel-C-36.png';

import imagemGenerica from '../assets/imagemGenerica.jpg';
/* -------------------------------
   TEXTOS PUBLICITÁRIOS
-------------------------------- */
const anuncioImovelA = `
✨ Blue Marine | Home Resort ✨
Viva como se estivesse de férias todos os dias, a apenas 4 minutos do metrô São Judas e 6 minutos de Congonhas.
Studios a 3 dormitórios em um condomínio completo, com piscina de 25m, coworking, coliving, áreas gourmet, academia e lazer de resort.

Um verdadeiro refúgio urbano no coração da Zona Sul de São Paulo.
👉 Ideal para morar ou investir.

Blue Marine – entregue-se ao azul.
`;

const anuncioImovelB = `
✨ Agami Park Residences ✨
O privilégio de viver ao lado do Parque Ibirapuera, em um projeto com arquitetura internacional da Perkins&Will,
paisagismo de Benedito Abbud e interiores de Carlos Rossi.
Apartamentos de 215 a 571 m², com 3 e 4 suítes e serviços exclusivos.

👉 Uma verdadeira escultura de viver, feita para poucos.
`;

const anuncioImovelC = `
✨ Arkadio | World-Class Residence ✨
Um ícone internacional no Brooklin, assinado por Carlos Ott, com paisagismo de Benedito Abbud e interiores de Priscilla Zarzur.
Apartamentos de 107 a 180 m², até 4 suítes e lazer de resort a 112 m de altura.

👉 Sofisticação, exclusividade e design internacional em um endereço único.
`;

/* -------------------------------
   ESPECIFICAÇÕES TÉCNICAS
-------------------------------- */
const especificacoesImovelA = {
  "Geral": {
    "Área do terreno": "5.006,15 m²",
    "Torres": "1",
    "Pavimentos": "2 pavimentos de garagem + térreo + 16 pavimentos tipo",
    "Unidades por andar": "42",
    "Total de unidades": "704",
  },
  "Tipologias": {
    "Studios (25 a 26 m²)": "324 unidades (sem vaga)",
    "1 dormitório (34 a 35 m²)": "136 unidades (sem vaga)",
    "2 dormitórios (56 m²)": "132 unidades (1 vaga)",
    "3 dormitórios (76 m²)": "80 unidades (1 vaga)",
    "3 dormitórios (80 m²)": "32 unidades (1 vaga)",
  },
  "Vagas": {
    "Carros": "244",
    "Motos": "138",
  },
  "Áreas comuns": [
    "Piscina adulto de 25 m",
    "Piscina infantil",
    "Deck molhado",
    "Solarium / Pool Bar",
    "Quadra de esportes",
    "Playground",
    "Brinquedoteca",
    "Fitness",
    "Salão de festas (2)",
    "Espaços gourmet",
    "Coliving e coworking",
    "Minimarket, lavanderia, bicicletário",
    "Praça central e áreas de convivência",
  ],
  "Diferenciais": [
    "Fechaduras eletrônicas em todas as unidades",
    "Tomadas USB-C (opcional)",
    "Infraestrutura para ar-condicionado",
    "Automação de persianas (opcional)",
    "Ponto para carregador de carro elétrico",
    "Captação e reaproveitamento de água de chuva",
    "Áreas comuns entregues equipadas e decoradas",
  ]
};

const especificacoesImovelB = {
  "Geral": {
    "Área do terreno": "1.544,69 m²",
    "Torres": "1",
    "Pavimentos": "Térreo + 24 (incluindo duplex)",
    "Unidades por andar": "2",
    "Total de unidades": "45 (38 residenciais + 7 long stay + 1 loja)",
  },
  "Tipologias": {
    "Garden": "380 m² – 4 vagas",
    "Tipo final 1": "290 m² – 4 vagas",
    "Tipo final 2": "215 m² – 3 vagas",
    "Duplex final 1": "571 m² – 6 vagas",
    "Duplex final 2": "420 m² – 5 vagas",
  },
  "Vagas": {
    "Carros": "155",
    "PNE": "3",
    "Motos": "8",
  },
  "Elevadores": {
    "Sociais": "4",
    "Serviço": "2"
  },
  "Áreas comuns": [
    "Lobby galeria",
    "Salão de festas e lounge",
    "Brinquedoteca e playground",
    "Miniquadra gramada",
    "Meeting room e salão de jogos",
    "Piscina adulto de 25 m",
    "Piscina infantil",
    "Spa aquecido",
    "Fitness musculação, aeróbico e externo",
    "Lounge lareira",
    "Praça galeria e cascata com espelho d’água",
    "Pool bar e deck molhado"
  ],
  "Diferenciais": [
    "Arquitetura internacional – Perkins&Will",
    "Paisagismo Benedito Abbud",
    "Decoração Carlos Rossi",
    "Hall social privativo",
    "Pé-direito de 3,06 m",
    "Automação de persianas entregue",
    "Tomadas USB-C",
    "Infraestrutura para ar-condicionado",
    "Aquecimento de piso e toalheiro aquecido nos banheiros",
    "Gerador para áreas comuns e privativas",
    "Serviços pay-per-use: limpeza, lavanderia, conveniência, personal trainer, massagem, pet care, beleza",
    "Portaria e recepção 24h"
  ]
};

const especificacoesImovelC = {
  "Geral": {
    "Área do terreno": "4.942,72 m²",
    "Torres": "1",
    "Pavimentos": "4 subsolos + térreo + 33 residenciais + rooftop",
    "Altura": "112 m",
    "Total de unidades": "240 Residences + 36 Long Stay + 2 lojas",
  },
  "Tipologias Residences": {
    "Final 1": "180 m² – 4 suítes – 3 vagas",
    "Finais 2, 7 e 8": "142 m² – 4 dorms. (2 suítes) – 2 vagas",
    "Finais 3 a 6": "107 m² – 3 dorms. (1 suíte) – 2 vagas",
  },
  "Tipologias Long Stay": {
    "Unidades": "105 a 110 m² – 2 a 3 dorms. – 1 a 2 vagas"
  },
  "Lojas": {
    "Loja 1": "173 m²",
    "Loja 2": "79 m²"
  },
  "Vagas": {
    "Residences": "2 a 3 por unidade",
    "Long Stay": "1 a 2 por unidade",
    "Bicicletário": "240"
  },
  "Elevadores": {
    "Residences": "6 sociais + 1 serviço + 1 emergência",
    "Long Stay": "2 sociais + 1 serviço + 1 emergência"
  },
  "Áreas comuns": [
    "Rooftop: piscina adulto 25 m, piscina infantil, solarium, Sky Lounge, Sky Bar, Belvedere Lounge, Sky Beauty & Barber",
    "Térreo: lobby, salão de festas, lounge, gourmet com churrasqueira, quadra de tênis oficial, piscina coberta adulto e infantil, spa e sauna",
    "Fitness design by Cia Athletica",
    "Brinquedoteca e playground",
    "Salão de jogos",
    "Pet Place",
    "Meeting room"
  ],
  "Diferenciais": [
    "Art Design internacional – Carlos Ott",
    "Hall social privativo em diversas tipologias",
    "Piso nivelado nos terraços",
    "Automação de persianas entregue",
    "Infraestrutura para tomadas USB e ar-condicionado",
    "Gerador atendendo áreas comuns e unidades",
    "Totem para carro elétrico",
    "Reuso de águas pluviais",
    "Serviços Z Services pay-per-use (limpeza, lavanderia, personal trainer, massagem, pet care, gestão patrimonial)",
    "Áreas comuns entregues equipadas e decoradas"
  ]
};

/* -------------------------------
   DADOS DOS IMÓVEIS
-------------------------------- */
const dadosImoveis = {
  'A': {
    titulo: 'Blue Marine | Home Resort',
    galeria: [imovelA1, imovelA2, imovelA3, imovelA4, imovelA5, imovelA6, imovelA7, imovelA8, imovelA9, imovelA10, imovelA11, imovelA12, imovelA13, imovelA14, imovelA15,imovelA16, imovelA17, imovelA18, imovelA19, imovelA20, imovelA21, imovelA22, imovelA23],
    videoUrl: 'https://youtube.com/embed/R6ygYBwbnC4',
    pdfUrl: '/folhetos/FOLHETO.BM.pdf',
    anuncio: anuncioImovelA,
    especificacoes: especificacoesImovelA
  },
  'B': {
    titulo: 'Agami Park Residences',
    galeria: [imovelB1, imovelB2, imovelB3, imovelB4, imovelB5, imovelB6, imovelB7, imovelB8, imovelB9, imovelB10, imovelB11, imovelB12, imovelB13, imovelB14, imovelB15, imovelB16, imovelB17, imovelB18, imovelB19, imovelB20, imovelB21, imovelB22, imovelB23, imovelB24, imovelB25, imovelB26, imovelB27],
    videoUrl: 'https://youtube.com/embed/Z-4NPAqXfGI', 
    pdfUrl: '/folhetos/FOLHETO.AG.pdf',
    anuncio: anuncioImovelB,
    especificacoes: especificacoesImovelB
  },
  'C': {
    titulo: 'Arkadio – World-Class Residence',
    galeria: [imovelC1, imovelC2, imovelC3, imovelC4, imovelC5, imovelC6, imovelC7, imovelC8, imovelC9, imovelC10, imovelC11, imovelC12, imovelC13, imovelC14, imovelC15, imovelC16, imovelC17, imovelC18, imovelC19, imovelC20, imovelC21, imovelC22, imovelC23, imovelC24, imovelC25, imovelC26, imovelC27, imovelC28, imovelC29, imovelC30, imovelC31, imovelC32, imovelC33, imovelC34, imovelC35, imovelC36],
    videoUrl: 'https://youtube.com/embed/thG4po12aIA', 
    pdfUrl: '/folhetos/FOLHETO.AR.pdf',
    anuncio: anuncioImovelC,
    especificacoes: especificacoesImovelC
  },
  'D': {
    titulo: 'MAC | Vila Clementino',
    galeria: [imagemGenerica, imagemGenerica, imagemGenerica],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    pdfUrl: '/folhetos/folheto-d.pdf',
    anuncio: "MAC | Vila Clementino",
    especificacoes: { "Exemplo": "Dados MAC | Vila Clementino" }
  },
  'E': {
    titulo: 'Em breve novo lançamento!',
    galeria: [imagemGenerica, imagemGenerica, imagemGenerica],
    videoUrl: 'https://www.youtube.com/embed/yyyyy',
    pdfUrl: '/folhetos/folheto-e.pdf',
    anuncio: "Em breve novo lançamentos!",
    especificacoes: { "Exemplo": "Em breve novo lançamento!" }
  },
  'F': {
    titulo: 'Em breve novo lançamento!',
    galeria: [imagemGenerica, imagemGenerica, imagemGenerica],
    videoUrl: 'https://www.youtube.com/embed/yyyy',
    pdfUrl: '/folhetos/folheto-f.pdf',
    anuncio: "Em breve novos lançamento!",
    especificacoes: { "Exemplo": "Em breve novo lançamento!" }
  }
};

function DetalhesImovel() {
  const { id } = useParams();
  const imovel = dadosImoveis[id];
  const [showModal, setShowModal] = useState(false);

  if (!imovel) {
    return <div className="container my-5 text-center">Imóvel não encontrado.</div>;
  }

  const fotosGaleria = imovel.galeria;

  return (
    <>
      <div className="container my-5 page-content">
        <h2 className="text-center mb-4">{imovel.titulo}</h2>
        
        {/* Galeria */}
        <div className="row g-0 mb-4 galeria-imovel galeria-desktop">
          {fotosGaleria.slice(0, 2).map((imagem, index) => (
  <div key={index} className="col-12 col-md-4 foto-galeria">
    <img src={imagem} alt={`Galeria ${index + 1}`} className="img-fluid rounded shadow" />
  </div>
))}

{/* Card "Ver mais fotos" */}
<div className="col-12 col-md-4 position-relative d-flex justify-content-center align-items-center">
  <img
    src={fotosGaleria[2] || fotosGaleria[fotosGaleria.length - 1]}  
    alt="Ver mais"
    className="img-fluid rounded shadow"
    style={{ filter: 'brightness(50%)' }}
  />
  <button className="btn btn-light position-absolute" onClick={() => setShowModal(true)}>
    <FaPlusCircle className="me-2" />
    Ver mais fotos
  </button>
</div>
        </div>

        {/* Texto publicitário */}
        <div className="row mb-4">
          <div className="col-12 text-center">
            <pre className="lead text-center" style={{ whiteSpace: 'pre-wrap' }}>
              {imovel.anuncio}
            </pre>
          </div>
        </div>

        {/* Especificações técnicas */}
        <div className="row mb-5">
          <div className="col-12">
            <h3>Especificações Técnicas</h3>
            <ul className="list-group list-group-flush">
              {Object.entries(imovel.especificacoes).map(([categoria, conteudo]) => (
                <li key={categoria} className="list-group-item">
                  <strong>{categoria}</strong>
                  {Array.isArray(conteudo) ? (
                    <ul>
                      {conteudo.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  ) : typeof conteudo === 'object' ? (
                    <ul>
                      {Object.entries(conteudo).map(([sub, val]) => (
                        <li key={sub}><strong>{sub}</strong>: {val}</li>
                      ))}
                    </ul>
                  ) : (
                    <>: {conteudo}</>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Vídeo */}
        <div className="row mt-5">
          <div className="col-12">
            <h3>Vídeo do Empreendimento</h3>
            <div className="video-container">
              <iframe
                src={imovel.videoUrl}
                title="Vídeo do Empreendimento"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            </div>
          </div>
        </div>

        {/* Folheto */}
        <div className="row mt-5">
          <div className="col-12">
            <h3>Folheto do Empreendimento</h3>
            <div className="col-md-6 mx-auto">
              <a href={imovel.pdfUrl} download className="folheto-card">
                <FaDownload className="folheto-icon" />
                <span className="folheto-text">Baixar Folheto</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <GaleriaModal show={showModal} handleClose={() => setShowModal(false)} imagens={imovel.galeria} />
    </>
  );
}

export default DetalhesImovel;
