import { Box, Container, Typography, Breadcrumbs, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const BlogLayout = ({ children, title, category }) => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Breadcrumbs sx={{ mb: 4 }}>
          <Link component={RouterLink} to="/" color="inherit">
            Home
          </Link>
          <Link component={RouterLink} to="/blog" color="inherit">
            Blog
          </Link>
          {category && (
            <Link component={RouterLink} to={`/blog/category/${category}`} color="inherit">
              {category}
            </Link>
          )}
          {title && (
            <Typography color="text.primary">{title}</Typography>
          )}
        </Breadcrumbs>
        {children}
      </Container>
    </Box>
  );
};

export default BlogLayout;
