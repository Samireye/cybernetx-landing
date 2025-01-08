import { Box, IconButton, Tooltip } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const SocialShare = ({ title, url }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=Check out this article: ${url}`
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      gap: 1,
      alignItems: 'center',
      '& .MuiIconButton-root': {
        color: 'text.secondary',
        '&:hover': {
          color: 'primary.main',
          transform: 'translateY(-2px)',
        },
        transition: 'all 0.2s ease-in-out',
      }
    }}>
      <Tooltip title="Share on Twitter">
        <IconButton 
          onClick={() => window.open(shareLinks.twitter, '_blank')}
          aria-label="share on twitter"
        >
          <TwitterIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Share on LinkedIn">
        <IconButton 
          onClick={() => window.open(shareLinks.linkedin, '_blank')}
          aria-label="share on linkedin"
        >
          <LinkedInIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Share on Facebook">
        <IconButton 
          onClick={() => window.open(shareLinks.facebook, '_blank')}
          aria-label="share on facebook"
        >
          <FacebookIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Share via Email">
        <IconButton 
          onClick={() => window.open(shareLinks.email)}
          aria-label="share via email"
        >
          <EmailIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Copy Link">
        <IconButton 
          onClick={copyToClipboard}
          aria-label="copy link"
        >
          <ContentCopyIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default SocialShare;
