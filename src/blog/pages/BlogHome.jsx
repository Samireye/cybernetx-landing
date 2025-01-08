import { useState } from 'react';
import { Box, Typography, Tabs, Tab } from '@mui/material';
import BlogLayout from '../layouts/BlogLayout';
import BlogList from '../components/BlogList';
import NewsletterSubscribe from '../components/NewsletterSubscribe';

// Import blog posts
import aiHealthcare from '../posts/ai-in-healthcare-2025.mdx';
import medicalTranscription from '../posts/medical-transcription-revolution.mdx';
import hipaaCompliance from '../posts/hipaa-compliance-ai.mdx';

const BLOG_POSTS = [
  {
    ...aiHealthcare.frontmatter,
    slug: 'ai-in-healthcare-2025',
    content: aiHealthcare.default
  },
  {
    ...medicalTranscription.frontmatter,
    slug: 'medical-transcription-revolution',
    content: medicalTranscription.default
  },
  {
    ...hipaaCompliance.frontmatter,
    slug: 'hipaa-compliance-ai',
    content: hipaaCompliance.default
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
