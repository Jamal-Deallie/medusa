import { useState } from 'react';
import { Box, Tabs } from '@mui/material';
import { TabContainer, CustomTab, Heading, CustomTabs } from './styles';

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
    <AccountContainer>
      <Heading>My Account</Heading>
      <TabContainer>
        <CustomTabs value={index} onChange={onTabClicked}>
          <CustomTab label='Account Details' />
          <CustomTab label='Order History' />
          <CustomTab label='Saved Credit Cards' />
        </CustomTabs>
      </TabContainer>
      <Panel value={index} index={0}></Panel>
      <Panel value={index} index={1}></Panel>
      <Panel value={index} index={2}></Panel>
    </AccountContainer>
  );
}
