import { styled } from '@mui/system';
import { Container, Button, Typography } from '@mui/material';

export const ProductWrapper = styled(Container)({
  maxWidth: '160rem',
  margin: '0 auto',
  display: 'grid',
  gridGap: '5rem',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
});

export const ContentContainer = styled('div')(({ theme }) => ({
  margin: '0 auto',
  maxWidth: '40rem',
}));

export const HeadingContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  color: theme.palette.primary.main,
  marginBottom: '1rem',
}));

export const Image = styled('img')`
  width: 100%;
  display: block;
  margin: 0 auto;
`;

export const Text = styled(Typography)(({ theme }) => ({
  fontSize: '1.6rem',
  fontWeight: 400,
  fontFamily: 'muli, sans-serif',
  fontStyle: 'italic',
  textTransform: 'uppercase',
  color: theme.palette.secondary.light,
}));

export const CardButton = styled(Button)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.secondary.main,
  fontSize: '1.8rem',
  width: '100%',
  // minWidth: '30rem',
  borderRadius: '0',
  height: '6.5rem',
  transition: 'all transform 250ms',
  fontWeight: 600,
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.dark,
  },
}));

export const CardWrap = styled('div')(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.main}`,
  borderStyle: 'inset',
}));
