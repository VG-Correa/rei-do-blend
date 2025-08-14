export const organizationSchema = {
  "@type": "Organization",
  "@context": "https://schema.org",
  name: "Rei do Blend",
  description: "Especialistas em blends premium para hambúrgueres artesanais",
  url: "https://www.reidoblend.com.br",
  logo: "https://www.reidoblend.com.br/logo-rei-blend.jpg",
  sameAs: [
    "https://www.instagram.com/reidoblend",
    "https://www.facebook.com/reidoblend"
  ]
};

export const productSchema = {
  "@type": "Product",
  "@context": "https://schema.org",
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

export const localBusinessSchema = {
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
