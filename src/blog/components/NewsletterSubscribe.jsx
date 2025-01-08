import { useState } from 'react';
import { Box, Typography, TextField, Button, Alert, Snackbar } from '@mui/material';
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
          to_name: name || 'Valued Subscriber', // Use provided name or fallback
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
    <Box 
      component="form" 
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: '100%',
        width: '100%',
        bgcolor: 'background.paper',
        p: 3,
        borderRadius: 2,
        boxShadow: 1,
      }}
    >
      <Typography variant="h6" component="h3" gutterBottom>
        Stay Updated with CybernetX
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Subscribe to our newsletter for the latest insights on healthcare AI, HIPAA compliance, and medical technology.
      </Typography>
      
      <TextField
        label="Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
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
        sx={{ mb: 2 }}
        placeholder="your.email@example.com"
      />

      <Button
        type="submit"
        variant="contained"
        disabled={loading}
        sx={{
          py: 1.5,
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
  );
};

export default NewsletterSubscribe;
