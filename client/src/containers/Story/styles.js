import { styled } from '@mui/system';
import { Container, Button, Typography, Box } from '@mui/material';

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
  color: theme.palette.primary.main,
  fontSize: ' clamp(2.59rem, calc(0.51rem + 10.42vw), 7.93rem)',
  fontFamily: 'Mightype',
  textAlign: 'center',
  lineHeight: 1.5,
}));

export const StorySection = styled('section')(({ theme }) => ({
  background: theme.palette.secondary.light,
  paddingTop: '12.5rem',
}));

export const StoryWrap = styled(Box)({
  paddingTop: '5rem',
  textAlign: 'center',
  maxWidth: '70rem',
  margin: '0 auto',
});

export const CustomButton = styled(Button)(({ theme }) => ({
  marginTop: '5.5rem',
  fontFamily: 'open-sans, sans-serif',
  alignItems: 'center',
  transition: 'all .3s',
  display: 'inline-flex',
  boxSizing: 'border-box',
  padding: '0 1.7rem',
  height: '4.8rem',
  backgroundColor: 'none',
  border: `2px solid ${theme.palette.primary.main}`,
  fontSize: '1.6rem',
  fontWeight: '600',
  color: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
  },
}));

// <!-- HTML !-->
// <button class="button-58" role="button">Button 58</button>

// /* CSS */
// .button-58 {
//   align-items: center;
//   background-color: #06f;
//   border: 2px solid #06f;
//   box-sizing: border-box;
//   color: #fff;
//   cursor: pointer;
//   display: inline-flex;
//   fill: #000;
//   font-family: Inter,sans-serif;
//   font-size: 16px;
//   font-weight: 600;
//   height: 48px;
//   justify-content: center;
//   letter-spacing: -.8px;
//   line-height: 24px;
//   min-width: 140px;
//   outline: 0;
//   padding: 0 17px;
//   text-align: center;
//   text-decoration: none;
//   transition: all .3s;
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
// }

// .button-58:focus {
//   color: #171e29;
// }

// .button-58:hover {
//   background-color: #3385ff;
//   border-color: #3385ff;
//   fill: #06f;
// }

// .button-58:active {
//   background-color: #3385ff;
//   border-color: #3385ff;
//   fill: #06f;
// }

// @media (min-width: 768px) {
//   .button-58 {
//     min-width: 170px;
//   }
// }
