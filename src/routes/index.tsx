import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import SobrePage from '../pages/SobrePage';
import ProdutosPage from '../pages/ProdutosPage';
import ContatoPage from '../pages/ContatoPage';
import DetalheProdutoPage from '../pages/DetalheProdutoPage';
import LandingPageWhite from '../pages/LandingPageWhite';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/white" element={<LandingPageWhite />} />
    <Route path="/sobre" element={<SobrePage />} />
    <Route path="/produtos" element={<ProdutosPage />} />
    <Route path="/contato" element={<ContatoPage />} />
    <Route path="/produtos/:id" element={<DetalheProdutoPage />} />
  </Routes>
);

export default AppRoutes;
