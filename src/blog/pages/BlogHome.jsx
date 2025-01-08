import { useState } from 'react';
import { Box, Typography, Tabs, Tab } from '@mui/material';
import BlogLayout from '../layouts/BlogLayout';
import BlogList from '../components/BlogList';
import NewsletterSubscribe from '../components/NewsletterSubscribe';

// This will be replaced with actual blog posts from the MDX files
const SAMPLE_POSTS = [
  {
    slug: 'ai-in-healthcare-2025',
    title: 'The Future of AI in Healthcare: 2025 Trends and Beyond',
    excerpt: 'Explore how artificial intelligence is revolutionizing healthcare in 2025, from automated documentation to predictive diagnostics.',
    date: '2025-01-07',
    categories: ['AI', 'Healthcare', 'Technology'],
    image: '/blog/images/ai-healthcare-2025.jpg',
    author: 'CyberNetX Team'
  },
  {
    slug: 'medical-transcription-revolution',
    title: 'The Medical Transcription Revolution: How AI is Saving Time and Improving Accuracy',
    excerpt: 'Discover how AI-powered medical transcription is helping healthcare providers save up to 60% of their documentation time while improving accuracy.',
    date: '2025-01-05',
    categories: ['AI', 'Medical Transcription', 'Case Study'],
    image: '/blog/images/medical-transcription.jpg',
    author: 'Dr. Sarah Chen'
  },
  {
    slug: 'hipaa-compliance-ai',
    title: 'HIPAA Compliance in the Age of AI: A Complete Guide',
    excerpt: 'Learn how to maintain HIPAA compliance while leveraging AI technologies in your healthcare practice. A comprehensive guide for healthcare providers.',
    date: '2025-01-03',
    categories: ['Healthcare', 'Security', 'Compliance'],
    image: '/blog/images/hipaa-compliance.jpg',
    author: 'Michael Roberts'
  }
];

const CATEGORIES = ['All', 'AI', 'Healthcare', 'Technology', 'Case Studies', 'Security', 'Compliance'];

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
      
      <NewsletterSubscribe />
    </BlogLayout>
  );
};

export default BlogHome;
