import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import { HelmetProvider } from 'react-helmet-async';
import theme from './theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEO from './components/SEO';
import BlogHome from './blog/pages/BlogHome';

function App() {
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
              <Navbar />
              <Routes>
                <Route path="/blog" element={<BlogHome />} />
                <Route path="/" element={
                  <>
                    <Box id="hero">
                      <Hero />
                    </Box>
                    <Box id="solutions">
                      <Solutions />
                    </Box>
                    <Box id="about">
                      <About />
                    </Box>
                    <Box id="contact">
                      <Contact />
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
