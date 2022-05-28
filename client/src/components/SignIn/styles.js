import { styled } from '@mui/material/styles';
import { Container, Typography, TextField, Button } from '@mui/material';

export const LoginSection = styled('div')(({ theme }) => ({

  padding: '12.5rem 0',
}));

export const LoginWrap = styled('div')({
  width: '45rem',
  margin: '0 auto',
});
export const CustomButton = styled(Button)`
  font-family: 'open Sans', sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #1c1c1c;
  cursor: pointer;
  border: 3px solid;
  padding: 1.2rem 1rem;
  background: #e9e7dc;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,
    5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:hover {
    box-shadow: 0px 0px 0px 0px;
    top: 5px;
    left: 5px;
  }
`;

export const FormWrap = styled('div')`
  padding-top: 7.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.5rem;
`;

export const CustomInput = styled(TextField)({
  '& label.Mui-focused': {
    color: ' #e9e7dc',
  },
  '& label': {
    color: ' #1c1c1c',
    fontFamily: 'open-sans, sans-serif',
    fontSize: 18,
    margin: 'dense',
  },
  '&& .MuiInput-underline:hover:before': {
    borderBottomColor: '#e9e7dc',
  },
  '& .MuiInput-underline': {
    marginTop: 25,
  },
  '& .MuiInput-input': {
    fontSize: 18,
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#1c1c1c',
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: ' #1c1c1c',
  },
  '& .MuiInput-underline:focused': {
    borderBottomColor: ' #e9e7dc',
  },
});

export const Link = styled(Typography)(({ theme }) => ({
  cursor: 'pointer',
  fontSize: '1.2rem',
  '&:hover': {
    color: theme.palette.secondary.main,
    fontWeight: 800,
  },
}));
