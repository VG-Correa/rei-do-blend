import { CategoriaAccordion } from './CategoriaAccordion';
import { categoriasMock, produtosMock } from '../core/products.mock';

export const ProdutosSection = () => {
  return (
    <section id="produtos" className="py-10 md:py-14 bg-gradient-to-br from-red-900 to-red-800">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nossos Produtos
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Cada blend é cuidadosamente desenvolvido para maximizar seu lucro e satisfação dos clientes
          </p>
        </div>

        <div className="space-y-6">
          {categoriasMock.map(categoria => (
            <CategoriaAccordion
              key={categoria.id}
              categoria={categoria}
              produtos={produtosMock.filter(p => p.categoria === categoria.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
