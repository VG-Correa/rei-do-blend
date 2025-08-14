import React, { useState } from 'react';
import { Link } from "react-router-dom";
// import LogoTransparente from '../assets/Logo com fundo transparente.png';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerOffset = 65; // altura do menu fixo em pixels
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
  setIsOpen(false);
};


  return (
    <header className="bg-[#320000] fixed w-full top-0 left-0 z-50 shadow-xl border-b border-[#2a0000]">
      <div className="container mx-auto flex justify-center items-center px-4 py-2 md:py-3">
        {/* <div className="flex items-center space-x-3"> */}
          {/* <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full p-1.5 shadow-lg backdrop-blur-sm">
            <img 
              src={LogoTransparente} 
              alt="Rei do Blend Logo" 
              className="w-full h-full object-contain filter drop-shadow-[0_0_3px_rgba(255,255,255,0.7)] drop-shadow-[0_0_2px_rgba(255,255,255,0.5)]" 
            />
          </div> */}
          {/* <span className="text-2xl font-extrabold text-white tracking-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">Rei do Blend</span> */}
        {/* </div> */}

        {/* Botão hamburguer só em telas pequenas */}
        <button
          className="md:hidden text-amarelo-claro focus:outline-none p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
        >
          <span className="text-3xl">☰</span>
        </button>

        {/* Menu Desktop */}
        <nav className="hidden md:flex md:items-center md:gap-6">
          <button onClick={() => scrollToSection('inicio')} className="flex items-center justify-center py-2 px-4 font-semibold text-yellow-400 hover:bg-yellow-400/10 rounded-lg transition-all duration-200">Início</button>
          <button onClick={() => scrollToSection('sobre')} className="flex items-center justify-center py-2 px-4 font-semibold text-yellow-400 hover:bg-yellow-400/10 rounded-lg transition-all duration-200">Sobre</button>
          <button onClick={() => scrollToSection('produtos')} className="flex items-center justify-center py-2 px-4 font-semibold text-yellow-400 hover:bg-yellow-400/10 rounded-lg transition-all duration-200">Produtos</button>
          <button onClick={() => scrollToSection('processo')} className="flex items-center justify-center py-2 px-4 font-semibold text-yellow-400 hover:bg-yellow-400/10 rounded-lg transition-all duration-200">Processo</button>
          {/* <button onClick={() => scrollToSection('depoimentos')} className="flex items-center justify-center py-2 px-4 font-semibold text-yellow-400 hover:bg-yellow-400/10 rounded-lg transition-all duration-200">Depoimentos</button> */}
          <button onClick={() => scrollToSection('contato')} className="flex items-center justify-center py-2 px-6 font-bold text-yellow-400 border-2 border-yellow-400 rounded-full hover:bg-yellow-400 hover:text-red-900 transition-all duration-200">Contato</button>
          <Link to="/white">
            <button className="flex items-center justify-center py-2 px-6 font-bold text-yellow-400 border-2 border-yellow-400 rounded-full hover:bg-yellow-400 hover:text-red-900 transition-all duration-200">White</button>
          </Link>
          <Link to="/">
            <button className="flex items-center justify-center py-2 px-6 font-bold text-yellow-400 border-2 border-yellow-400 rounded-full hover:bg-yellow-400 hover:text-red-900 transition-all duration-200">/</button>
          </Link>
        </nav>

        {/* Menu Mobile */}
        {isOpen && (
          <nav className="absolute top-full left-0 w-full bg-[#320000] p-4 flex flex-col gap-2 shadow-xl border-b border-[#2a0000] md:hidden animate-fade-in">
            <button onClick={() => scrollToSection('inicio')} className="flex items-center justify-center py-2 px-4 font-semibold text-yellow-400 hover:bg-yellow-400/10 rounded-lg transition-all duration-200">Início</button>
            <button onClick={() => scrollToSection('sobre')} className="flex items-center justify-center py-2 px-4 font-semibold text-yellow-400 hover:bg-yellow-400/10 rounded-lg transition-all duration-200">Sobre</button>
            <button onClick={() => scrollToSection('produtos')} className="flex items-center justify-center py-2 px-4 font-semibold text-yellow-400 hover:bg-yellow-400/10 rounded-lg transition-all duration-200">Produtos</button>
            <button onClick={() => scrollToSection('processo')} className="flex items-center justify-center py-2 px-4 font-semibold text-yellow-400 hover:bg-yellow-400/10 rounded-lg transition-all duration-200">Processo</button>
            {/* <button onClick={() => scrollToSection('depoimentos')} className="flex items-center justify-center py-2 px-4 font-semibold text-yellow-400 hover:bg-yellow-400/10 rounded-lg transition-all duration-200">Depoimentos</button> */}
            <button onClick={() => scrollToSection('contato')} className="flex items-center justify-center py-2 px-6 font-bold text-yellow-400 border-2 border-yellow-400 rounded-full hover:bg-yellow-400 hover:text-red-900 transition-all duration-200">Contato</button>
            <Link to="/white">
              <button className="flex items-center justify-center py-2 px-6 font-bold text-yellow-400 border-2 border-yellow-400 rounded-full hover:bg-yellow-400 hover:text-red-900 transition-all duration-200">White</button>
            </Link>
            <Link to "/">
              <button className="" >/</button>
            </Link>

          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
