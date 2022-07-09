import { styled } from '@mui/system';
import { Container, Typography } from '@mui/material';

export const ProductWrapper = styled(Container)({
  maxWidth: '120rem',
  margin: '0 auto',
  display: 'grid',
  gridGap: '5rem',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
});

export const ContentContainer = styled('div')({
  margin: '0 auto',
  maxWidth: '40rem',
});

export const HeadingContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  color: theme.palette.primary.main,
}));

export const Image = styled('img')({
  width: '100%',
  display: 'block',
  margin: '0 auto',
});

export const Text = styled(Typography)(({ theme }) => ({
  fontSize: '1.6rem',
  fontWeight: 400,
  textTransform: 'uppercase',
  color: theme.palette.primary.main,
}));

export const CardWrap = styled('div')(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.main}`,
  borderStyle: 'inset',
}));
