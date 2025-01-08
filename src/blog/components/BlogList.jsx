import { Grid, Card, CardContent, CardMedia, Typography, Box, Chip } from '@mui/material';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const BlogCard = ({ post }) => (
  <Card 
    component={Link} 
    to={`/blog/${post.slug}`}
    sx={{ 
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      textDecoration: 'none',
      transition: 'transform 0.2s',
      '&:hover': {
        transform: 'translateY(-4px)',
      }
    }}
  >
    <CardMedia
      component="img"
      height="200"
      image={post.image}
      alt={post.title}
      sx={{ objectFit: 'cover' }}
    />
    <CardContent sx={{ flexGrow: 1 }}>
      <Box sx={{ mb: 2 }}>
        {post.categories.map((category) => (
          <Chip
            key={category}
            label={category}
            size="small"
            sx={{ mr: 1, mb: 1 }}
          />
        ))}
      </Box>
      <Typography gutterBottom variant="h5" component="h2" color="text.primary">
        {post.title}
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        {post.excerpt}
      </Typography>
      <Box sx={{ mt: 'auto', pt: 2 }}>
        <Typography variant="caption" color="text.secondary">
          {format(new Date(post.date), 'MMMM dd, yyyy')}
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

const BlogList = ({ posts }) => {
  return (
    <Grid container spacing={4}>
      {posts.map((post) => (
        <Grid item key={post.slug} xs={12} sm={6} md={4}>
          <BlogCard post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default BlogList;
