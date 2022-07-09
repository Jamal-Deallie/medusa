import { styled } from '@mui/system';
import { Box, Typography, Tab, Tabs } from '@mui/material';

export const AccountContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,
  width: '100%',
  height: '100%'
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

export const Heading = styled(Typography)(({ theme }) => ({
  fontFamily: 'tenez, sans-serif',
  fontSize: '4.8rem',
  fontStyle: 'italic',
  color: theme.palette.secondary.light,
  lineHeight: 'calc(1.5 * 48px)',
  width: '100%',
  overflow: 'hidden',
  paddingBottom: '2.5rem',
  textAlign: 'center',
}));

export const CustomTabs = styled(Tabs)(({ theme }) => ({
  '& .MuiTabs-indicator': {
    background: theme.palette.secondary.light,
  },
}));
