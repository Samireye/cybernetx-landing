import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import VideoBackground from './VideoBackground';

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
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
    background: 'radial-gradient(circle, rgba(0,229,255,0.1) 0%, rgba(76,175,80,0.05) 25%, rgba(0,0,0,0) 50%)',
    opacity: 0.5,
    zIndex: 1,
  },
}));

const ContentContainer = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
}));

const GradientText = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(45deg, #00E5FF 30%, #4CAF50 90%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  display: 'inline-block',
}));

const Hero = () => {
  return (
    <HeroSection>
      <VideoBackground />
      <ContentContainer>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={8} textAlign="center">
            <GradientText 
              variant="h1" 
              component="h1" 
              gutterBottom
              sx={{
                fontSize: {
                  xs: '2.5rem',
                  sm: '3.5rem',
                  md: '4.5rem'
                }
              }}
            >
              CyberNetX
            </GradientText>
            <Typography 
              variant="h4" 
              gutterBottom 
              sx={{ 
                color: 'text.secondary',
                mb: 4,
                fontWeight: 300,
                textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                fontSize: {
                  xs: '1.5rem',
                  sm: '2rem',
                  md: '2.5rem'
                }
              }}
            >
              Bridging Healthcare with AI Innovation
            </Typography>
            <Typography 
              variant="h6" 
              paragraph 
              sx={{ 
                color: 'text.secondary',
                maxWidth: '800px',
                margin: '0 auto',
                mb: 6,
                fontWeight: 300,
                textShadow: '0 1px 2px rgba(0,0,0,0.5)',
                fontSize: {
                  xs: '1rem',
                  sm: '1.1rem',
                  md: '1.25rem'
                },
                px: { xs: 2, sm: 4 }
              }}
            >
              We create cutting-edge AI solutions that transform the relationship between healthcare providers and patients, making quality care more accessible and efficient than ever before.
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              gap: 2, 
              justifyContent: 'center',
              flexDirection: { xs: 'column', sm: 'row' },
              px: { xs: 2, sm: 0 }
            }}>
              <Button
                variant="contained"
                size="large"
                fullWidth={false}
                sx={{ 
                  background: 'linear-gradient(45deg, #00E5FF 30%, #4CAF50 90%)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #00E5FF 10%, #4CAF50 70%)',
                  },
                  minWidth: { xs: '100%', sm: '200px' }
                }}
              >
                Explore Solutions
              </Button>
              <Button
                variant="outlined"
                size="large"
                fullWidth={false}
                sx={{
                  borderColor: 'rgba(255,255,255,0.3)',
                  backdropFilter: 'blur(4px)',
                  '&:hover': {
                    borderColor: 'primary.main',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                  },
                  minWidth: { xs: '100%', sm: '200px' }
                }}
              >
                Contact Us
              </Button>
            </Box>
          </Grid>
        </Grid>
      </ContentContainer>
    </HeroSection>
  );
};

export default Hero;
