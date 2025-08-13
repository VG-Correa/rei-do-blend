export type Categoria = {
  id: string;
  nome: string;
  descricao: string;
};

export type Produto = {
  id: string;
  nome: string;
  descricao: string;
  preco: string;
  imagem: string;
  categoria: string;
  destaque?: boolean;
  pesoPorUnidade?: string;
};

export const categoriasMock: Categoria[] = [
  {
    id: '1',
    nome: 'Hamburgueres Bovinos',
    descricao: 'Blends premium de carne bovina'
  },
  {
    id: '2',
    nome: 'Espetinhos',
    descricao: 'Espetinhos preparados com carnes selecionadas'
  }
];

export const produtosMock: Produto[] = [
  {
    id: '1',
    nome: 'Blend Premium Angus',
    descricao: 'Blend Angus selecionado, 180g de sabor e suculência.',
    preco: 'R$ 12,90',
    imagem: '/logo-rei-blend.jpg',
    categoria: '1',
    destaque: true,
    pesoPorUnidade: '180g'
  },
  {
    id: '2',
    nome: 'Blend Tradicional',
    descricao: 'O clássico do churrasco brasileiro em 120g.',
    preco: 'R$ 8,50',
    imagem: '/logo-rei-blend.jpg',
    categoria: '1',
    pesoPorUnidade: '120g'
  },
  {
    id: '3',
    nome: 'Blend Gourmet',
    descricao: 'Blend premium com bacon, 200g para paladares exigentes.',
    preco: 'R$ 15,90',
    imagem: '/logo-rei-blend.jpg',
    categoria: '1',
    destaque: true,
    pesoPorUnidade: '200g'
  },
  {
    id: '4',
    nome: 'Blend Cordeiro',
    descricao: 'Blend especial de cordeiro, 160g de sabor único.',
    preco: 'R$ 18,90',
    imagem: '/logo-rei-blend.jpg',
    categoria: '1',
    pesoPorUnidade: '160g'
  },
  {
    id: '5',
    nome: 'Espetinho Bovino',
    descricao: 'Espetinho de carne bovina premium.',
    preco: 'R$ 6,90',
    imagem: '/logo-rei-blend.jpg',
    categoria: '2',
    pesoPorUnidade: '100g'
  },
  {
    id: '6',
    nome: 'Espetinho Frango',
    descricao: 'Espetinho de frango temperado.',
    preco: 'R$ 5,90',
    imagem: '/logo-rei-blend.jpg',
    categoria: '2',
    pesoPorUnidade: '100g'
  }
];
