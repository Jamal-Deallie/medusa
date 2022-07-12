import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const NotFoundSection = styled(Box)(({ theme }) => ({
  padding: '12.5rem 0',
  background: theme.palette.secondary.light,
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const Numbers = styled('img')({
  width: '15vw',
  display: 'inline-block',
});

export const NotFoundOuter = styled(Box)({
  margin: '0 auto',
  padding: 'calc(8px + 1.5625vw)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '3.5rem',
});

export const NotFoundInner = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
});
