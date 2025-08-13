import React from 'react';
import type { Produto } from '../core/products.mock';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  produto: Produto;
}

const ProductCard: React.FC<ProductCardProps> = ({ produto }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-start w-full max-w-xs text-black">
      <h2 className="text-lg font-bold mb-1">{produto.nome}</h2>
      <p className="text-sm mb-2 line-clamp-2">{produto.descricao}</p>
      <span className="text-xs mb-2">Peso: {produto.pesoPorUnidade}</span>
      <span className="text-xs mb-2">Valor: R$ {produto.valorPorUnidade?.toFixed(2)}</span>
      <span className="text-xs mb-2">Nota: {produto.nota?.toFixed(1)} / 10</span>
      <Link
        to={`/produtos/${produto.id}`}
        className="mt-2 px-3 py-1 bg-red-800 text-white rounded hover:bg-red-700 text-xs font-semibold"
      >
        Ver detalhes
      </Link>
    </div>
  );
};

export default ProductCard;
