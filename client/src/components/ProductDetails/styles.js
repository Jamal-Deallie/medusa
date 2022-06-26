import { styled } from '@mui/system';
import { Button, Typography, Divider, Grid } from '@mui/material';

export const Image = styled('img')`
  width: 100%;
  display: block;
  margin: 0 auto;
`;

export const Icon = styled('img')({
  height: '4.5rem',
});

export const CustomDivider = styled(Divider)(({ theme }) => ({
  background: theme.palette.secondary.light,
}));

export const ContentContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  padding: '0 5rem',
  gap: '5rem',
});

export const Subheader = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.light,
  fontSize: 'clamp(1.44rem, calc(0.78rem + 3.29vw), 3.6rem)',
  fontFamily: ' tenez, sans-serif',
  lineHeight: 1.5,
  fontStyle: 'italic',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
}));

export const Text = styled(Typography)(({ theme }) => ({
  fontFamily: 'muli, sans-serif',
  color: theme.palette.secondary.light,
  fontSize: 'clamp(1.56rem, calc(1.22rem + 1.71vw), 1.8rem)',
  fontStyle: 'italic',
}));
export const Caption = styled(Typography)(({ theme }) => ({
  fontFamily: 'muli, sans-serif',
  color: theme.palette.secondary.light,
  fontSize: '1.26rem',
  fontStyle: 'italic',
  textAlign: 'center',
}));

export const IconWrap = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

export const ImageWrap = styled('div')({
  padding: '2rem',
});
export const HeaderWrap = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const IconContainer = styled(Grid)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
});

export const DetailsSection = styled('section')(({ theme }) => ({
  width: '100%',
  height: '100%',
  background: theme.palette.primary.main,
}));

export const DetailsContainer = styled('div')(({ theme }) => ({
  padding: '12.5rem 0',
  maxWidth: '140rem',
  width: '100%',
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    padding: '5.5rem 0',
  },
}));

export const CardButton = styled(Button)(({ theme }) => ({
  background: theme.palette.secondary.main,
  color: theme.palette.primary.main,
  fontSize: '1.8rem',
  width: '100%',
  // minWidth: '30rem',
  borderRadius: '0',
  height: '6.5rem',
  transition: 'background .4 ease',
  fontWeight: 600,
  '&:hover': {
    background: theme.palette.secondary.dark,
  },
}));
