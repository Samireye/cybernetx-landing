import { Box } from '@mui/material';

const VideoBackground = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: 0,
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(2px)',
        },
      }}
    >
      <Box
        component="video"
        autoPlay
        muted
        loop
        playsInline
        poster="/videos/video-poster.jpg"
        src="/videos/background.mp4"
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
        }}
      />
    </Box>
  );
};

export default VideoBackground;
