import { useState } from 'react';
import { Box, Typography, Tabs, Tab } from '@mui/material';
import BlogLayout from '../layouts/BlogLayout';
import BlogList from '../components/BlogList';
import NewsletterSubscribe from '../components/NewsletterSubscribe';

const BLOG_POSTS = [
  {
    slug: 'ai-in-healthcare-2025',
    title: "The Future of AI in Healthcare: 2025 Trends and Beyond",
    date: "2025-01-07",
    author: "CyberNetX Team",
    categories: ["AI", "Healthcare", "Technology"],
    excerpt: "Explore how artificial intelligence is revolutionizing healthcare in 2025, from automated documentation to predictive diagnostics.",
    image: "/blog/ai-healthcare-2025.svg"
  },
  {
    slug: 'medical-transcription-revolution',
    title: "The Medical Transcription Revolution",
    date: "2025-01-05",
    author: "CyberNetX Team",
    categories: ["AI", "Medical Transcription", "Efficiency"],
    excerpt: "Discover how AI is transforming medical transcription, reducing documentation time by 60%.",
    image: "/blog/medical-transcription.svg"
  },
  {
    slug: 'hipaa-compliance-ai',
    title: "HIPAA Compliance in the Age of AI",
    date: "2025-01-06",
    author: "CyberNetX Team",
    categories: ["HIPAA", "Compliance", "Security"],
    excerpt: "Learn how to maintain HIPAA compliance while leveraging AI technologies in your healthcare practice.",
    image: "/blog/hipaa-compliance.svg"
  }
];

const CATEGORIES = ['All', 'AI', 'Healthcare', 'Technology', 'Security', 'Compliance', 'Medical Transcription'];

const BlogHome = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(post => post.categories.includes(selectedCategory));

  return (
    <BlogLayout>
      <Typography variant="h2" component="h1" gutterBottom>
        Latest Insights
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Tabs
          value={selectedCategory}
          onChange={(_, newValue) => setSelectedCategory(newValue)}
          variant="scrollable"
          scrollButtons="auto"
        >
          {CATEGORIES.map(category => (
            <Tab key={category} label={category} value={category} />
          ))}
        </Tabs>
      </Box>

      <BlogList posts={filteredPosts} />

      <Box sx={{ mt: 8 }}>
        <NewsletterSubscribe />
      </Box>
    </BlogLayout>
  );
};

export default BlogHome;
