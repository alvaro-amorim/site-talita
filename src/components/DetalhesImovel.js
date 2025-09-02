// src/components/DetalhesImovel.js

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaPlusCircle, FaDownload } from 'react-icons/fa';
import GaleriaModal from './GaleriaModal';
import './DetalhesImovel.css';

// Importe todas as imagens necessárias.
import imovelA1 from '../assets/imovel-A-1.jpg';
import imovelA2 from '../assets/imovel-A-2.jpg';
import imovelA3 from '../assets/imovel-A-3.jpg';
import imovelB1 from '../assets/imovel-B-1.jpg';
import imovelB2 from '../assets/imovel-B-2.jpg';
import imovelB3 from '../assets/imovel-B-3.jpg';
import imovelC1 from '../assets/imovel-C-1.jpg';
import imovelC2 from '../assets/imovel-C-2.jpg';
import imovelC3 from '../assets/imovel-C-3.jpg';
import imovelC4 from '../assets/imovel-C-4.jpg';
import imovelC5 from '../assets/imovel-C-5.jpg';
import imovelC6 from '../assets/imovel-C-6.jpg';

import lancamento1 from '../assets/lancamento1.jpg';
import lancamento2 from '../assets/lancamento2.jpg';
import lancamento3 from '../assets/lancamento3.jpg';

// --- NOVO: Texto publicitário exclusivo para cada imóvel ---
const anuncioImovelA = `
✨ Blue Marine Home Resort ✨
Viva como se estivesse de férias todos os dias, a apenas 4 minutos do metrô São Judas e 6 minutos de Congonhas.
Studios a 3 dormitórios em um condomínio completo, com piscina de 25m, coworking, coliving, áreas gourmet, academia e lazer de resort.

Um verdadeiro refúgio urbano no coração da Zona Sul de São Paulo.
👉 Ideal para morar ou investir.

Blue Marine – entregue-se ao azul.
`;

const anuncioImovelB = `
🏢 **Lançamento Villa Nova** 🏢
Localização privilegiada na Vila Olímpia. Próximo a centros comerciais, parques e com fácil acesso às principais vias da cidade. 
Apartamentos de 2 e 3 dormitórios com plantas inteligentes e área de lazer completa.
`;

const anuncioImovelC = `
🏡 **Residencial Jardim das Flores** 🏡
Oásis de tranquilidade no Brooklin. Apartamentos de alto padrão com varanda gourmet e vista para o verde. 
Infraestrutura completa com piscina aquecida, quadra de tênis e salão de festas.
Perfeito para quem busca conforto e qualidade de vida.
`;

// O texto para os outros imóveis segue o mesmo padrão.
const anuncioImovelD = `
🏙️ **Skyline Residences** 🏙️
Modernidade e sofisticação no centro de São Paulo. Studios e apartamentos de 1 dormitório projetados para a vida moderna. 
Áreas comuns com rooftop, academia e espaço de co-working. Uma oportunidade única para investidores.
`;

const anuncioImovelE = `
🌿 **Parque das Árvores** 🌿
Apartamentos de 3 e 4 suítes, com vista deslumbrante para a Serra da Cantareira. 
Um projeto que une natureza e design, com espaços amplos e áreas de lazer pensadas para toda a família. Viva cercado pela natureza sem abrir mão da comodidade da cidade.
`;

const anuncioImovelF = `
🌅 **Sunset Towers** 🌅
Vistas espetaculares e pôr do sol inesquecível todos os dias. Localizado na orla de Santos, o Sunset Towers oferece o máximo em conforto e luxo. 
Apartamentos de 2 a 4 dormitórios com amplas varandas e lazer de clube. O paraíso é aqui!
`;

// --- NOVO: Especificações técnicas exclusivas para cada imóvel ---
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
        "Área do terreno": "3.500 m²",
        "Torres": "2",
        "Pavimentos": "20 andares",
        "Total de unidades": "250",
    },
    "Tipologias": {
        "2 dormitórios": "90 unidades (1 vaga)",
        "3 dormitórios": "160 unidades (2 vagas)",
    },
    "Áreas comuns": [
        "Piscina adulto e infantil",
        "Academia completa",
        "Salão de festas",
        "Churrasqueira",
        "Quadra poliesportiva",
        "Espaço Pet"
    ],
    "Diferenciais": [
        "Gerador de energia para áreas comuns",
        "Reaproveitamento de água da chuva",
        "Medição de água e gás individualizada"
    ]
};

const especificacoesImovelC = {
    "Geral": {
        "Área do terreno": "6.200 m²",
        "Torres": "3",
        "Total de unidades": "300",
    },
    "Tipologias": {
        "3 dormitórios (100 m²)": "150 unidades",
        "4 dormitórios (130 m²)": "150 unidades",
    },
    "Áreas comuns": [
        "Piscina com raia de 25m",
        "Quadra de tênis oficial",
        "Salão de festas com espaço gourmet",
        "Brinquedoteca e playground",
        "Sauna e sala de massagem"
    ],
    "Diferenciais": [
        "Varanda gourmet com churrasqueira a carvão",
        "Infraestrutura para ar-condicionado",
        "Fechadura biométrica na porta social"
    ]
};

