import { Box, Container, Typography, TextField, Button, Grid, Snackbar, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

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
  const form = useRef(null);
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  useEffect(() => {
    emailjs.init(process.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        process.env.VITE_EMAILJS_SERVICE_ID,
        process.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
        form.current,
        process.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSnackbar({
        open: true,
        message: 'Message sent successfully! We\'ll get back to you soon.',
        severity: 'success'
      });
      form.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSnackbar({
        open: true,
        message: 'Failed to send message. Please try again or email us directly.',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

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
          ref={form}
          onSubmit={handleSubmit}
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
                name="user_name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                required
                fullWidth
                label="Email"
                name="user_email"
                variant="outlined"
                type="email"
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                required
                fullWidth
                label="Subject"
                name="subject"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                required
                fullWidth
                label="Message"
                name="message"
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
                type="submit"
                disabled={loading}
                sx={{ 
                  background: 'linear-gradient(45deg, #00E5FF 30%, #4CAF50 90%)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #00E5FF 10%, #4CAF50 70%)',
                  }
                }}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
