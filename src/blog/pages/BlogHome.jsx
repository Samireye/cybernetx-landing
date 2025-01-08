import { useState } from 'react';
import { Box, Typography, Tabs, Tab } from '@mui/material';
import BlogLayout from '../layouts/BlogLayout';
import BlogList from '../components/BlogList';

// This will be replaced with actual blog posts from the MDX files
const SAMPLE_POSTS = [
  {
    slug: 'ai-in-healthcare-2025',
    title: 'The Future of AI in Healthcare: 2025 Trends and Beyond',
    excerpt: 'Explore how artificial intelligence is revolutionizing healthcare in 2025, from automated documentation to predictive diagnostics.',
    date: '2025-01-07',
    categories: ['AI', 'Healthcare', 'Technology'],
    image: '/blog/ai-healthcare-2025.jpg',
    author: 'CyberNetX Team'
  },
  // More posts will be added here
];

const CATEGORIES = ['All', 'AI', 'Healthcare', 'Technology', 'Case Studies'];

const BlogHome = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All'
    ? SAMPLE_POSTS
    : SAMPLE_POSTS.filter(post => post.categories.includes(selectedCategory));

  return (
    <BlogLayout>
      <Typography variant="h2" component="h1" gutterBottom>
        Latest Insights
      </Typography>
      
      <Box sx={{ mb: 4 }}>
        <Tabs
          value={CATEGORIES.indexOf(selectedCategory)}
          onChange={(_, newValue) => setSelectedCategory(CATEGORIES[newValue])}
          variant="scrollable"
          scrollButtons="auto"
        >
          {CATEGORIES.map((category) => (
            <Tab key={category} label={category} />
          ))}
        </Tabs>
      </Box>

      <BlogList posts={filteredPosts} />
    </BlogLayout>
  );
};

export default BlogHome;
