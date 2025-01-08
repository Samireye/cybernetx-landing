import { useState } from 'react';
import { Box, Typography, TextField, Button, Alert, Snackbar, Container } from '@mui/material';
import emailjs from '@emailjs/browser';

const NewsletterSubscribe = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log('Newsletter - Attempting to send email with:', {
        serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
        templateId: import.meta.env.VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID,
        hasPublicKey: !!import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      });

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID,
        {
          email_to: email,
          reply_to: email,
          to_name: name || 'Valued Subscriber',
        }
      );

      console.log('Newsletter - Email sent successfully');

      setSnackbar({
        open: true,
        message: 'Thank you for subscribing! You will receive our newsletter soon.',
        severity: 'success'
      });
      setEmail('');
      setName('');
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setSnackbar({
        open: true,
        message: 'Sorry, there was an error. Please try again later.',
        severity: 'error'
      });
    }
    setLoading(false);
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Container maxWidth="lg">
      <Box 
        component="form" 
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          maxWidth: { xs: '100%', sm: '800px' },
          width: '100%',
          mx: 'auto',
          bgcolor: 'background.paper',
          p: { xs: 2, sm: 4 },
          borderRadius: 2,
          boxShadow: 1,
        }}
      >
        <Typography 
          variant="h4" 
          component="h3" 
          align="center"
          gutterBottom
          sx={{ 
            fontWeight: 600,
            mb: 1,
            fontSize: { xs: '1.75rem', sm: '2.125rem' }
          }}
        >
          Stay Updated with CybernetX
        </Typography>
        
        <Typography 
          variant="body1" 
          color="text.secondary" 
          align="center"
          gutterBottom
          sx={{ 
            mb: 3,
            maxWidth: '600px',
            mx: 'auto'
          }}
        >
          Subscribe to our newsletter for the latest insights on healthcare AI, HIPAA compliance, and medical technology.
        </Typography>
        
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          sx={{ 
            maxWidth: { xs: '100%', sm: '600px' },
            mb: 2 
          }}
          placeholder="Your name (optional)"
        />

        <TextField
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
          sx={{ 
            maxWidth: { xs: '100%', sm: '600px' },
            mb: 2 
          }}
          placeholder="your.email@example.com"
        />

        <Button
          type="submit"
          variant="contained"
          disabled={loading}
          sx={{
            py: 1.5,
            px: 4,
            fontSize: { xs: '1rem', sm: '1.1rem' },
            fontWeight: 'bold',
            bgcolor: 'primary.main',
            color: 'white',
            '&:hover': {
              bgcolor: 'primary.dark',
            },
          }}
        >
          {loading ? 'Subscribing...' : 'Subscribe Now'}
        </Button>

        <Snackbar 
          open={snackbar.open} 
          autoHideDuration={6000} 
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert 
            onClose={handleCloseSnackbar} 
            severity={snackbar.severity}
            variant="filled"
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  );
};

export default NewsletterSubscribe;
