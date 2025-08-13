
import { useEffect, useRef } from 'react';
import { parceirosMock } from '../core/parceiros.mock';

export const ParceirosSection = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let position = 0;
    const speed = 1; // velocidade do movimento
    
    const animate = () => {
      if (!carouselRef.current) return;
      
      position -= speed;
      if (-position >= carouselRef.current.offsetWidth) {
        position = 0;
      }
      
      carouselRef.current.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    };
    
    const animation = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animation);
  }, []);

  // Duplicar os parceiros para efeito de loop infinito
  const parceiros = [...parceirosMock, ...parceirosMock];

  return (
    <section id="parceiros" className="py-20 bg-gradient-to-br from-yellow-100 to-yellow-50 mb-6">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-cinzaescuro mb-4 font-logo">Parceiros</h2>
          <p className="text-xl text-cinzaescuro/80 max-w-2xl mx-auto font-sans">
            Empresas e lojas que confiam no Rei do Blend para oferecer o melhor aos seus clientes.
          </p>
        </div>
        <div className="overflow-hidden relative">
          <div
            ref={carouselRef}
            className="flex space-x-8"
            style={{ 
              willChange: 'transform',
              transition: 'transform 0.1s linear'
            }}
          >
            {parceiros.map((parceiro, idx) => (
              <div
                key={parceiro.id + '-' + idx}
                className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-6 min-w-[220px] max-w-xs mx-2"
                style={{ flex: '0 0 280px' }}
              >
                <img
                  src={parceiro.logo}
                  alt={parceiro.nome}
                  className="w-24 h-24 object-contain mb-4"
                  draggable={false}
                />
                <div className="font-bold text-cinzaescuro text-lg mb-1 text-center">{parceiro.nome}</div>
                <div className="text-gray-500 text-sm text-center">{parceiro.descricao}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
