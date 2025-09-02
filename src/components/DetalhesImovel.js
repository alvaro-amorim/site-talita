// src/components/DetalhesImovel.js

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaPlusCircle, FaDownload } from 'react-icons/fa';
import GaleriaModal from './GaleriaModal';
import './DetalhesImovel.css';

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

// --- Texto publicitário único ---
const anuncioBlueMarine = `
✨ Blue Marine Home Resort ✨
Viva como se estivesse de férias todos os dias, a apenas 4 minutos do metrô São Judas e 6 minutos de Congonhas.
Studios a 3 dormitórios em um condomínio completo, com piscina de 25m, coworking, coliving, áreas gourmet, academia e lazer de resort.

Um verdadeiro refúgio urbano no coração da Zona Sul de São Paulo.
👉 Ideal para morar ou investir.

Blue Marine – entregue-se ao azul.
`;

// --- Especificações técnicas estruturadas ---
const especificacoesBlueMarine = {
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

// --- Dados dos imóveis A a F (todos herdam Blue Marine) ---
const dadosImoveis = {
    'A': {
        titulo: 'Blue Marine Home Resort',
        galeria: [imovelA1, imovelA2, imovelA3],
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        pdfUrl: '/folhetos/folheto-a.pdf',
        anuncio: anuncioBlueMarine,
        especificacoes: especificacoesBlueMarine
    },
    'B': {
        titulo: 'Blue Marine Home Resort',
        galeria: [imovelB1, imovelB2, imovelB3],
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        pdfUrl: '/folhetos/folheto-b.pdf',
        anuncio: anuncioBlueMarine,
        especificacoes: especificacoesBlueMarine
    },
    'C': {
        titulo: 'Blue Marine Home Resort',
        galeria: [imovelC1, imovelC2, imovelC3, imovelC4, imovelC5, imovelC6],
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        pdfUrl: '/folhetos/folheto-c.pdf',
        anuncio: anuncioBlueMarine,
        especificacoes: especificacoesBlueMarine
    },
    'D': {
        titulo: 'Blue Marine Home Resort',
        galeria: [lancamento1, lancamento2, lancamento3],
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        pdfUrl: '/folhetos/folheto-d.pdf',
        anuncio: anuncioBlueMarine,
        especificacoes: especificacoesBlueMarine
    },
    'E': {
        titulo: 'Blue Marine Home Resort',
        galeria: [lancamento1, lancamento2, lancamento3],
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        pdfUrl: '/folhetos/folheto-e.pdf',
        anuncio: anuncioBlueMarine,
        especificacoes: especificacoesBlueMarine
    },
    'F': {
        titulo: 'Blue Marine Home Resort',
        galeria: [lancamento1, lancamento2, lancamento3],
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        pdfUrl: '/folhetos/folheto-f.pdf',
        anuncio: anuncioBlueMarine,
        especificacoes: especificacoesBlueMarine
    }
};

function DetalhesImovel() {
    const { id } = useParams();
    const imovel = dadosImoveis[id];
    const [showModal, setShowModal] = useState(false);

    if (!imovel) {
        return <div className="container my-5 text-center">Imóvel não encontrado.</div>;
    }

    const fotosVisiveis = imovel.galeria.slice(0, 2);
    const fotosRestantes = imovel.galeria.slice(2);

    return (
        <>
            <div className="container my-5 page-content">
                <h2 className="text-center mb-4">{imovel.titulo}</h2>
                
                {/* Galeria */}
                <div className="row g-0 mb-4 galeria-imovel">
                    {fotosVisiveis.map((imagem, index) => (
                        <div key={index} className="col-6">
                            <img src={imagem} alt={`Galeria ${index + 1}`} className="img-fluid rounded shadow" />
                        </div>
                    ))}
                    {fotosRestantes.length > 0 && (
                        <div className="col-6 position-relative d-flex justify-content-center align-items-center">
                            <img src={fotosVisiveis[1]} alt="Ver mais" className="img-fluid rounded shadow" style={{ filter: 'brightness(50%)' }} />
                            <button className="btn btn-light position-absolute" onClick={() => setShowModal(true)}>
                                <FaPlusCircle className="me-2" />
                                Ver mais fotos
                            </button>
                        </div>
                    )}
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
