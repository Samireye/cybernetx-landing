import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import logo from '../assets/logo.png';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'rgba(0, 0, 0, 0.5)',
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
}));

const GradientText = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(45deg, #00E5FF 30%, #4CAF50 90%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  display: 'inline-block',
  marginLeft: '12px',
  fontWeight: 600,
}));

const Logo = styled('img')({
  height: '40px',
  width: 'auto',
});

const navItems = ['Solutions', 'About', 'Contact'];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId.toLowerCase());
    if (section) {
      const navbarHeight = 70; // Height of the fixed navbar
      const sectionPosition = section.offsetTop - navbarHeight;
      window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
      });
      setMobileOpen(false);
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor: 'background.paper' }}>
      <Box sx={{ my: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Logo src={logo} alt="CyberNetX" />
        <GradientText variant="h5">
          CyberNetX
        </GradientText>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem 
            key={item} 
            sx={{ justifyContent: 'center' }}
            onClick={() => scrollToSection(item)}
          >
            <ListItemText 
              primary={item} 
              sx={{ 
                color: 'text.secondary',
                cursor: 'pointer',
                '&:hover': { color: 'primary.main' }
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <StyledAppBar position="fixed">
        <Container maxWidth="lg">
          <Toolbar sx={{ px: { xs: 0 }, minHeight: { xs: '70px' } }}>
            <Box 
              sx={{ 
                flexGrow: 1, 
                display: 'flex', 
                alignItems: 'center',
                cursor: 'pointer'
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Logo src={logo} alt="CyberNetX" />
              <GradientText variant="h5">
                CyberNetX
              </GradientText>
            </Box>
            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box>
                {navItems.map((item) => (
                  <Button 
                    key={item}
                    onClick={() => scrollToSection(item)}
                    sx={{ 
                      color: 'text.secondary',
                      mx: 1,
                      '&:hover': {
                        color: 'primary.main',
                        background: 'rgba(255, 255, 255, 0.05)'
                      }
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </Box>
            )}
          </Toolbar>
        </Container>
      </StyledAppBar>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 240,
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(10px)',
          },
        }}
      >
        {drawer}
      </Drawer>
      <Toolbar /> {/* Spacer for fixed AppBar */}
    </>
  );
};

export default Navbar;
