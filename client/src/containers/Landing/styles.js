import { styled } from '@mui/system';
import { Container, Grid, Typography, Button } from '@mui/material';

export const LandingSection = styled('div')(({ theme }) => ({
  paddingBottom: '12.5rem',
  height: '100vh',
  width: '100%',
}));

export const LandingInner = styled('div')(({ theme }) => ({
  width: '100%',
  margin: '0 auto',
  // height: 'calc(100vh - 10rem)',
  height: '100vh',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5.5rem',
  },
}));

export const ContentContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'flex-start',
  height: 'calc(100vh - 10rem)',
  gap: '5%',
  [theme.breakpoints.down('sm')]: {
    height: 'auto',
  },
}));
// '&::-webkit-transform-style: preserve-3d'

// export const HeadingLeft = styled('p')`
//   font-size: clamp(5.03rem, calc(-1.77rem + 9.96vw), 15.87rem);
//   font-family: 'tenez, sans-serif';
//   font-style: italic;
//   color: #765a39;
//   line-height: 1.5;
//   font-kerning: none;
//   -webkit-text-rendering: optimizeSpeed;
//   text-rendering: optimizeSpeed;
//   -webkit-transform: translateZ(0);
//   transform: translateZ(0);
//   line-height: 1.2;
//   z-index: 3;
//   margin-top: 5%;
//   /* .lineParent {
//     overflow: hidden;
//     .lineChildren {
//       display: block;
//       // By chars
//       transform: translateY(110%) rotate(-6deg);
//     }
//   } */
// `;

export const HeadingLeft = styled('p')(({ theme }) => ({
  fontSize: 'clamp(8.53rem, calc(-1.77rem + 8.96vw), 15.87rem)',
  fontFamily: 'tenez, sans-serif',
  fontStyle: 'italic',
  color: theme.palette.secondary.dark,
  lineHeight: 1.5,
  fontKerning: 'none',
  textRendering: 'optimizeSpeed',
  transform: 'translateZ(0)',
  zIndex: 3,

  // marginTop: '5%',
  [theme.breakpoints.down('sm')]: {
    fontSize: '6.5rem',
    marginTop: 0,
  },
}));

export const HeadingRight = styled('p')(({ theme }) => ({
  fontSize: 'clamp(8.53rem, calc(-1.77rem + 8.96vw), 15.87rem)',
  fontFamily: 'tenez, sans-serif',
  fontStyle: 'italic',
  color: theme.palette.secondary.dark,
  lineHeight: 1.5,
  fontKerning: 'none',
  textRendering: 'optimizeSpeed',
  transform: 'translateZ(0)',
  zIndex: 3,
  marginTop: 'calc(100vh - 90vh)',
  [theme.breakpoints.down('sm')]: {
    fontSize: '6.5rem',
    marginTop: 0,
  },
}));


export const ImageContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  width: '100%',
  height: 'calc(100vh - 10rem)',
  display: 'flex',
  left: '50%',
  marginRight: '-50%',
  justifyContent: 'center',
  alignItems: 'center',
  transform: 'translateX(-50%)',
  zIndex: 2,
  [theme.breakpoints.down('sm')]: {
    height: 'auto',
    position: 'relative',
    marginRight: '0%',
    transform: 'translateX(0%)',
    left: '0',
  },
}));

export const ImageWrap = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '55%',
  height: '100%',
  clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
  zIndex: 2,
  background: theme.palette.primary.main,
}));

export const LandingImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const CustomButton = styled('button')(({ theme }) => ({
  background: theme.palette.secondary.main,
  color: theme.palette.primary.main,
  fontSize: 16,
  fontFamily: 'muli, sans-serif',
  fontWeight: 300,
  padding: '1rem 4rem',
  borderRadius: '3px',
  boxSizing: 'border-box',
  height: '5rem',
  width: '30rem',
  transition: 'border color background 0.2s ease-in-out',
  zIndex: 1,
  opacity: 0,
  '&:hover': {
    background: 'none',
    color: theme.palette.secondary.main,
    border: `2px solid ${theme.palette.secondary.main}`,
  },
}));

export const ContentInner = styled('div')(({ theme }) => ({
  padding: 'calc(8px + 1.5625vw)',
  display: 'flex',
  position: 'absolute',
  flexDirection: 'column',
  top: '50%',
  bottom: '50%',
  height: '30rem',
  minWidth: '35rem',
  width: '100%',
  [theme.breakpoints.down('lg')]: {
    alignItems: 'center',
    textAlign: 'center',
  },
}));

export const SubheaderWrap = styled('div')({
  position: 'relative',
});

export const FeatureContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  background: theme.palette.secondary.light,
  height: '30rem',
}));

export const Subheader = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.light,
  fontSize: '1.8rem',
  padding: '5rem 0',
  maxWidth: '50rem',
  overflow: 'hidden',
  display: 'inline-block',
  opacity: 1,
  transform: 'translateY(0px)',
}));

export const ButtonContainer = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginTop: '-5.5rem',
  overflow: 'hidden',
  [theme.breakpoints.down('sm')]: {
    marginTop: 0,
  },
}));
