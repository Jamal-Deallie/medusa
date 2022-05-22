import { Link } from 'react-router-dom';
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
import { Bag, Search } from '../../components';

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
        <Link to='/'>
          <Logo src='/images/logos/logo-rough.svg' alt='medusa logo' />
        </Link>
        <OptionsContainer>
          <Search />
          {auth ? <Text>My Account</Text> : <Text>Sign In</Text>}
          <Bag />
        </OptionsContainer>
      </NavWrap>
    </Nav>
  );
}
