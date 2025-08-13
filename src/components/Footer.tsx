import { GoogleMap } from './GoogleMap';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-10 pb-6">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="font-bold text-red-900 text-xl">R</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Rei do Blend</h3>
                <p className="text-gray-400 text-sm">Pai e Filho - desde 2010</p>
              </div>
            </div>
            
            <div className="space-y-4 text-gray-400">
              <p className="flex items-center gap-2">
                <span>📍</span>
                Av. Ouro Fino, 896 - Bosque dos Eucaliptos, São José dos Campos
              </p>
              <p className="flex items-center gap-2">
                <span>📱</span>
                (11) 9999-9999
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
        </div>
      </div>
    </footer>
  );
};
