// src/components/DetalhesImovel.js

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaPlusCircle } from 'react-icons/fa';
import GaleriaModal from './GaleriaModal';

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
import imovelC4 from '../assets/imovel-C-4.jpg';
import imovelC5 from '../assets/imovel-C-5.jpg';
import imovelC6 from '../assets/imovel-C-6.jpg';

// Importações dos Lançamentos
import lancamento1 from '../assets/lancamento1.jpg';
import lancamento2 from '../assets/lancamento2.jpg';
import lancamento3 from '../assets/lancamento3.jpg';

const dadosImoveis = {
    'A': {
        titulo: 'Apartamento de Luxo',
        galeria: [imovelA1, imovelA2, imovelA3],
        especificacoes: {
            'Área': '120m²',
            'Quartos': '3',
            'Banheiros': '2',
            'Vagas de garagem': '2',
            'Valor do condomínio': 'R$ 800'
        }
    },
    'B': {
        titulo: 'Casa com Jardim',
        galeria: [imovelB1, imovelB2, imovelB3],
        especificacoes: {
            'Área': '150m²',
            'Quartos': '4',
            'Banheiros': '3',
            'Vagas de garagem': '2',
            'Valor do IPTU': 'R$ 1.200'
        }
    },
    'C': {
        titulo: 'Loft Moderno',
        galeria: [imovelC1, imovelC2, imovelC3, imovelC4, imovelC5, imovelC6],
        especificacoes: {
            'Área': '85m²',
            'Quartos': '1',
            'Banheiros': '1',
            'Vagas de garagem': '1',
            'Valor do condomínio': 'R$ 550'
        }
    },
    'D': {
        titulo: 'Residencial Vida Nova',
        galeria: [lancamento1, lancamento2, lancamento3],
        especificacoes: {
            'Estágio da obra': 'Em lançamento',
            'Quartos': '2-3',
            'Banheiros': '1-2',
            'Valor do condomínio': 'Estimado: R$ 400'
        }
    },
    'E': {
        titulo: 'Condomínio Flórida',
        galeria: [lancamento1, lancamento2, lancamento3],
        especificacoes: {
            'Estágio da obra': 'Em construção',
            'Quartos': '3-4',
            'Banheiros': '3',
            'Vagas de garagem': '2'
        }
    },
    'F': {
        titulo: 'Oceano Residences',
        galeria: [lancamento1, lancamento2, lancamento3],
        especificacoes: {
            'Estágio da obra': 'Breve lançamento',
            'Tipo': 'Apartamento',
            'Metragem': '60m² - 100m²'
        }
    },
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
                
                <div className="row g-3 mb-5">
                    {fotosVisiveis.map((imagem, index) => (
                        <div key={index} className="col-md-4">
                            <img src={imagem} alt={`Galeria ${index + 1}`} className="img-fluid rounded shadow" />
                        </div>
                    ))}
                    {fotosRestantes.length > 0 && (
                        <div className="col-md-4 position-relative d-flex justify-content-center align-items-center">
                            <img src={fotosVisiveis[1]} alt="Ver mais" className="img-fluid rounded shadow" style={{ filter: 'brightness(50%)' }} />
                            <button className="btn btn-light position-absolute" onClick={() => setShowModal(true)}>
                                <FaPlusCircle className="me-2" />
                                Ver mais fotos
                            </button>
                        </div>
                    )}
                </div>

                <div className="row">
                    <div className="col-12">
                        <h3>Especificações Técnicas</h3>
                        <ul className="list-group list-group-flush">
                            {Object.entries(imovel.especificacoes).map(([chave, valor]) => (
                                <li key={chave} className="list-group-item">{chave}: {valor}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            
            <GaleriaModal show={showModal} handleClose={() => setShowModal(false)} imagens={imovel.galeria} />
        </>
    );
}

export default DetalhesImovel;