import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import emailjs from '@emailjs/browser';
import theme from './theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import About from './components/About';
import Footer from './components/Footer';
import SEO from './components/SEO';
import BlogHome from './blog/pages/BlogHome';
import BlogPost from './blog/components/BlogPost';
import NewsletterSubscribe from './blog/components/NewsletterSubscribe';
import SolutionsPage from './components/SolutionsPage';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';

// Log environment variables immediately
console.log('=== START: Environment Variables Check ===');
console.log('Service ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID);
console.log('Public Key:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
console.log('Newsletter Template:', import.meta.env.VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID);
console.log('Contact Template:', import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID);
console.log('=== END: Environment Variables Check ===');

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    try {
      console.log('Attempting EmailJS initialization...');
      emailjs.init({
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        debug: true
      });
      console.log('EmailJS initialization successful');
      console.log('Environment variables loaded:', {
        serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
        newsletterTemplateId: import.meta.env.VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID,
        contactTemplateId: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
        hasPublicKey: !!import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      });
    } catch (error) {
      console.error('EmailJS initialization failed:', error);
    }
  }, []);

  return (
    <HelmetProvider>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <SEO />
            <Box sx={{ 
              minHeight: '100vh',
              background: '#000000',
              backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0, 229, 255, 0.1) 0%, rgba(76, 175, 80, 0.05) 25%, rgba(0, 0, 0, 0) 50%)',
            }}>
              <Navbar scrollToSection={scrollToSection} />
              <Routes>
                <Route path="/blog" element={<BlogHome />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/solutions" element={<SolutionsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/" element={
                  <>
                    <Box id="hero">
                      <Hero scrollToSection={scrollToSection} />
                    </Box>
                    <Box id="solutions">
                      <Solutions />
                    </Box>
                    <Box id="about">
                      <About />
                    </Box>
                    <Box 
                      id="newsletter"
                      sx={{
                        py: 8,
                        px: 2,
                        background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,229,255,0.05) 100%)',
                      }}
                    >
                      <NewsletterSubscribe />
                    </Box>
                  </>
                } />
              </Routes>
              <Footer />
            </Box>
          </Router>
        </ThemeProvider>
      </StyledEngineProvider>
    </HelmetProvider>
  );
}

export default App;
