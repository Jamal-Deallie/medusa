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
} from './styles';
import { navItems } from '../../shared/navItems';
import { Bag, Search, ShopMenu } from '../../components';
import useAuth from '../../hooks/useAuth';

export default function Navigation() {

  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(open => !open);
  }
  // const token = localStorage.getItem('token');

 const token = false
  
  // console.log(localStorage.getItem("token"));
  return (
    <>
      <Nav>
        <NavWrap>
          <LinkContainer>
            <Typography
              color='primary.main'
              sx={{
                fontSize: '1.6rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                textTransform: 'uppercase',
                fontFamily: 'open Sans, sans-serif',
                lineHeight: '1.5',
              }}
              onClick={handleClick}>
              SHOP
            </Typography>
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
