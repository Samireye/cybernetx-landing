import { Box, Typography, Chip, Divider } from '@mui/material';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BlogLayout from '../layouts/BlogLayout';
import SocialShare from './SocialShare';

const BlogPost = ({ post }) => {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  if (!post) {
    return null;
  }

  const { title, date, categories, author } = post;

  return (
    <BlogLayout>
      <Typography variant="h2" component="h1" gutterBottom>
        {title}
      </Typography>
      
      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1" color="text.secondary" component="span">
          {format(new Date(date), 'MMMM dd, yyyy')}
        </Typography>
        {author && (
          <Typography variant="subtitle1" color="text.secondary" component="span" sx={{ ml: 2 }}>
            by {author}
          </Typography>
        )}
      </Box>

      <Box sx={{ mb: 4 }}>
        {categories.map((category) => (
          <Chip
            key={category}
            label={category}
            sx={{ mr: 1 }}
          />
        ))}
      </Box>

      {currentUrl && (
        <Box sx={{ mb: 4 }}>
          <SocialShare title={title} url={currentUrl} />
        </Box>
      )}

      <Divider sx={{ my: 4 }} />

      <Box sx={{ 
        '& img': {
          maxWidth: '100%',
          height: 'auto',
          borderRadius: 1,
          mb: 2
        },
        '& a': {
          color: 'primary.main',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline'
          }
        },
        '& blockquote': {
          borderLeft: '4px solid',
          borderColor: 'primary.main',
          pl: 2,
          my: 2,
          fontStyle: 'italic'
        }
      }}>
        <Typography variant="body1">
          {post.excerpt}
        </Typography>
      </Box>
    </BlogLayout>
  );
};

export default BlogPost;
