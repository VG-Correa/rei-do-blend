import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { Produto, Categoria } from '../core/products.mock';

interface CategoriaAccordionProps {
  categoria: Categoria;
  produtos: Produto[];
}

export const CategoriaAccordion = ({ categoria, produtos }: CategoriaAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-gradient-to-r from-red-800 to-red-900 p-4 rounded-xl flex items-center justify-between text-white hover:from-red-700 hover:to-red-800 transition-all"
      >
        <div>
          <h3 className="text-xl font-bold text-left">{categoria.nome}</h3>
          <p className="text-sm text-left text-white/80">{categoria.descricao}</p>
        </div>
        {isOpen ? (
          <ChevronUp size={24} className="text-white/80" />
        ) : (
          <ChevronDown size={24} className="text-white/80" />
        )}
      </button>

      {isOpen && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 animate-fadeIn">
          {produtos.map(produto => (
            <div
              key={produto.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={produto.imagem}
                alt={produto.nome}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-lg font-bold text-red-900">{produto.nome}</h4>
                  {produto.destaque && (
                    <span className="bg-yellow-400 text-red-900 text-xs font-bold px-2 py-1 rounded-full">
                      DESTAQUE
                    </span>
                  )}
                </div>
                <p className="text-gray-600 text-sm">{produto.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
