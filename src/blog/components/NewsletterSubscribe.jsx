import { useState } from 'react';
import { Box, Typography, TextField, Button, Alert, Snackbar } from '@mui/material';
import emailjs from '@emailjs/browser';

const NewsletterSubscribe = () => {
  const [email, setEmail] = useState('');
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
          to_name: email.split('@')[0],
        }
      );

      console.log('Newsletter - Email sent successfully');

      setSnackbar({
        open: true,
        message: 'Thank you for subscribing! You will receive our newsletter soon.',
        severity: 'success'
      });
      setEmail('');
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
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <Box
      sx={{
        p: 4,
        borderRadius: 2,
        bgcolor: 'background.paper',
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0, 229, 255, 0.1) 0%, rgba(76, 175, 80, 0.05) 25%, rgba(0, 0, 0, 0) 50%)',
        border: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Stay Updated
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph align="center">
        Subscribe to our newsletter for the latest insights in healthcare AI and HIPAA compliance.
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          mt: 3,
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 2,
          maxWidth: 600,
          mx: 'auto'
        }}
      >
        <TextField
          fullWidth
          type="email"
          label="Email Address"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'divider',
              },
              '&:hover fieldset': {
                borderColor: 'primary.main',
              },
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          disabled={loading}
          sx={{
            minWidth: { sm: 200 },
            background: 'linear-gradient(45deg, #00E5FF 30%, #4CAF50 90%)',
            '&:hover': {
              background: 'linear-gradient(45deg, #00B2CC 30%, #388E3C 90%)',
            },
          }}
        >
          {loading ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </Box>

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
