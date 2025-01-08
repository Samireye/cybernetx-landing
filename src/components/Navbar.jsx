import { AppBar, Toolbar, Button, Box, IconButton, Drawer, List, ListItem, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '../assets/cybernetx-logo.svg';

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
          src={Logo} 
          alt="CyberNetX Logo"
          sx={{ 
            height: 40,
            cursor: 'pointer',
            mr: 3
          }}
          onClick={() => navigateTo('/')}
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
            <Box sx={{ flexGrow: 1 }} />
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </>
        )}

        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            '& .MuiDrawer-paper': { 
              width: 240,
              background: 'rgba(0, 0, 0, 0.9)',
              backdropFilter: 'blur(8px)',
              color: 'white'
            },
          }}
        >
          <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            <ListItem>
              <Button fullWidth color="inherit" onClick={() => scrollToSection('solutions')}>
                Solutions
              </Button>
            </ListItem>
            <ListItem>
              <Button fullWidth color="inherit" onClick={() => scrollToSection('about')}>
                About
              </Button>
            </ListItem>
            <ListItem>
              <Button fullWidth color="inherit" onClick={() => navigateTo('/blog')}>
                Blog
              </Button>
            </ListItem>
            <ListItem>
              <Button fullWidth color="inherit" onClick={() => scrollToSection('contact')}>
                Contact
              </Button>
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
