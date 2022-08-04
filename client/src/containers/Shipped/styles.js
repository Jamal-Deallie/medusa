import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const ShippedSection = styled('section')(({ theme }) => ({
  background: theme.palette.primary.main,
  padding: '8.5rem 0',
  whiteSpace: 'normal',
  width: '100%',
  height: '100%',
}));

export const Image = styled('div')({
  width: '80vw',
  height: '70vh',
  background: 'url(images/pexels-alex-green-5693390.jpg)',
  backgroundPositionX: '50%',
  backgroundPositionY: '90%',
  backgroundSize: '100%',
  backgroundRepeat: 'no-repeat',
  margin: '0 auto',
});

export const Video = styled('video')({});

export const ImageContainer = styled(Box)(({ theme }) => ({
  height: '100vh',
  display: 'grid',
  placeContent: 'center',
  padding: '0 1rem',
}));
