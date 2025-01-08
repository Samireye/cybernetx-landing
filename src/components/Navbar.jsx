import { AppBar, Toolbar, Button, Box, IconButton, Drawer, List, ListItem, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId) => {
    setMobileOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navigateTo = (path) => {
    setMobileOpen(false);
    navigate(path);
  };

  const NavItems = () => (
    <>
      <Button color="inherit" onClick={() => scrollToSection('solutions')}>Solutions</Button>
      <Button color="inherit" onClick={() => scrollToSection('about')}>About</Button>
      <Button color="inherit" onClick={() => navigateTo('/blog')}>Blog</Button>
      <Button color="inherit" onClick={() => scrollToSection('contact')}>Contact</Button>
    </>
  );

  return (
    <AppBar position="fixed" sx={{ background: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(8px)' }}>
      <Toolbar>
        <Box 
          component="img" 
          src="/src/assets/cybernetx-logo.svg"
          alt="CyberNetX Logo"
          sx={{ 
            height: 40,
            cursor: 'pointer',
            mr: 2
          }}
          onClick={() => navigate('/')}
        />

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 2 }}>
            <NavItems />
          </Box>
        )}

        {/* Mobile Navigation */}
        {isMobile && (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ ml: 'auto' }}
            >
              <MenuIcon />
            </IconButton>

            <Drawer
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              sx={{
                '& .MuiDrawer-paper': {
                  width: '100%',
                  background: 'rgba(0, 0, 0, 0.95)',
                  backdropFilter: 'blur(8px)',
                },
              }}
            >
              <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
                <IconButton color="inherit" onClick={handleDrawerToggle}>
                  <CloseIcon />
                </IconButton>
              </Box>
              <List sx={{ mt: 4 }}>
                <ListItem>
                  <Button 
                    fullWidth 
                    color="inherit" 
                    onClick={() => scrollToSection('solutions')}
                    sx={{ py: 2 }}
                  >
                    Solutions
                  </Button>
                </ListItem>
                <ListItem>
                  <Button 
                    fullWidth 
                    color="inherit" 
                    onClick={() => scrollToSection('about')}
                    sx={{ py: 2 }}
                  >
                    About
                  </Button>
                </ListItem>
                <ListItem>
                  <Button 
                    fullWidth 
                    color="inherit" 
                    onClick={() => navigateTo('/blog')}
                    sx={{ py: 2 }}
                  >
                    Blog
                  </Button>
                </ListItem>
                <ListItem>
                  <Button 
                    fullWidth 
                    color="inherit" 
                    onClick={() => scrollToSection('contact')}
                    sx={{ py: 2 }}
                  >
                    Contact
                  </Button>
                </ListItem>
              </List>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
