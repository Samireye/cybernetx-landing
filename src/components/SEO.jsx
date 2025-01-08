import { Helmet } from 'react-helmet-async';
import logo from '../assets/logo.png';

const SEO = ({ 
  title = 'CyberNetX - AI-Powered Healthcare Solutions',
  description = 'Transform your healthcare practice with AI. Reduce documentation time by 60%. HIPAA-compliant solutions for medical transcription and billing.',
  keywords = 'healthcare AI, medical transcription, clinical documentation, HIPAA compliant',
  url = 'https://www.cybernetx.co'
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={logo} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={logo} />
      
      <link rel="canonical" href={url} />
      <link rel="icon" type="image/png" href={logo} />
    </Helmet>
  );
};

export default SEO;
