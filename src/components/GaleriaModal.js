import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import './GaleriaModal.css';

function GaleriaModal({ show, handleClose, imagens }) {
  return (
    <Modal show={show} onHide={handleClose} dialogClassName="modal-personalizado" centered>
      <Modal.Header closeButton>
        <Modal.Title>Galeria de Imagens</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Carousel>
          {imagens.map((imagem, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={imagem}
                alt={`Slide ${index}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Modal.Body>
    </Modal>
  );
}

export default GaleriaModal;