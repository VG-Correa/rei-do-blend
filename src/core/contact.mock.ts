export interface ContactInfo {
  phone: {
    main: string;
    secondary: string;
  };
  email: {
    contact: string;
    sales: string;
  };
  address: {
    street: string;
    city: string;
    postalCode: string;
  };
  businessHours: {
    weekdays: string;
    saturday: string;
  };
  deliveryAreas: string[];
}

export const contactInfo: ContactInfo = {
  phone: {
    main: "(11) 99999-9999",
    secondary: "(11) 3333-4444"
  },
  email: {
    contact: "contato@reidoblend.com.br",
    sales: "vendas@reidoblend.com.br"
  },
  address: {
    street: "Rua dos Hambúrgueres, 123",
    city: "São Paulo - SP",
    postalCode: "CEP 01234-567"
  },
  businessHours: {
    weekdays: "Segunda a Sexta: 8h às 18h",
    saturday: "Sábado: 8h às 12h"
  },
  deliveryAreas: [
    "São José dos Campos",
    "Taubaté",
    "Pindamonhangaba",
    "Arujá",
    "São Paulo Capital",
    "ABC Paulista",
    "Osasco",
    "Guarulhos",
    "Barueri",
    "Outras regiões"
  ]
};
