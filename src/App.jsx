import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        minHeight: '100vh',
        background: '#000000',
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0, 229, 255, 0.1) 0%, rgba(76, 175, 80, 0.05) 25%, rgba(0, 0, 0, 0) 50%)',
      }}>
        <Navbar />
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
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
