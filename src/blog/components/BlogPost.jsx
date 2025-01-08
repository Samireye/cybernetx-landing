import { Box, Typography, Chip, Divider } from '@mui/material';
import { format } from 'date-fns';

const BlogPost = ({ title, date, content, categories, author }) => {
  return (
    <Box>
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

      <Divider sx={{ my: 4 }} />

      <Box sx={{ 
        '& h1': { mt: 6, mb: 2, fontSize: '2.5rem' },
        '& h2': { mt: 5, mb: 2, fontSize: '2rem' },
        '& h3': { mt: 4, mb: 2, fontSize: '1.75rem' },
        '& p': { mb: 2, lineHeight: 1.7 },
        '& ul, & ol': { mb: 2, pl: 4 },
        '& li': { mb: 1 },
        '& img': { maxWidth: '100%', height: 'auto', borderRadius: 1 },
        '& code': { 
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          padding: '2px 4px',
          borderRadius: 1,
          fontFamily: 'monospace'
        },
        '& pre': {
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          padding: 2,
          borderRadius: 1,
          overflow: 'auto',
          '& code': {
            backgroundColor: 'transparent',
            padding: 0
          }
        },
        '& blockquote': {
          borderLeft: '4px solid',
          borderColor: 'primary.main',
          pl: 2,
          ml: 0,
          fontStyle: 'italic'
        }
      }}>
        {content}
      </Box>
    </Box>
  );
};

export default BlogPost;
