import { styled } from '@mui/system';
import { Box } from '@mui/material';
export const StyledLayout = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
  width: 100%;
`;
// export const NavContainer = styled('div')`
//   flex: 1;
//   position: fixed,
//   height: 10rem;

// `;

export const NavContainer = styled('div')(({ theme }) => ({
  flexGrow: 1,
  height: '10rem',
  background: theme.palette.primary.main,
  width: '100%',
}));

export const ContentContainer = styled('main')({
  flexGrow: 2,
  minHeight: '60rem',
  position: 'relative',
  width: '100%',
});

export const FooterContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  flexGrow: 1,
  height: '40rem',
  width: '100%',
}));