const especificacoesImovelD = {
    "Geral": {
        "Área do terreno": "2.800 m²",
        "Torres": "1",
        "Total de unidades": "450",
    },
    "Tipologias": {
        "Studios": "250 unidades",
        "1 dormitório": "200 unidades",
    },
    "Áreas comuns": [
        "Rooftop com vista panorâmica",
        "Piscina e deck",
        "Academia 24h",
        "Lavanderia coletiva",
        "Co-working"
    ],
    "Diferenciais": [
        "Fechaduras inteligentes",
        "Wi-fi nas áreas comuns",
        "Serviços pay-per-use"
    ]
};

const especificacoesImovelE = {
    "Geral": {
        "Área do terreno": "8.500 m²",
        "Torres": "4",
        "Total de unidades": "220",
    },
    "Tipologias": {
        "3 suítes (120 m²)": "110 unidades",
        "4 suítes (150 m²)": "110 unidades",
    },
    "Áreas comuns": [
        "Piscina biológica",
        "Trilha para caminhada",
        "Espaço para fogueira",
        "Quadra de beach tennis",
        "Salão de festas"
    ],
    "Diferenciais": [
        "Integração com a natureza",
        "Sistema de aquecimento solar",
        "Janelas amplas com persianas automáticas"
    ]
};

const especificacoesImovelF = {
    "Geral": {
        "Área do terreno": "7.000 m²",
        "Torres": "2",
        "Total de unidades": "350",
    },
    "Tipologias": {
        "2 dormitórios": "150 unidades",
        "3 dormitórios": "200 unidades",
    },
    "Áreas comuns": [
        "Clube de frente para o mar",
        "Piscina com borda infinita",
        "Academia com vista para o mar",
        "SPA e sauna",
        "Cinema"
    ],
    "Diferenciais": [
        "Vistas panorâmicas",
        "Varanda gourmet com churrasqueira",
        "Serviço de concierge na praia"
    ]
};

// --- Dados dos imóveis A a F (cada um com seus dados exclusivos) ---
const dadosImoveis = {
    'A': {
        titulo: 'Blue Marine Home Resort',
        galeria: [imovelA1, imovelA2, imovelA3],
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        pdfUrl: '/folhetos/folheto-a.pdf',
        anuncio: anuncioImovelA,
        especificacoes: especificacoesImovelA
    },
    'B': {
        titulo: 'Villa Nova Residences',
        galeria: [imovelB1, imovelB2, imovelB3],
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        pdfUrl: '/folhetos/folheto-b.pdf',
        anuncio: anuncioImovelB,
        especificacoes: especificacoesImovelB
    },
    'C': {
        titulo: 'Residencial Jardim das Flores',
        galeria: [imovelC1, imovelC2, imovelC3, imovelC4, imovelC5, imovelC6],
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        pdfUrl: '/folhetos/folheto-c.pdf',
        anuncio: anuncioImovelC,
        especificacoes: especificacoesImovelC
    },
    'D': {
        titulo: 'Skyline Residences',
        galeria: [lancamento1, lancamento2, lancamento3],
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        pdfUrl: '/folhetos/folheto-d.pdf',
        anuncio: anuncioImovelD,
        especificacoes: especificacoesImovelD
    },
    'E': {
        titulo: 'Parque das Árvores',
        galeria: [lancamento1, lancamento2, lancamento3],
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        pdfUrl: '/folhetos/folheto-e.pdf',
        anuncio: anuncioImovelE,
        especificacoes: especificacoesImovelE
    },
    'F': {
        titulo: 'Sunset Towers',
        galeria: [lancamento1, lancamento2, lancamento3],
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        pdfUrl: '/folhetos/folheto-f.pdf',
        anuncio: anuncioImovelF,
        especificacoes: especificacoesImovelF
    }
};

function DetalhesImovel() {
    const { id } = useParams();
    const imovel = dadosImoveis[id];
    const [showModal, setShowModal] = useState(false);

    if (!imovel) {
        return <div className="container my-5 text-center">Imóvel não encontrado.</div>;
    }

    // --- NOVO: Lógica para renderizar todas as fotos no desktop ---
    const fotosGaleria = imovel.galeria;

    return (
        <>
            <div className="container my-5 page-content">
                <h2 className="text-center mb-4">{imovel.titulo}</h2>
                
                {/* Galeria */}
                {/* NOVO: Adicionei a classe 'galeria-desktop' para o layout em desktop */}
                <div className="row g-0 mb-4 galeria-imovel galeria-desktop">
                    {/* NOVO: Renderiza todas as fotos do imóvel */}
                    {fotosGaleria.map((imagem, index) => (
                        <div key={index} className="col-12 col-md-4 foto-galeria">
                            <img src={imagem} alt={`Galeria ${index + 1}`} className="img-fluid rounded shadow" />
                        </div>
                    ))}
                    {/* NOVO: Botão 'Ver mais fotos' */}
                    <div className="col-12 col-md-4 position-relative d-flex justify-content-center align-items-center">
                        <img src={fotosGaleria[fotosGaleria.length - 1]} alt="Ver mais" className="img-fluid rounded shadow" style={{ filter: 'brightness(50%)' }} />
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

                {/* Especificações técnicas hierárquicas */}
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