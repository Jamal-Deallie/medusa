import { styled } from '@mui/system';
import { Box, Tab, Tabs, Divider } from '@mui/material';

export const AccountSection = styled('section')(({ theme }) => ({
  background: theme.palette.primary.main,
  padding: '12.5rem 0 6.25rem',
  minHeight: 'calc(100vh - 10rem)',
}));

export const TabContainer = styled(Box)({
  marginTop: '2.5rem',
  display: 'flex',
  justifyContent: 'center',
});

export const CustomTab = styled(Tab)(({ theme }) => ({
  '&.MuiButtonBase-root.MuiTab-root': {
    fontFamily: 'open-sans, sans-serif',
    fontSize: '1.4rem',
    color: theme.palette.secondary.light,
  },
  '&.MuiTabs-indicator': {
    background: theme.palette.secondary.light,
  },
}));

export const CustomTabs = styled(Tabs)(({ theme }) => ({
  color: theme.palette.secondary.light,
  '& .MuiTabs-indicator': {
    background: theme.palette.secondary.light,
  },
}));

export const HeadingWrap = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
});

export const AccountOuter = styled(Box)({
  maxWidth: '120rem',
  margin: '0 auto',
  padding: 'calc(8px + 1.5625vw)',
});

export const CustomDivider = styled(Divider)(({ theme }) => ({
  background: theme.palette.secondary.light,
  marginTop: '3.5rem',
}));

export const PanelWrap = styled(Box)({
  paddingTop: '5.5rem',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
});
