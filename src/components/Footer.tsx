import { GoogleMap } from './GoogleMap';
import LogoTransparente from '../assets/Logo com fundo transparente.png';

export const Footer = () => {
  return (
    <footer className="bg-[#320000] text-white pt-10 pb-6">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 flex items-center justify-center shadow-lg rounded-full overflow-hidden">
                <img 
                  src={LogoTransparente} 
                  alt="Rei do Blend Logo" 
                  className="w-full h-full object-contain filter brightness-125"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Rei do Blend</h3>
                <p className="text-gray-400 text-sm">Pai e Filho</p>
              </div>
            </div>
            
            <div className="text-gray-400 text-justify">
              <p className="flex items-center gap-2">
                <span>📍</span>
                Av. Ouro Fino, 896 - Bosque dos Eucaliptos, São José dos Campos / SP
              </p>
              <p className="flex items-center gap-2">
                <span>📱</span>
                (12) 98845-7268
              </p>
              <p className="flex items-center gap-2">
                <span>📧</span>
                contato@reidoblend.com.br
              </p>
            </div>
          </div>

          <div className="w-full h-full min-h-[200px]">
            <GoogleMap />
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Rei do Blend - Todos os direitos reservados</p>
          <p>Site by: solucoes.pec.dev@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};
