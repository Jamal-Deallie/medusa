import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { useMemo, useState } from 'react';
import {
  Nav,
  NavLinks,
  NavWrap,
  Logo,
  LinkContainer,
  OptionsContainer,
  Text,
  NavOption,
} from './styles';
import { navItems } from '../../shared/navItems';
import { Bag, Search, ShopMenu } from '../../components';
import use from '../../hooks/useAuth';

export default function Navigation() {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(open => !open);
  }
  // const token = localStorage.getItem('token');

  const token = false;

  // console.log(localStorage.getItem("token"));
  return (
    <>
      <Nav>
        <NavWrap>
          <LinkContainer>
            <NavOption onClick={handleClick}>SHOP</NavOption>
            <NavLinks to='about' variant='text'>
              About
            </NavLinks>
            <NavLinks to='contactus' variant='text'>
              Contact Us
            </NavLinks>
          </LinkContainer>
          <Link to='/'>
            <Logo src='/images/logos/logo-rough.svg' alt='medusa logo' />
          </Link>
          <OptionsContainer>
            <Search />
            {token ? (
              <Text>My Account</Text>
            ) : (
              <NavLinks to='signin'>Sign In</NavLinks>
            )}
            <Bag />
          </OptionsContainer>
        </NavWrap>
      </Nav>
      <ShopMenu handleClick={handleClick} open={open} />

    </>
  );
}
