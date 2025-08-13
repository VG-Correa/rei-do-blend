export type Parceiro = {
  id: string;
  nome: string;
  descricao: string;
  logo: string;
};

export const parceirosMock: Parceiro[] = [
  {
    id: '1',
    nome: 'Empório do Sabor',
    descricao: 'Mercado gourmet referência em carnes especiais.',
    logo: '/parceiros/emporio-do-sabor.png',
  },
  {
    id: '2',
    nome: 'Churras Burgers',
    descricao: 'Hamburgueria artesanal com blends exclusivos.',
    logo: '/parceiros/churras-burgers.png',
  },
  {
    id: '3',
    nome: 'Casa do Açougueiro',
    descricao: 'Açougue tradicional com foco em qualidade.',
    logo: '/parceiros/casa-do-acougueiro.png',
  },
  {
    id: '4',
    nome: 'Mercadão Central',
    descricao: 'Rede de supermercados com produtos premium.',
    logo: '/parceiros/mercadao-central.png',
  },
  {
    id: '5',
    nome: 'Burguer Mania',
    descricao: 'Lanchonete famosa pelos hambúrgueres artesanais.',
    logo: '/parceiros/burguer-mania.png',
  },
];
