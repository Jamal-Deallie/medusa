import { styled } from '@mui/system';
import { Grid, Box } from '@mui/material';
export const FeatureInner = styled('div')({});

export const Item = styled('img')({
  width: '15rem',
});

export const GridItem = styled(Grid)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2.5rem',
  padding: '5rem',
}));

export const InnerContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '16rem',
  height: '8rem',
  overflow: 'hidden',
});

export const GridContainer = styled(Grid)({
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: '120rem',
});
