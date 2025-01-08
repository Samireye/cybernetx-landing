import { Box, Container, Typography, Grid, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const SolutionsPage = () => {
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
            CyberMedAssist
          </Typography>
          <Typography 
            variant="h5" 
            color="text.secondary" 
            sx={{ mb: 4 }}
          >
            Your AI assistant for medical billing, coding, insurance, and practice management
          </Typography>
        </Box>

        {/* Demo Screenshot */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Paper 
            elevation={3}
            sx={{ 
              p: 2, 
              maxWidth: '800px', 
              mx: 'auto',
              bgcolor: '#1a1f2e',
              borderRadius: 2
            }}
          >
            <img 
              src="/cybermedassist-demo.png" 
              alt="CyberMedAssist Demo"
              style={{ 
                width: '100%',
                height: 'auto',
                borderRadius: '8px'
              }}
            />
          </Paper>
        </Box>

        {/* Key Features */}
        <Box sx={{ mb: 8 }}>
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom
            sx={{ 
              textAlign: 'center',
              mb: 4
            }}
          >
            Key Features
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper 
                elevation={2}
                sx={{ 
                  p: 3, 
                  height: '100%',
                  bgcolor: 'background.paper',
                  '&:hover': {
                    bgcolor: 'background.paper',
                    transform: 'translateY(-4px)',
                    transition: 'transform 0.3s ease-in-out'
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <HealthAndSafetyIcon sx={{ mr: 2, color: 'primary.main', fontSize: '2rem' }} />
                  <Typography variant="h6">Medical Billing & Coding</Typography>
                </Box>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <AutoAwesomeIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="ICD-10 and CPT code lookups" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <AutoAwesomeIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Billing procedure guidance" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <AutoAwesomeIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Documentation requirements" />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper 
                elevation={2}
                sx={{ 
                  p: 3, 
                  height: '100%',
                  bgcolor: 'background.paper',
                  '&:hover': {
                    bgcolor: 'background.paper',
                    transform: 'translateY(-4px)',
                    transition: 'transform 0.3s ease-in-out'
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <AccountBalanceIcon sx={{ mr: 2, color: 'primary.main', fontSize: '2rem' }} />
                  <Typography variant="h6">Insurance & Claims</Typography>
                </Box>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <AutoAwesomeIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Insurance claim assistance" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <AutoAwesomeIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Coverage verification" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <AutoAwesomeIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Prior authorization support" />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper 
                elevation={2}
                sx={{ 
                  p: 3, 
                  height: '100%',
                  bgcolor: 'background.paper',
                  '&:hover': {
                    bgcolor: 'background.paper',
                    transform: 'translateY(-4px)',
                    transition: 'transform 0.3s ease-in-out'
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <BusinessCenterIcon sx={{ mr: 2, color: 'primary.main', fontSize: '2rem' }} />
                  <Typography variant="h6">Practice Management</Typography>
                </Box>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <AutoAwesomeIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Workflow optimization" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <AutoAwesomeIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Compliance guidance" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <AutoAwesomeIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Best practices implementation" />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper 
                elevation={2}
                sx={{ 
                  p: 3, 
                  height: '100%',
                  bgcolor: 'background.paper',
                  '&:hover': {
                    bgcolor: 'background.paper',
                    transform: 'translateY(-4px)',
                    transition: 'transform 0.3s ease-in-out'
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <CodeIcon sx={{ mr: 2, color: 'primary.main', fontSize: '2rem' }} />
                  <Typography variant="h6">Technical Integration</Typography>
                </Box>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <AutoAwesomeIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="AWS Bedrock powered" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <AutoAwesomeIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Secure data handling" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <AutoAwesomeIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="HIPAA compliant infrastructure" />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* Coming Soon Banner */}
        <Box 
          sx={{ 
            textAlign: 'center',
            p: 4,
            borderRadius: 2,
            bgcolor: 'rgba(0, 136, 255, 0.1)',
            border: '1px solid rgba(0, 136, 255, 0.2)'
          }}
        >
          <Typography variant="h4" gutterBottom>
            Coming Soon
          </Typography>
          <Typography variant="body1" color="text.secondary">
            We're currently working on making CyberMedAssist even better. Stay tuned for updates!
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default SolutionsPage;
