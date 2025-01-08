import { Box, Container, Typography, TextField, Button, Grid } from '@mui/material';
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

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.1)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.2)',
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.7)',
  },
  '& .MuiInputBase-input': {
    color: 'rgba(255, 255, 255, 0.9)',
  },
}));

const Contact = () => {
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
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <GradientText variant="h2">
          Contact Us
        </GradientText>
        <Typography 
          variant="h5" 
          align="center" 
          sx={{ 
            mb: 8,
            color: 'text.secondary',
            maxWidth: '800px',
            mx: 'auto',
            fontWeight: 300
          }}
        >
          Ready to transform your healthcare practice? Get in touch with us.
        </Typography>
        <Box 
          component="form" 
          noValidate 
          sx={{ 
            mt: 4,
            p: 4,
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              border: '1px solid rgba(0, 229, 255, 0.3)',
              boxShadow: '0 8px 30px rgba(0, 229, 255, 0.1)',
            }
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                required
                fullWidth
                label="Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                required
                fullWidth
                label="Email"
                variant="outlined"
                type="email"
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                required
                fullWidth
                label="Subject"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                required
                fullWidth
                label="Message"
                variant="outlined"
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                size="large"
                fullWidth
                sx={{ 
                  background: 'linear-gradient(45deg, #00E5FF 30%, #4CAF50 90%)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #00E5FF 10%, #4CAF50 70%)',
                  }
                }}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
