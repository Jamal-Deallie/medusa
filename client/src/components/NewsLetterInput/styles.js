import { styled } from '@mui/system';
import { Container, Button, Typography, Box, InputBase } from '@mui/material';



export const NewsLetterSection = styled(Box)({
  width: '100%',
});

export const NewsLetterContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

export const NewsLetterHeader = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.light,
  fontSize: '4.8rem',
  fontFamily: 'tenez, sans-serif',
  marginBottom: '2.5rem',
  fontStyle: 'italic',
}));
export const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.light,
  fontSize: '1.6rem',
  fontFamily: 'muli, sans-serif',
  fontStyle: 'italic',
}));

export const EmailInput = styled('div')(({ theme }) => ({
  marginTop: '5.5rem',
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
  border: `1px solid ${theme.palette.secondary.light}`,
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
  color: theme.palette.secondary.light,
  width: '100%',
  '& .MuiInputBase-input': {
    backgroundColor: 'transparent',
    fontSize: '1.6rem',
    textTransform: 'uppercase',
  },
}));
