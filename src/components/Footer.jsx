import { Box, Container, Typography, Grid, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import logo from '../assets/logo.png';

const GradientText = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(45deg, #00E5FF 30%, #4CAF50 90%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  display: 'inline-block',
  fontWeight: 600,
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.7)',
  textDecoration: 'none',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    color: theme.palette.primary.main,
    textDecoration: 'none',
  },
}));

const Logo = styled('img')({
  height: '40px',
  width: 'auto',
  marginRight: '12px',
});

const Footer = () => {
  return (
    <Box sx={{ 
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '200vh',
        height: '200vh',
        background: 'radial-gradient(circle, rgba(0,229,255,0.03) 0%, rgba(76,175,80,0.02) 25%, rgba(0,0,0,0) 50%)',
        opacity: 0.5,
        zIndex: 0,
      },
    }}>
      <Box
        sx={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          py: 8,
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Logo src={logo} alt="CyberNetX" />
                <GradientText variant="h6">
                  CyberNetX
                </GradientText>
              </Box>
              <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 300 }}>
                Bridging Healthcare with AI Innovation
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" gutterBottom sx={{ color: 'text.primary' }}>
                Solutions
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <StyledLink href="#">CyberMedAssist</StyledLink>
                <StyledLink href="#">CyberPay</StyledLink>
                <StyledLink href="#">CyberCheck</StyledLink>
                <StyledLink href="#">CyberConnect</StyledLink>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" gutterBottom sx={{ color: 'text.primary' }}>
                Contact
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: 'text.secondary',
                  fontWeight: 300,
                  '& a': {
                    color: 'primary.main',
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  },
                }}
              >
                Email: <Link href="mailto:cybernetxai@gmail.com">cybernetxai@gmail.com</Link><br />
                Phone: (202) 556-0528<br />
                Location: Silicon Valley, CA
              </Typography>
            </Grid>
          </Grid>
          <Typography 
            variant="body2" 
            align="center" 
            sx={{ 
              mt: 8,
              pt: 3,
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              color: 'text.secondary',
              fontWeight: 300,
            }}
          >
            {new Date().getFullYear()} CyberNetX. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
