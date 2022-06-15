import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import {
  Nav,
  NavWrap,
  Logo,
  LinkContainer,
  OptionsContainer,
  NavOptions,
  Icons,
  ButtonContainer,
  Links,
  SocialSection,
  MenuOptions,
  ButtonWrap,
  AddressContainer,
  SocialContainer,
  Subheader,
  RightContainer,
  LeftContainer,
  Close,
  MobileMenu,
  LinkWrap,
} from './styles';
import { navItems } from '../../shared/navItems';
import { Bag, Search, ShopMenu } from '../../components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(open => !open);
  }
  const tl = useRef();
  console.log(open);
  useEffect(() => {
    let aboutSections = gsap.utils.toArray('#left-sections');
    let menuLinks = gsap.utils.toArray('#menu-link');
    tl.current = gsap.timeline({ pause: true });
    gsap.set('#bottom-container', { xPercent: '-150' });
    gsap.set('#top-container', { xPercent: '100' });
    tl.current
      .to('#bottom-container', {
        duration: 0.5,
        xPercent: '0',
        ease: 'power3.inOut',
      })
      .fromTo(
        '#top-container',
        { opacity: 0, xPercent: '100' },
        { duration: 0.5, opacity: 1, xPercent: '0', ease: 'power3.inOut' },
        0
      )
      .fromTo('#menu-close', { opacity: 0 }, { opacity: 1 })
      .fromTo(
        menuLinks,
        { yPercent: '100' },
        { yPercent: '0', stagger: 0.25 },
        0
      )
      .fromTo(
        aboutSections,
        { yPercent: '100' },
        { yPercent: '0', stagger: 0.25 },
        0
      );
  }, []);

  useEffect(() => {
    open ? tl.current.play() : tl.current.reverse();
    if (open) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [tl, open]);
  // const token = localStorage.getItem('token');

  const token = false;

  // console.log(localStorage.getItem("token"));
  return (
    <div>
      <Nav>
        <NavWrap>
          <ButtonWrap onClick={handleClick}>
            <ButtonContainer id='mobile-menu'>
              <NavOptions>Menu</NavOptions>
            </ButtonContainer>
          </ButtonWrap>

          <Link to='/'>
            <Logo src='/images/logos/logo-rough.svg' alt='medusa logo' />
          </Link>
          <OptionsContainer>
            <Search />
            {/* {token ? (
              <Text>My Account</Text>
            ) : (
              <NavLinks to='signin'>Sign In</NavLinks>
            )} */}
            <Bag />
          </OptionsContainer>
        </NavWrap>

        <MenuOptions id='top-container'>
          <RightContainer>
            <ButtonWrap onClick={handleClick}>
              <ButtonContainer id='mobile-menu'>
                <Close>Close</Close>
              </ButtonContainer>
            </ButtonWrap>
            <Box>
              <LinkWrap>
                <Links onClick={handleClick} to='shop' id='menu-link'>
                  Shop All
                </Links>
              </LinkWrap>

              <LinkWrap>
                <Links
                  onClick={handleClick}
                  to='category/easy-care'
                  id='menu-link'>
                  Easy Care
                </Links>
              </LinkWrap>

              <LinkWrap>
                <Links
                  onClick={handleClick}
                  to='category/large-plants'
                  id='menu-link'>
                  Large Plants
                </Links>
              </LinkWrap>

              <LinkWrap>
                <Links
                  onClick={handleClick}
                  to='category/pet-friendly'
                  id='menu-link'>
                  Pet Friendly
                </Links>
              </LinkWrap>
              <LinkWrap>
                <Links onClick={handleClick} to='sigin' id='menu-link'>
                  Sign In
                </Links>
              </LinkWrap>
            </Box>
          </RightContainer>
        </MenuOptions>
        <SocialSection id='bottom-container'>
          <LeftContainer>
            <AddressContainer>
              <Box id='left-sections'>
                <Subheader>Contact Us</Subheader>
                <Typography>Medusa's Garden</Typography>
                <Typography>123 Main Street</Typography>
                <Typography>Dallas, TX, 75202</Typography>
                <Typography>123-123-4567</Typography>
                <Typography>contact@medusagradens.com</Typography>
              </Box>
              <Box
                item
                sx={{
                  display: 'inline-flex',
                  gap: '2rem',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icons
                  src='/images/social-media-icons/social-media-1.svg'
                  alt='twitter'
                />
                <Icons
                  src='/images/social-media-icons/social-media-2.svg'
                  alt='twitter'
                />
                <Icons
                  src='/images/social-media-icons/social-media-3.svg'
                  alt='twitter'
                />
                <Icons
                  src='/images/social-media-icons/social-media-4.svg'
                  alt='twitter'
                />
                <Icons
                  src='/images/social-media-icons/social-media-5.svg'
                  alt='twitter'
                />
              </Box>
            </AddressContainer>
            <SocialContainer>
              <Box id='left-sections'></Box>
            </SocialContainer>
          </LeftContainer>
        </SocialSection>
      </Nav>
    </div>
  );
}
