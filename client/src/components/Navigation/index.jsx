import { Link } from 'react-router-dom';
import {
  Nav,
  NavLinks,
  NavWrap,
  Logo,
  LinkContainer,
  OptionsContainer,
  NavSearch,
} from './styles';
import { Cart, Search, ShopMenu } from '../../components';
import { selectToken } from '../../features/auth/authSlice';
import { useSelector } from 'react-redux';

export default function Navigation() {
  const token = useSelector(selectToken);

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
              Contact
            </NavLinks>
          </LinkContainer>
          <Link to='/'>
            <Logo src='/images/logos/logo-rough.svg' alt='medusa logo' />
          </Link>
          <OptionsContainer>
            <NavSearch>
              <Search />
            </NavSearch>
            <NavLinks to={token ? 'account' : 'signin'} $dn={'none'}>
              Account
            </NavLinks>
            <Cart />
          </OptionsContainer>
        </NavWrap>
      </Nav>
    </>
  );
}
