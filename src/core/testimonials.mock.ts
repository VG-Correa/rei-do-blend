export interface Testimonial {
  nome: string;
  negocio: string;
  texto: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    nome: "Carlos Silva",
    negocio: "Burguer Point SP",
    texto: "Desde que começamos a usar os blends do Rei do Blend, nossas vendas aumentaram 40%. A qualidade é excepcional!",
    avatar: ""
  },
  {
    nome: "Maria Santos",
    negocio: "Lanchonete da Maria",
    texto: "O atendimento é personalizado e a entrega sempre pontual. Nossos clientes sempre elogiam nossos hambúrgueres!",
    avatar: ""
  },
  {
    nome: "João Ferreira",
    negocio: "Fast Burguer Rio",
    texto: "Trabalho com eles há 2 anos. Qualidade consistente, preço justo e suporte excepcional. Recomendo!",
    avatar: ""
  }
];
