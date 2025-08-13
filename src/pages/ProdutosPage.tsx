import React from 'react';
import { produtosMock } from '../core/products.mock';
import ProductCard from '../components/ProductCard';

const ProdutosPage: React.FC = () => (
  <div className="flex flex-col items-center p-6">
    <h1 className="text-2xl font-bold mb-4">Vitrine de Produtos</h1>
    <div className="flex flex-wrap gap-6 justify-center w-full">
      {produtosMock.map((produto) => (
        <ProductCard key={produto.id} produto={produto} />
      ))}
    </div>
  </div>
);

export default ProdutosPage;
