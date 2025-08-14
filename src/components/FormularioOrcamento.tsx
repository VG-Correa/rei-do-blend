import { useRef } from 'react';

export const FormularioOrcamento = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de envio do formulário
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-2xl">      
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Nome Completo *</label>
            <input 
              type="text" 
              className="text-gray-800 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
              placeholder="Seu nome"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Telefone/WhatsApp *</label>
            <input 
              type="tel" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all text-gray-800"
              placeholder="(11) 99999-9999"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">E-mail *</label>
          <input 
            type="email" 
            className="text-gray-800 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
            placeholder="seu@email.com"
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Nome do Estabelecimento</label>
            <input 
              type="text" 
              className="text-gray-800 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
              placeholder="Nome da sua lanchonete/restaurante"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Tipo de Estabelecimento</label>
            <select className="text-gray-800 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all">
              <option value="">Selecione</option>
              <option value="lanchonete">Lanchonete</option>
              <option value="restaurante">Restaurante</option>
              <option value="food-truck">Food Truck</option>
              <option value="mercado">Mercadinho</option>
              <option value="delivery">Delivery</option>
              <option value="outro">Outro</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Mensagem</label>
          <textarea 
            rows={4} 
            className="text-gray-800 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all resize-none"
            placeholder="Conte-nos mais sobre seu negócio e suas necessidades..."
          ></textarea>
        </div>

        <button 
          type="submit"
          className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-red-900 py-4 rounded-lg font-bold text-lg hover:from-red-800 hover:to-red-900 hover:text-yellow-400 transition-all transform hover:scale-105 shadow-lg"
        >
          ENVIAR
        </button>
      </form>
    </div>
  );
};
