import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className="bg-[#320000] fixed w-full top-0 left-0 z-50 shadow-xl border-b border-[#2a0000]">
      <div className="container mx-auto flex justify-between items-center px-4 py-2 md:py-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-amarelo-claro to-amarelo-escuro rounded-full flex items-center justify-center shadow-lg">
            <span className="font-bold text-[#320000] text-xl">R</span>
          </div>
          <span className="text-2xl font-extrabold text-white tracking-tight drop-shadow">Rei do Blend</span>
        </div>

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
          <button onClick={() => scrollToSection('inicio')} className="py-2 px-4 font-semibold text-amarelo-claro hover:text-white hover:bg-[#4B0000] rounded-lg transition-all duration-200 hover:scale-105">Início</button>
          <button onClick={() => scrollToSection('sobre')} className="py-2 px-4 font-semibold text-amarelo-claro hover:text-white hover:bg-[#4B0000] rounded-lg transition-all duration-200 hover:scale-105">Sobre</button>
          <button onClick={() => scrollToSection('produtos')} className="py-2 px-4 font-semibold text-amarelo-claro hover:text-white hover:bg-[#4B0000] rounded-lg transition-all duration-200 hover:scale-105">Produtos</button>
          <button onClick={() => scrollToSection('processo')} className="py-2 px-4 font-semibold text-amarelo-claro hover:text-white hover:bg-[#4B0000] rounded-lg transition-all duration-200 hover:scale-105">Processo</button>
          <button onClick={() => scrollToSection('depoimentos')} className="py-2 px-4 font-semibold text-amarelo-claro hover:text-white hover:bg-[#4B0000] rounded-lg transition-all duration-200 hover:scale-105">Depoimentos</button>
          <button onClick={() => scrollToSection('contato')} className="py-2 px-6 font-bold text-[#320000] bg-gradient-to-r from-amarelo-claro to-amarelo-escuro rounded-full hover:from-amarelo-hover hover:to-amarelo-escuro hover:text-white transition-all duration-200 hover:scale-105 shadow-lg border-2 border-amarelo-claro">Contato</button>
        </nav>

        {/* Menu Mobile */}
        {isOpen && (
          <nav className="absolute top-full left-0 w-full bg-[#320000] p-4 flex flex-col gap-2 shadow-xl border-b border-[#2a0000] md:hidden animate-fade-in">
            <button onClick={() => scrollToSection('inicio')} className="py-2 px-4 font-semibold text-amarelo-claro hover:text-white hover:bg-[#4B0000] rounded-lg transition-all duration-200">Início</button>
            <button onClick={() => scrollToSection('sobre')} className="py-2 px-4 font-semibold text-amarelo-claro hover:text-white hover:bg-[#4B0000] rounded-lg transition-all duration-200">Sobre</button>
            <button onClick={() => scrollToSection('produtos')} className="py-2 px-4 font-semibold text-amarelo-claro hover:text-white hover:bg-[#4B0000] rounded-lg transition-all duration-200">Produtos</button>
            <button onClick={() => scrollToSection('processo')} className="py-2 px-4 font-semibold text-amarelo-claro hover:text-white hover:bg-[#4B0000] rounded-lg transition-all duration-200">Processo</button>
            <button onClick={() => scrollToSection('depoimentos')} className="py-2 px-4 font-semibold text-amarelo-claro hover:text-white hover:bg-[#4B0000] rounded-lg transition-all duration-200">Depoimentos</button>
            <button onClick={() => scrollToSection('contato')} className="py-2 px-6 font-bold text-[#320000] bg-gradient-to-r from-amarelo-claro to-amarelo-escuro rounded-full hover:from-amarelo-hover hover:to-amarelo-escuro hover:text-white transition-all duration-200 shadow-lg border-2 border-amarelo-claro">Contato</button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
