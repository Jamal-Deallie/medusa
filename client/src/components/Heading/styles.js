import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';

export const Svg = styled('svg')({
  width: '80rem',
  height: '25rem',
});

export const Path = styled('path')({
  marginTop: '2rem',
});

export const Text = styled(Typography, {
  shouldForwardProp: prop => prop !== '$color',
})(({ theme, $color }) => ({
  fontFamily: ' tenez, sans-serif',
  fontSize: 'clamp(2.59rem, calc(0.51rem + 10.42vw), 7.93rem)',
  display: 'inline-block',
}));

export const HeadingSection = styled('section')({
  width: '100%',
  display: 'flex',
});

export const HeadingWrap = styled('div')({
  overflow: 'hidden',
});

export const HeadingContainer = styled(Box)({
  display: 'flex',
  gap: '2rem',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
});
