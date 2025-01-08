import { useState } from 'react';
import { 
  Box, 
  Paper, 
  Typography, 
  TextField, 
  Button, 
  Snackbar, 
  Alert,
  useTheme 
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

const NewsletterSubscribe = () => {
  const [email, setEmail] = useState('');
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState({ type: 'success', message: '' });
  const theme = useTheme();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Here you would typically integrate with your email service provider
    // For now, we'll just simulate a successful subscription
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStatus({
        type: 'success',
        message: 'Thank you for subscribing! Please check your email to confirm your subscription.'
      });
      setEmail('');
      setOpen(true);
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.'
      });
      setOpen(true);
    }
  };

  return (
    <Paper 
      sx={{ 
        p: 4, 
        mt: 6, 
        mb: 4,
        background: 'linear-gradient(45deg, rgba(0,229,255,0.1) 0%, rgba(76,175,80,0.1) 100%)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.1)'
      }}
    >
      <Box component="form" onSubmit={handleSubmit} sx={{ textAlign: 'center' }}>
        <EmailIcon sx={{ fontSize: 40, mb: 2, color: 'primary.main' }} />
        <Typography variant="h4" component="h2" gutterBottom>
          Stay Updated
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Subscribe to our newsletter for the latest insights in healthcare AI
        </Typography>
        <Box sx={{ 
          display: 'flex', 
          gap: 2,
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <TextField
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={{ 
              minWidth: { sm: '300px' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'rgba(255,255,255,0.23)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(255,255,255,0.5)',
                },
              }
            }}
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{
              background: 'linear-gradient(45deg, #00E5FF 30%, #4CAF50 90%)',
              '&:hover': {
                background: 'linear-gradient(45deg, #00E5FF 10%, #4CAF50 70%)',
              },
              minWidth: { xs: '100%', sm: 'auto' }
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>
      <Snackbar 
        open={open} 
        autoHideDuration={6000} 
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setOpen(false)} 
          severity={status.type}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {status.message}
        </Alert>
      </Snackbar>
    </Paper>
  );
};

export default NewsletterSubscribe;
