import { Link } from 'react-router-dom';
import {
  Nav,
  NavLinks,
  NavWrap,
  Logo,
  LinkContainer,
  OptionsContainer,
} from './styles';
import { Cart, Search, ShopMenu } from '../../components';
import { selectToken } from '../../features/auth/authSlice';
import { useSelector } from 'react-redux';

export default function Navigation() {
  // const token = localStorage.getItem('token');
  // const token = false;
  const token = useSelector(selectToken);
  console.log(token);
  // console.log(localStorage.getItem("token"));

  return (
    <>
      <Nav>
        <NavWrap>
          <LinkContainer>
            <ShopMenu />
            <NavLinks to='about' $dn={'none'}>
              About
            </NavLinks>
            <NavLinks to='contactus' $dn={'none'}>
              Contact Us
            </NavLinks>
          </LinkContainer>
          <Link to='/'>
            <Logo src='/images/logos/logo-rough.svg' alt='medusa logo' />
          </Link>
          <OptionsContainer>
            <NavLinks to={token ? 'account' : 'signin'} $dn={'none'}>
              Account
            </NavLinks>
            <Search />
            <Cart />
          </OptionsContainer>
        </NavWrap>
      </Nav>
    </>
  );
}
