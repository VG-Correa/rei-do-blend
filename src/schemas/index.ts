import type { Organization, Product, LocalBusiness } from 'schema-dts';

export const organizationSchema: Organization = {
  "@type": "Organization",
  name: "Rei do Blend",
  description: "Especialistas em blends premium para hambúrgueres artesanais",
  url: "https://www.reidoblend.com.br",
  logo: "https://www.reidoblend.com.br/logo-rei-blend.jpg",
  foundingDate: "2010",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Ouro Fino, 896",
    addressLocality: "São José dos Campos",
    addressRegion: "SP",
    postalCode: "12233-401",
    addressCountry: "BR"
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55-12-98845-7268",
    contactType: "customer service",
    areaServed: "BR",
    availableLanguage: "Portuguese"
  },
  sameAs: [
    "https://www.instagram.com/reidoblend",
    "https://www.facebook.com/reidoblend"
  ]
};

export const productSchema: Product = {
  "@type": "Product",
  name: "Blend Premium Rei do Blend",
  brand: {
    "@type": "Brand",
    name: "Rei do Blend"
  },
  category: "Alimentos e Bebidas > Carnes > Blend para Hambúrguer",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceValidUntil: "2025-12-31",
    priceCurrency: "BRL"
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "500"
  }
};

export const localBusinessSchema: LocalBusiness = {
  "@type": "FoodEstablishment",
  name: "Rei do Blend",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Ouro Fino, 896",
    addressLocality: "São José dos Campos",
    addressRegion: "SP",
    postalCode: "12233-401",
    addressCountry: "BR"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -23.223701,
    longitude: -45.891789
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00"
    }
  ]
};
