export type Produto = {
  id: string;
  nome: string;
  descricao: string;
  preco: string;
  imagem: string;
  beneficios: string[];
  destaque?: boolean;
  // Campos adicionais
  processoFabricacao?: string;
  ingredientes?: string[];
  pesoPorUnidade?: string;
  quantidadeMinima?: number;
  valorPorUnidade?: number;
  valorTotal?: number;
  desconto?: number;
  prazoProducaoEntrega?: string;
  receitasSugeridas?: string[];
  nota?: number;
  comentarios?: { usuario: string; texto: string; nota: number; }[];
};

export const produtosMock: Produto[] = [
  {
    id: '1',
    nome: 'Blend Premium Angus',
    descricao: '180g de pura qualidade premium',
    preco: 'R$ 12,90',
    imagem: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    beneficios: ['Alto rendimento', 'Sabor incomparável', 'Textura perfeita'],
    pesoPorUnidade: '180g',
    ingredientes: ['Carne Angus', 'Sal', 'Pimenta-do-reino'],
    processoFabricacao: 'Moagem, mistura, modelagem e resfriamento.',
    valorPorUnidade: 12.90,
    nota: 9.5
  },
  {
    id: '2',
    nome: 'Blend Tradicional',
    descricao: '120g sabor tradicional brasileiro',
    preco: 'R$ 8,50',
    imagem: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop',
    beneficios: ['Custo acessível', 'Qualidade garantida', 'Versatilidade'],
    pesoPorUnidade: '120g',
    ingredientes: ['Carne bovina', 'Sal', 'Pimenta-do-reino'],
    processoFabricacao: 'Moagem, mistura, modelagem e resfriamento.',
    valorPorUnidade: 8.50,
    nota: 9.0
  },
  {
    id: '3',
    nome: 'Blend Gourmet',
    descricao: '200g experiência gourmet única',
    preco: 'R$ 15,90',
    imagem: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop',
    beneficios: ['Ingredientes selecionados', 'Margem alta', 'Cliente fiel'],
    pesoPorUnidade: '200g',
    ingredientes: ['Carne bovina premium', 'Bacon', 'Sal', 'Pimenta-do-reino'],
    processoFabricacao: 'Moagem, mistura com bacon, modelagem e resfriamento.',
    valorPorUnidade: 15.90,
    nota: 9.8
  }
];
