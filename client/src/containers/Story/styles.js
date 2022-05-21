import { styled } from '@mui/system';
import { Container, Button, Typography } from '@mui/material';

export const ImageContainer = styled('div', {
  shouldForwardProp: prop => prop !== '$rotate',
})(({ theme, $rotate }) => ({
  borderRadius: '91% 25% 39% 70% / 60% 51% 52% 53%',
  height: '30rem',
  width: '30rem',
  background: theme.palette.primary.dark,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transform: $rotate ? $rotate : 'none',
}));

export const PlantImage = styled('img')({
  height: '25rem',
  width: '25rem',
  transform: 'rotate(0.10turn)',
});

export const Subheader = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: '10.5rem',
  fontWeight: 400,
  fontFamily: 'Mightype',
  textAlign: 'center',
}));

export const StorySection = styled('section')(({ theme }) => ({
  background: theme.palette.primary.main,
  padding: '12rem 0',
}));

export const StoryWrap = styled(Container)({
  display: 'flex',
  gap: '5rem',
  textAlign: 'center',
  paddingTop: '7.5rem',
});
