import { Box, Container, Typography, Grid, Paper, Card, CardContent } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import DevicesIcon from '@mui/icons-material/Devices';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const AboutPage = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom
            sx={{ 
              fontWeight: 600,
              background: 'linear-gradient(45deg, #0088ff 30%, #00ff88 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            About Us
          </Typography>
          <Typography 
            variant="h5" 
            color="text.secondary" 
            sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}
          >
            A minority-owned small business dedicated to transforming healthcare through innovative technology
          </Typography>
        </Box>

        {/* Mission Statement */}
        <Paper 
          elevation={3}
          sx={{ 
            p: 4, 
            mb: 8,
            background: 'linear-gradient(135deg, rgba(0,136,255,0.1) 0%, rgba(0,255,136,0.1) 100%)',
            borderRadius: 2
          }}
        >
          <Typography variant="h4" gutterBottom align="center">
            Our Mission
          </Typography>
          <Typography variant="body1" paragraph align="center" sx={{ maxWidth: '800px', mx: 'auto' }}>
            We are committed to bridging the gap between healthcare providers and patients through innovative technology solutions. 
            Our extensive knowledge in technology architecture and development, combined with our strategic partnerships with medical providers, 
            enables us to create meaningful connections that enhance the healthcare experience for everyone involved.
          </Typography>
        </Paper>

        {/* Core Values */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
            Our Core Values
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Card 
                elevation={3}
                sx={{ 
                  height: '100%',
                  background: 'linear-gradient(135deg, rgba(0,136,255,0.05) 0%, rgba(0,255,136,0.05) 100%)',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)'
                  }
                }}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  <GroupIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h6" gutterBottom>
                    Diversity
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Embracing diverse perspectives to drive innovation and create inclusive solutions
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card 
                elevation={3}
                sx={{ 
                  height: '100%',
                  background: 'linear-gradient(135deg, rgba(0,136,255,0.05) 0%, rgba(0,255,136,0.05) 100%)',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)'
                  }
                }}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  <DevicesIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h6" gutterBottom>
                    Innovation
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Leveraging cutting-edge technology to solve healthcare challenges
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card 
                elevation={3}
                sx={{ 
                  height: '100%',
                  background: 'linear-gradient(135deg, rgba(0,136,255,0.05) 0%, rgba(0,255,136,0.05) 100%)',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)'
                  }
                }}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  <FavoriteIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h6" gutterBottom>
                    Impact
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Making a meaningful difference in people's lives through better healthcare
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card 
                elevation={3}
                sx={{ 
                  height: '100%',
                  background: 'linear-gradient(135deg, rgba(0,136,255,0.05) 0%, rgba(0,255,136,0.05) 100%)',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)'
                  }
                }}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  <LocalHospitalIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h6" gutterBottom>
                    Excellence
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Delivering high-quality solutions that exceed expectations
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Company Description */}
        <Box sx={{ mb: 8 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper 
                elevation={3}
                sx={{ 
                  p: 4,
                  height: '100%',
                  background: 'linear-gradient(135deg, rgba(0,136,255,0.05) 0%, rgba(0,255,136,0.05) 100%)',
                }}
              >
                <Typography variant="h5" gutterBottom>
                  Who We Are
                </Typography>
                <Typography variant="body1" paragraph>
                  CyberNetX is a minority-owned small business based in the Washington DC Area. 
                  We bring together expertise in technology and healthcare to create innovative solutions 
                  that improve the way healthcare providers connect with their patients.
                </Typography>
                <Typography variant="body1">
                  Our team's diverse background and deep understanding of both technology and healthcare 
                  allows us to develop solutions that are not only technically sophisticated but also 
                  practical and user-friendly.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper 
                elevation={3}
                sx={{ 
                  p: 4,
                  height: '100%',
                  background: 'linear-gradient(135deg, rgba(0,136,255,0.05) 0%, rgba(0,255,136,0.05) 100%)',
                }}
              >
                <Typography variant="h5" gutterBottom>
                  Our Impact
                </Typography>
                <Typography variant="body1" paragraph>
                  Through our innovative AI solutions and strategic partnerships, we're helping healthcare 
                  providers streamline their operations, reduce administrative burden, and focus more on 
                  what matters most - patient care.
                </Typography>
                <Typography variant="body1">
                  Our commitment to excellence and continuous innovation ensures that we're always at the 
                  forefront of healthcare technology, delivering solutions that make a real difference in 
                  people's lives.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutPage;
