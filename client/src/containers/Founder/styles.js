import { styled } from '@mui/system';

export const FounderSection = styled('section')(({ theme }) => ({
  paddingTop: '12.5rem',
  background: theme.palette.primary.main,
}));

export const QuoteContainer = styled('div')(({ theme }) => ({
  marginTop: '7.5rem',
  borderRadius: '1rem',
  background: theme.palette.primary.dark,
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '5rem',
}));

export const FounderImage = styled('img')({});

export const SignatureWrap = styled('div')({});

export const Signature = styled('img')({
  width: '30rem',
});

export const FounderWrap = styled('div')({
  maxWidth: '140rem',
  margin: '0 auto',
});
