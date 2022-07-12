import { useState } from 'react';
import { Typography, Box } from '@mui/material';
import {
  TabContainer,
  CustomTab,
  AccountSection,
  CustomTabs,
  PanelWrap,
  HeadingWrap,
  AccountOuter,
  CustomDivider,
} from './styles';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/auth/authSlice';
import { LogoutButton } from '../../components';
const Panel = props => (
  <div hidden={props.value !== props.index}>
    <div>{props.children}</div>
  </div>
);

export default function FormContainer() {
  const [index, setIndex] = useState(0);
  const onTabClicked = (event, index) => {
    setIndex(index);
  };

  const name = useSelector(selectUser);



  return (
    <AccountSection>
      <AccountOuter>
        <HeadingWrap>
          {name && (
            <Typography
              variant='header1'
              sx={{ textAlign: 'center' }}>{`Hello ${name}`}</Typography>
          )}
          <Box sx={{ width: '35rem' }}>
            <LogoutButton />
          </Box>
          <CustomDivider />
        </HeadingWrap>
        <CustomDivider />
        <TabContainer>
          <CustomTabs value={index} onChange={onTabClicked}>
            <CustomTab label='Account Details' />
            <CustomTab label='Order History' />
            <CustomTab label='Update Profile' />
          </CustomTabs>
        </TabContainer>
        <PanelWrap>
          <Panel value={index} index={0}>
            <Typography variant='header1'>Account Details Test</Typography>
          </Panel>
          <Panel value={index} index={1}>
            <Typography variant='header1'>Order History Test</Typography>
          </Panel>
          <Panel value={index} index={2}>
            <Typography variant='header1'>Update Profile Test</Typography>
          </Panel>
        </PanelWrap>
      </AccountOuter>
    </AccountSection>
  );
}
