import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

export const MenuSection = styled('div', {
  shouldForwardProp: prop => prop !== '$open',
})(({ theme, $open }) => ({

  marginLeft: '4rem',
  padding: '2.5rem',
  backgroundColor: theme.palette.secondary.main,
  display: 'flex',
  transition: 'transform 250ms',
  transform: $open ? 'translateY(0%)' : 'translateY(-100%)',
  position: 'absolute',
  zIndex: 1,
  borderRadius: '0  0  1rem 1rem',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '2.5rem',
}));

export const Links = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '1.6rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  fontFamily: 'open Sans, sans-serif',
  textTransform: 'uppercase',
}));
