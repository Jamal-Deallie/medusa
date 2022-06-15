import { useEffect, useRef } from 'react';
import {
  MenuSection,
  Links,
  SocialSection,
  MenuOptions,
  ButtonWrap,
  AboutContainer,
  AddressContainer,
  LinkContainer,
  SocialContainer,
  Subheader,
  Logo,
  RightContainer,
  LeftContainer,
  Close,
  Button,
  LinkWrap,
} from './styles';
import { Link } from 'react-router-dom';
import { Typography, Container, Box } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

export default function ShopMenu({ handleClick, open }) {
  const tl = useRef();
  console.log(open);
  useEffect(() => {
    let aboutSections = gsap.utils.toArray('#left-sections');
    let menuLinks = gsap.utils.toArray('#menu-link');
    tl.current = gsap.timeline({ pause: true });
    gsap.set('#left-container', { yPercent: '-150' });
    gsap.set('#right-container', { opacity: 0, yPercent: '100' });
    tl.current
      .to('#left-container', {
        duration: 0.5,
        yPercent: '0',
        ease: 'power3.inOut',
      })
      .fromTo(
        '#right-container',
        { opacity: 0, yPercent: '100' },
        { duration: 0.5, opacity: 1, yPercent: '0', ease: 'power3.inOut' },
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

  return (
    <MenuSection>
      <MenuOptions id='right-container'>
        <ButtonWrap onClick={handleClick}>
          <Button id='menu-close'>
            <Close>Close</Close>
          </Button>
        </ButtonWrap>

        <RightContainer>
          <LinkContainer>
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
          </LinkContainer>
        </RightContainer>
      </MenuOptions>
      <SocialSection id='left-container'>
        <LeftContainer>
          <Link to='/' id='menu-logo'>
            <Logo src='/images/logos/logo-rough.svg' alt='medusa logo' />
          </Link>
          <AboutContainer>
            <Box id='left-sections'>
              <Subheader>About Us</Subheader>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </Typography>
            </Box>
          </AboutContainer>

          <AddressContainer>
            <Box id='left-sections'>
              <Subheader>Our Location</Subheader>
              <Typography>Medusa's Garden</Typography>
              <Typography>123 Main Street</Typography>
              <Typography>Dallas, TX, 75202</Typography>
              <Typography>123-123-4567</Typography>
              <Typography>contact@medusagradens.com</Typography>
            </Box>
          </AddressContainer>
          <SocialContainer>
            <Box id='left-sections'>
              <Subheader>Follow Us</Subheader>
              <Typography>Instagram</Typography>
              <Typography>Facebook</Typography>
              <Typography>Tik Tok</Typography>
              <Typography>Pinterest</Typography>
            </Box>
          </SocialContainer>
        </LeftContainer>
      </SocialSection>
    </MenuSection>
  );
}
