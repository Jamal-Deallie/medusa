import { styled } from '@mui/system';

export const Image = styled('img')`
  width: 100%;
  display: block;
  margin: 0 auto;
`;

export const Icon = styled('img')({
  height: '3.5rem',
});

export const ContentContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  padding: '0 5rem',
  gap: '5rem',
});

export const IconWrap = styled('div')({});

export const ImageWrap = styled('div')({
  padding: '2rem',
});
export const HeaderWrap = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const IconContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
});

export const DetailsSection = styled('section')(({ theme }) => ({
  width: '100%',
  height: '100%',
  background: theme.palette.secondary.light,
}));

export const DetailsContainer = styled('div')({
  padding: '12.5rem 0',
  maxWidth: '140rem',
  width: '100%',
  margin: '0 auto',
});
