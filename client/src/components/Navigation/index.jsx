import { Container } from '@mui/material';
import { useMemo, useState } from 'react';
import {
  Nav,
  NavLinks,
  NavWrap,
  Logo,
  LinkContainer,
  OptionsContainer,
  Text,
} from './styles';
import { navItems } from '../../shared/navItems';


export default function Navigation() {
  const quantity = 1;
  const auth = false;

  const NavOptions = navItems.map(items => {
    return (
      <NavLinks to={items.link} key={items.id} variant='text'>
        {items.label}
      </NavLinks>
    );
  });

  return (
    <Nav>
      <NavWrap>
        <LinkContainer>{NavOptions}</LinkContainer>
        <Logo src='/images/logos/logo-rough.svg' alt='medusa logo' />
        <OptionsContainer>
          <Text>Search</Text>
          {auth ? <Text>My Account</Text> : <Text>Sign In</Text>}
          <Text>Bag ({quantity})</Text>
        </OptionsContainer>
      </NavWrap>
    </Nav>
  );
}
