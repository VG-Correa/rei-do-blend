import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { Produto, Categoria } from '../core/products.mock';

interface CategoriaAccordionProps {
  categoria: Categoria;
  produtos: Produto[];
  btnColor: string;
  btnTextColor: string;
}

export const CategoriaAccordion = ({ categoria, produtos, btnColor="bg-gradient-to-r from-red-800 to-red-900", btnTextColor= "text-white/80" }: CategoriaAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={"mb-6 " + btnColor}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={"w-full p-4 rounded-xl flex items-center justify-between transition-all " + btnTextColor}
      >
        <div>
          <h3 className={"text-xl font-bold text-left " + btnTextColor}>{categoria.nome}</h3>
          <p className={"text-sm text-left" + btnTextColor}>{categoria.descricao}</p>
        </div>
        {isOpen ? (
          <ChevronUp size={24} className={btnTextColor} />
        ) : (
          <ChevronDown size={24} className={btnTextColor} />
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
