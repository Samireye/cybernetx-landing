import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const SEOHelmet = ({ 
  title = 'CyberNetX - Healthcare AI Innovation',
  description = 'Transform your healthcare practice with AI. Reduce documentation time by 60%. HIPAA-compliant solutions for medical transcription and billing.',
  image = 'https://cybernetx.ai/og-image.png',
  url = 'https://cybernetx.ai',
  keywords = 'healthcare AI, medical transcription, clinical documentation, medical billing, HIPAA compliant, healthcare technology, AI assistant, medical practice management'
}) => {
  const fullTitle = title.includes('CyberNetX') ? title : `${title} | CyberNetX`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* OpenGraph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="CyberNetX" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

SEOHelmet.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  keywords: PropTypes.string
};

export default SEOHelmet;
