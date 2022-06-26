import { useSelector } from 'react-redux';
import { selectToken, selectUser } from '../../features/auth/authSlice';
import { useState } from 'react';
import { Box } from '@mui/material';
import Tabs from '@mui/material/Tabs';

import { TabContainer, CustomTab } from './styles';

const Panel = props => (
  <div hidden={props.value !== props.index}>
    <div>{props.children}</div>
  </div>
);

export default function AccountContainer() {
  const [index, setIndex] = useState(0);
  const onTabClicked = (event, index) => {
    setIndex(index);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <TabContainer>
        <Tabs value={index} onChange={onTabClicked}>
          <CustomTab label='Enter Transaction' />
          <CustomTab label='Update Profile' />
          <CustomTab label='Upload Avatar' />
        </Tabs>
      </TabContainer>
      <Panel value={index} index={0}></Panel>
      <Panel value={index} index={1}></Panel>
      <Panel value={index} index={2}></Panel>
    </Box>
  );
}
