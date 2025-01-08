import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = 'CyberNetX - AI-Powered Healthcare Solutions | Medical Documentation',
  description = 'Transform your healthcare practice with AI. Reduce documentation time by 60%. HIPAA-compliant solutions for medical transcription and billing.',
  keywords = 'healthcare AI, medical transcription, clinical documentation, HIPAA compliant, medical AI, healthcare automation',
  image = '/src/assets/logo.png',
  url = 'https://www.cybernetx.co'
}) => {
  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph meta tags for social sharing */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="CyberNetX" />

      {/* Structured Data for Google Rich Snippets */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "CyberNetX",
          "description": description,
          "url": url,
          "logo": image,
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-202-556-0528",
            "contactType": "customer service",
            "email": "cybernetxai@gmail.com",
            "areaServed": "US"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Washington",
            "addressRegion": "DC",
            "addressCountry": "US"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
