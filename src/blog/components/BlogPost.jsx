import { useParams } from 'react-router-dom';
import { Typography, Box, Chip, Container } from '@mui/material';
import { format } from 'date-fns';
import BlogLayout from '../layouts/BlogLayout';
import { BLOG_POSTS } from '../data/posts';
import SocialShare from './SocialShare';

const BlogPost = () => {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return (
      <BlogLayout>
        <Typography variant="h4" component="h1" gutterBottom>
          Post not found
        </Typography>
        <Typography>
          Sorry, the blog post you're looking for doesn't exist.
        </Typography>
      </BlogLayout>
    );
  }

  return (
    <BlogLayout title={post.title} category={post.categories[0]}>
      <article>
        <Typography variant="h2" component="h1" gutterBottom>
          {post.title}
        </Typography>
        
        <Box sx={{ mb: 4 }}>
          <Typography variant="subtitle1" color="text.secondary" component="span">
            {format(new Date(post.date), 'MMMM dd, yyyy')}
          </Typography>
          {post.author && (
            <Typography variant="subtitle1" color="text.secondary" component="span" sx={{ ml: 2 }}>
              by {post.author}
            </Typography>
          )}
        </Box>

        <Box sx={{ mb: 3 }}>
          {post.categories.map((category) => (
            <Chip
              key={category}
              label={category}
              size="small"
              sx={{ mr: 1 }}
            />
          ))}
        </Box>

        {post.image && (
          <Box sx={{ mb: 4 }}>
            <img 
              src={post.image} 
              alt={post.title}
              style={{ 
                width: '100%',
                maxHeight: '400px',
                objectFit: 'cover',
                borderRadius: '8px'
              }}
            />
          </Box>
        )}

        <Typography variant="body1" sx={{ mb: 4 }}>
          {post.content}
        </Typography>

        <Box sx={{ mt: 6, pt: 4, borderTop: 1, borderColor: 'divider' }}>
          <SocialShare title={post.title} />
        </Box>
      </article>
    </BlogLayout>
  );
};

export default BlogPost;
