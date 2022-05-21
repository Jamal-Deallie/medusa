import { styled } from '@mui/system';

export const CustomFooter = styled('footer')(({ theme }) => ({
  background: theme.palette.primary.main,
  minHeight: '40rem',
  width: '100%',
  position: 'relative',
}));

export const FooterOuter = styled('div')({
  height: '30rem',
  width: '100%',
  position: 'relative',

});


export const FooterInner = styled('div')({
  height: '30rem',
  width: '100%',
  position: 'absolute',
  bottom: 0,
  right: 0,
});
