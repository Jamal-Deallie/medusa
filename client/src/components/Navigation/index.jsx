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

export default function Navigation() {
  const quantity = 1;
  const auth = false;

  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(open => !open);
  }

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
                lineHeight:'1'
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
            {auth ? <Text>My Account</Text> : <Text>Sign In</Text>}
            <Bag />
          </OptionsContainer>
        </NavWrap>
      </Nav>
      <ShopMenu handleClick={handleClick} open={open}/>
    </>
  );
}
