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
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
  },
  {
    nome: "Maria Santos",
    negocio: "Lanchonete da Maria",
    texto: "O atendimento é personalizado e a entrega sempre pontual. Nossos clientes sempre elogiam nossos hambúrgueres!",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c3ef?w=80&h=80&fit=crop&crop=face"
  },
  {
    nome: "João Ferreira",
    negocio: "Fast Burguer Rio",
    texto: "Trabalho com eles há 2 anos. Qualidade consistente, preço justo e suporte excepcional. Recomendo!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
  }
];
