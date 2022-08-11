import { styled } from '@mui/system';
import { Typography, Box, InputBase } from '@mui/material';

export const NewsLetterSection = styled(Box)({
  width: '100%',
});

export const NewsLetterContent = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: 'calc(8px + 1.5625vw)',
}));

export const NewsLetterHeader = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: 'clamp(3.73rem, calc(3.32rem + 2.02vw), 5.82rem)',
  fontFamily: 'tenez, sans-serif',
  marginBottom: '2.5rem',
  fontStyle: 'italic',
}));

export const EmailInput = styled('div')(({ theme }) => ({
  marginTop: '4.5rem',
  paddingRight: '1.5rem',
  position: 'relative',
  display: 'flex',
  justifyContent: 'flex-end',
  backgroundColor: 'transparent',
  height: '5.3rem',
  maxWidth: '45rem',
  width: '100%',
  '&:hover': {
    backgroundColor: 'transparent',
  },
  border: `1px solid ${theme.palette.primary.main}`,
  marginLeft: 0,
}));

export const InputIconWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  paddingLeft: '1.5rem',
  color: theme.palette.primary.main,
  width: '100%',
  '& .MuiInputBase-input': {
    backgroundColor: 'transparent',
    fontSize: '1.6rem',
    textTransform: 'uppercase',
  },
}));

export const SubmitBtn = styled('button')(({ theme }) => ({
  display: 'none',
}));
