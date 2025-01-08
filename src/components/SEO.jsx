import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = 'CyberNetX - AI-Powered Healthcare Solutions',
  description = 'Transform your healthcare practice with AI. Reduce documentation time by 60%. HIPAA-compliant solutions for medical transcription and billing.',
  keywords = 'healthcare AI, medical transcription, clinical documentation, HIPAA compliant',
  image = '/logo.svg',
  url = 'https://www.cybernetx.co'
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
