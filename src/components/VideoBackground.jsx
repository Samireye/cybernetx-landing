import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const VideoContainer = styled(Box)({
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
    background: 'rgba(0, 0, 0, 0.6)', // Darkening overlay
    backdropFilter: 'blur(2px)', // Slight blur effect
  },
});

const Video = styled('video')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

const VideoBackground = () => {
  return (
    <VideoContainer>
      <Video>
        autoPlay
        muted
        loop
        playsInline
        poster="/videos/video-poster.jpg"
        src="/videos/background.mp4"
        type="video/mp4"
      </Video>
    </VideoContainer>
  );
};

export default VideoBackground;
