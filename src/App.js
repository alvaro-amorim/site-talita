import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Imoveis from './components/Imoveis';
import Lancamentos from './components/Lancamentos';
import DetalhesImovel from './components/DetalhesImovel';
import SobreMim from './components/SobreMim';
import Contato from './components/Contato';
import Footer from './components/Footer';
import ChatModal from './components/ChatModal';
import bonecaClick from './assets/boneca-click.png'; // importa a boneca
import './App.css';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const openChatModal = () => {
    setIsChatOpen(true);
  };

  const closeChatModal = () => {
    setIsChatOpen(false);
  };

  return (
    <Router>
      <div className="App-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/imoveis" element={<Imoveis />} />
          <Route path="/lancamentos" element={<Lancamentos />} />
          <Route path="/detalhes/:id" element={<DetalhesImovel />} />
          <Route path="/sobre" element={<SobreMim />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>

        <div className="boneca-wrapper">
  <img
    src={bonecaClick}
    alt="Boneca apontando para o chat"
    className="boneca-ground"
  />
</div>

        <Footer openChat={openChatModal} />
        <ChatModal show={isChatOpen} onClose={closeChatModal} />
      </div>
    </Router>
  );
}

export default App;
