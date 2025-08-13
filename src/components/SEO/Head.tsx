import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  schema?: any;
}

export const Head: React.FC<SEOProps> = ({
  title = "Rei do Blend - Hambúrgueres Artesanais Premium",
  description = "Blends premium para hambúrgueres artesanais. Mais de 500 clientes satisfeitos e 15 anos de tradição em São José dos Campos.",
  image = "/og-image.jpg",
  schema
}) => {
  const location = useLocation();
  const canonical = `https://www.reidoblend.com.br${location.pathname}`;

  return (
    <Helmet>
      {/* Básico */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="Rei do Blend" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Tags adicionais para SEO */}
      <meta name="keywords" content="hambúrguer artesanal, blend premium, hamburgueria, são josé dos campos, blend para hambúrguer, hambúrguer gourmet" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />

      {/* Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};
