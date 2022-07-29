import { styled } from '@mui/system';
import { Typography, Box } from '@mui/material';

export const ContentContainer = styled(Box)({
  margin: '0 auto',
  width: '100%',
});

export const HeadingContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  color: theme.palette.primary.main,
  marginBottom: '.5rem',
}));

export const Image = styled('img')({
  width: '100%',
  display: 'block',
  margin: '0 auto',
});

export const CardWrap = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.main}`,
  borderStyle: 'inset',
}));
