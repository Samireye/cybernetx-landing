import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = 'CyberNetX - AI-Powered Healthcare Solutions | Medical Documentation',
  description = 'Transform your healthcare practice with AI. Reduce documentation time by 60%. HIPAA-compliant solutions for medical transcription and billing.',
  keywords = 'healthcare AI, medical transcription, clinical documentation, HIPAA compliant, medical AI, healthcare automation, EMR integration, medical billing',
  image = '/src/assets/cybernetx-logo.svg',
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
      <meta property="og:site_name" content="CyberNetX" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@cybernetx" />
      <meta name="twitter:creator" content="@cybernetx" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="CyberNetX Logo" />

      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="CyberNetX" />
      
      {/* Location meta tags */}
      <meta name="geo.region" content="US-DC" />
      <meta name="geo.placename" content="Washington" />
      <meta name="geo.position" content="38.9072;-77.0369" />
      <meta name="ICBM" content="38.9072, -77.0369" />
      <meta name="distribution" content="global" />

      {/* Mobile meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="theme-color" content="#000000" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />

      {/* Favicon meta tags */}
      <link rel="icon" type="image/svg+xml" href="/src/assets/cybernetx-logo.svg" />
      <link rel="apple-touch-icon" href="/src/assets/cybernetx-logo.svg" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="canonical" href={url} />

      {/* Structured Data for Google Rich Snippets */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "CyberNetX",
          "alternateName": "CyberNetX AI",
          "description": description,
          "url": url,
          "logo": image,
          "sameAs": [
            "https://twitter.com/cybernetx",
            "https://www.linkedin.com/company/cybernetx"
          ],
          "contactPoint": [{
            "@type": "ContactPoint",
            "telephone": "+1-202-556-0528",
            "contactType": "customer service",
            "email": "cybernetxai@gmail.com",
            "areaServed": "US",
            "availableLanguage": "English",
            "contactOption": "TollFree"
          }],
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Washington",
            "addressRegion": "DC",
            "addressCountry": "US"
          },
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "category": "Healthcare Software",
            "description": "AI-powered healthcare solutions including medical transcription and billing"
          },
          "keywords": keywords.split(', ').join(','),
          "foundingDate": "2023",
          "founders": [{
            "@type": "Person",
            "name": "CyberNetX Team"
          }],
          "knowsAbout": [
            "Healthcare AI",
            "Medical Documentation",
            "Clinical Workflow Automation",
            "Healthcare Technology",
            "Medical Transcription",
            "Medical Billing"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
