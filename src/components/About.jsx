import { Box, Container, Typography, Grid } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          About CyberNetX
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Our Mission
            </Typography>
            <Typography paragraph>
              At CyberNetX, we're dedicated to revolutionizing healthcare through innovative AI solutions. 
              Our mission is to bridge the gap between medical providers and patients, making healthcare 
              more accessible, efficient, and personalized than ever before.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Our Vision
            </Typography>
            <Typography paragraph>
              We envision a future where AI technology seamlessly integrates with healthcare delivery, 
              empowering both providers and patients. Through our suite of innovative solutions, 
              we're making this vision a reality, one breakthrough at a time.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
