import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    { enforce: 'pre', ...mdx() },
    react()
  ],
  optimizeDeps: {
    include: ['@mdx-js/react']
  },
  server: {
    historyApiFallback: true
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          blog: [
            './src/blog/components/BlogList.jsx',
            './src/blog/components/BlogPost.jsx',
            './src/blog/components/NewsletterSubscribe.jsx',
            './src/blog/components/SocialShare.jsx'
          ]
        }
      }
    }
  }
});
