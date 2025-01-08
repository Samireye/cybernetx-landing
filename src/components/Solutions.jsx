import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PaymentsIcon from '@mui/icons-material/Payments';
import ChatIcon from '@mui/icons-material/Chat';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import { styled } from '@mui/material/styles';

const GradientText = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(45deg, #00E5FF 30%, #4CAF50 90%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  display: 'block',
  textAlign: 'center',
  margin: '0 auto',
  marginBottom: theme.spacing(2),
}));

const GlassCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.03)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 30px rgba(0, 229, 255, 0.1)',
    border: '1px solid rgba(0, 229, 255, 0.3)',
    '& .MuiSvgIcon-root': {
      color: '#00E5FF',
      filter: 'drop-shadow(0 0 8px rgba(0, 229, 255, 0.5))',
    }
  },
}));

const IconContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
  '& .MuiSvgIcon-root': {
    fontSize: 48,
    color: theme.palette.primary.main,
    transition: 'all 0.3s ease-in-out',
    filter: 'drop-shadow(0 0 2px rgba(0, 229, 255, 0.2))',
  },
}));

const solutions = [
  {
    title: 'CyberMedAssist',
    description: 'AI-powered clinical note generation from audio, streamlining documentation for healthcare providers.',
    icon: HealthAndSafetyIcon,
  },
  {
    title: 'CyberPay',
    description: 'Simplified healthcare payment solutions with integrated insurance processing and patient billing.',
    icon: PaymentsIcon,
  },
  {
    title: 'CyberCheck',
    description: 'Smart symptom analysis and health insights powered by advanced AI, providing rapid preliminary assessments.',
    icon: MonitorHeartIcon,
  },
  {
    title: 'CyberConnect',
    description: 'Personalized patient communication platform powered by AI, streamlining practice-patient relationships.',
    icon: ChatIcon,
  },
];

const Solutions = () => {
  return (
    <Box sx={{ 
      py: 12,
      position: 'relative',
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
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <GradientText 
          variant="h2" 
          align="center" 
          sx={{ 
            mb: 2,
            fontSize: {
              xs: '2rem',
              sm: '2.5rem',
              md: '3.5rem'
            }
          }}
        >
          Our Solutions
        </GradientText>
        <Typography 
          variant="h5" 
          align="center" 
          color="text.secondary" 
          sx={{ 
            mb: 8, 
            maxWidth: '800px', 
            mx: 'auto', 
            fontWeight: 300,
            fontSize: {
              xs: '1.1rem',
              sm: '1.25rem',
              md: '1.5rem'
            },
            px: { xs: 2, sm: 0 }
          }}
        >
          Innovative healthcare technology solutions powered by artificial intelligence
        </Typography>
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {solutions.map((solution) => (
            <Grid item xs={12} sm={6} md={3} key={solution.title}>
              <GlassCard sx={{ height: '100%' }}>
                <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                  <IconContainer>
                    <solution.icon sx={{ 
                      fontSize: { 
                        xs: 40,
                        sm: 44,
                        md: 48 
                      } 
                    }} />
                  </IconContainer>
                  <Typography 
                    variant="h5" 
                    component="h3" 
                    gutterBottom 
                    align="center"
                    sx={{
                      fontSize: {
                        xs: '1.25rem',
                        sm: '1.4rem',
                        md: '1.5rem'
                      }
                    }}
                  >
                    {solution.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    color="text.secondary" 
                    align="center"
                    sx={{
                      fontSize: {
                        xs: '0.9rem',
                        sm: '1rem',
                        md: '1rem'
                      }
                    }}
                  >
                    {solution.description}
                  </Typography>
                </CardContent>
              </GlassCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Solutions;
