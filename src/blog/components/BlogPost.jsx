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

  // Convert content string to paragraphs
  const contentParagraphs = post.content.split('\n\n').map((paragraph, index) => {
    // Check if the paragraph is a bullet list
    if (paragraph.includes('•')) {
      const items = paragraph.split('•').filter(item => item.trim());
      return (
        <Box key={index} sx={{ my: 2 }}>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {items.map((item, i) => (
              <li key={i} style={{ marginBottom: '0.5rem' }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                  <Typography component="span" sx={{ color: 'primary.main', mr: 1 }}>•</Typography>
                  <Typography>{item.trim()}</Typography>
                </Box>
              </li>
            ))}
          </ul>
        </Box>
      );
    }
    return (
      <Typography key={index} variant="body1" paragraph>
        {paragraph}
      </Typography>
    );
  });

  return (
    <BlogLayout title={post.title} category={post.categories[0]}>
      <article>
        <Box sx={{ 
          maxWidth: '800px', 
          mx: 'auto',
          px: { xs: 2, md: 0 }
        }}>
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom
            sx={{ 
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 600,
              mb: 3
            }}
          >
            {post.title}
          </Typography>
          
          <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
            <Typography variant="subtitle1" color="text.secondary" component="span">
              {format(new Date(post.date), 'MMMM dd, yyyy')}
            </Typography>
            {post.author && (
              <>
                <Typography color="text.secondary" sx={{ mx: 1 }}>•</Typography>
                <Typography variant="subtitle1" color="text.secondary" component="span">
                  by {post.author}
                </Typography>
              </>
            )}
          </Box>

          <Box sx={{ mb: 4 }}>
            {post.categories.map((category) => (
              <Chip
                key={category}
                label={category}
                size="small"
                sx={{ 
                  mr: 1,
                  mb: 1,
                  bgcolor: 'primary.main',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'primary.dark',
                  }
                }}
              />
            ))}
          </Box>

          {post.image && (
            <Box sx={{ mb: 6 }}>
              <img 
                src={post.image} 
                alt={post.title}
                style={{ 
                  width: '100%',
                  maxHeight: '400px',
                  objectFit: 'cover',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
              />
            </Box>
          )}

          <Box sx={{ 
            typography: 'body1',
            '& > p': {
              mb: 2,
              lineHeight: 1.7,
              fontSize: '1.1rem'
            }
          }}>
            {contentParagraphs}
          </Box>

          <Box sx={{ 
            mt: 8, 
            pt: 4, 
            borderTop: 1, 
            borderColor: 'divider'
          }}>
            <SocialShare title={post.title} />
          </Box>
        </Box>
      </article>
    </BlogLayout>
  );
};

export default BlogPost;
