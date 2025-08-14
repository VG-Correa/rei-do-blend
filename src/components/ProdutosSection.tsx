import { CategoriaAccordion } from './CategoriaAccordion';
import { categoriasMock, produtosMock } from '../core/products.mock';

export const ProdutosSection = ({bgColor = "bg-gradient-to-br from-red-900 to-red-800", titleColor = "text-white", txtColor = "text-white", btnColor = "bg-gradient-to-r from-red-800 to-red-900", btnTextColor = "text-white/80"}) => {
  return (
    <section id="produtos" className= {"py-10 md:py-14 " + bgColor}>
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8 md:mb-10">
          <h2 className={"text-4xl md:text-5xl font-bold mb-6 " + titleColor}>
            PRODUTOS
          </h2>
          <p className={"text-xl max-w-3xl mx-auto " + txtColor}>
            Cada blend é cuidadosamente desenvolvido para maximizar seu lucro e satisfação dos clientes
          </p>
        </div>

        <div className="space-y-6">
          {categoriasMock.map(categoria => (
            <CategoriaAccordion
              key={categoria.id}
              categoria={categoria}
              produtos={produtosMock.filter(p => p.categoria === categoria.id)}
              btnColor={btnColor}
              btnTextColor={btnTextColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
