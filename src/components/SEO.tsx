import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://www.enerwyse.ca';
const SITE_NAME = 'Enerwyse';

interface SEOProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  type?: 'website' | 'article';
  keywords?: string[];
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
}

export function SEO({
  title,
  description,
  path,
  ogImage = '/og-default.png',
  type = 'website',
  keywords,
  structuredData,
}: SEOProps) {
  const canonicalUrl = `${SITE_URL}${path}`;
  const imageUrl = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`;
  const schemaItems = Array.isArray(structuredData)
    ? structuredData
    : structuredData
      ? [structuredData]
      : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords?.length ? <meta name="keywords" content={keywords.join(', ')} /> : null}
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_CA" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {schemaItems.map((item, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
}
