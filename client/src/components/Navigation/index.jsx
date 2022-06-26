import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { useLayoutEffect, useRef, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Nav,
  NavLinks,
  NavWrap,
  Logo,
  LinkContainer,
  OptionsContainer,
  Text,
  NavOption,
  OptionWrapper,
} from './styles';
import { navItems } from '../../shared/navItems';
import { useSelector } from 'react-redux';
import { selectCartQuantity } from '../../features/cart/cartSlice.js';
import { Cart, Search, ShopMenu } from '../../components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import useArrayRef from '../../hooks/useArrayRef';
import { navAnimation } from '../../animations/navAnimation';
import { useEnhancedEffect } from '../../hooks/useEnhancedEffect';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

export default function Navigation() {
  // const token = localStorage.getItem('token');

  const token = false;
  const quantity = useSelector(selectCartQuantity);
  // console.log(localStorage.getItem("token"));

  const [openMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [navLinks, setNavLinks] = useArrayRef();
  const tl = useRef();
  const navbar = useRef();
  const navWrap = useRef();
  const logo = useRef();
  const containerTrigger = useRef();
  const location = useLocation();
  const { pathname } = location;

  function handleMenu() {
    setOpenMenu(openMenu => !openMenu);
  }
  function handleCart() {
    setOpenCart(openCart => !openCart);
  }

  // useLayoutEffect(() => {
  //   const { pathname } = location;

  //   ScrollTrigger.matchMedia({
  //     // desktop
  //     '(min-width: 600px)': function () {
  //       // ScrollTrigger (this automatically gets killed when the breakpoint no longer matches...
  //       gsap.to('#panel', {
  //         scrollTrigger: {
  //           trigger: '#panel',
  //         },
  //       });

  //       // other animations that aren't ScrollTrigger-related...
  //       tl.current = gsap.timeline();

  //       tl.current
  //         .to(navbar.current, { delay: 2.2, zIndex: 6 })
  //         .to(navWrap.current, { opacity: 1 })
  //         .to(navLinks.current, {
  //           opacity: 1,
  //           duration: 1.5,
  //           ease: 'power3',
  //           y: 0,
  //           stagger: 0.1,
  //         })
  //         .to(
  //           logo.current,

  //           {
  //             opacity: 1,
  //             duration: 0.5,
  //             ease: 'slow',
  //           }
  //         );

  //       // THIS IS THE KEY! Return a function that'll get called when the breakpoint no longer matches so we can kill() the animation (or whatever)
  //       return function () {
  //         tl.kill();
  //         // other cleanup code can go here.
  //       };
  //     },
  //   });
  // });

  useEnhancedEffect(() => {
    navAnimation(
      pathname,
      containerTrigger.current,
      tl.current,
      navbar.current,
      navWrap.current,
      navLinks.current,
      logo.current
    );
  });


  return (
    <>
      <div ref={containerTrigger}>
        <Nav ref={navbar}>
          <NavWrap ref={navWrap}>
            <LinkContainer>
              <NavOption onClick={handleMenu} ref={setNavLinks}>
                SHOP
              </NavOption>

              <NavLinks to='about' ref={setNavLinks} $dn={'none'}>
                About
              </NavLinks>
              <NavLinks to='contactus' ref={setNavLinks} $dn={'none'}>
                Contact Us
              </NavLinks>
            </LinkContainer>
            <Link to='/'>
              <Logo
                src='/images/logos/logo-rough.svg'
                alt='medusa logo'
                ref={logo}
              />
            </Link>
            <OptionsContainer>
              <Search />
              {token ? (
                <NavLinks to='account' ref={setNavLinks} $dn={'none'}>
                  My Account
                </NavLinks>
              ) : (
                <NavLinks to='signin' ref={setNavLinks} $dn={'none'}>
                  Sign In
                </NavLinks>
              )}

              <NavOption onClick={handleCart} ref={setNavLinks}>
                Bag {quantity > 0 ? `(${quantity})` : ''}
              </NavOption>
            </OptionsContainer>
          </NavWrap>
        </Nav>
      </div>
      <ShopMenu openMenu={openMenu} handleMenu={handleMenu} />
      <Cart handleCart={handleCart} openCart={openCart} />
    </>
  );
}
