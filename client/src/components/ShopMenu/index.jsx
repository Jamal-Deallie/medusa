import { useEffect, useRef, useState } from 'react';
import {
  MenuSection,
  Links,
  AboutContainer,
  AddressContainer,
  LinkContainer,
  SocialMediaSection,
  Icons,
  Subheader,
  Logo,
  Close,
  Button,
  CustomDivider,
  Text,
  NavOption,
  OptionWrapper,
  MenuWrapper,
  LinkWrapper,
  MenuContainer,
} from './styles';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import useArrayRef from '../../hooks/useArrayRef';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

export default function ShopMenu({ handleMenu, openMenu }) {
  const tl = useRef();
  const menu = useRef();
  // const links = useRef();
  const [links, setLinks] = useArrayRef();

  useEffect(() => {
    // const linkSplit = new SplitText(links.current, {
    //   type: 'lines',
    //   linesClass: 'linkChildren',
    // });

    // const linkSplitParent = new SplitText(links.current, {
    //   type: 'lines',
    //   linesClass: 'linkParent',
    // });
    tl.current = gsap.timeline({ pause: true });

    tl.current
      .to(menu.current, 1.5, {
        opacity: 1,
        display: 'block',
        ease: 'Power2.out',
      })
      .to(links.current, {
        opacity: 1,
        duration: 2,
        ease: 'power3',
        y: 0,
        stagger: 0.1,
      });
  }, []);

  useEffect(() => {
    openMenu ? tl.current.play() : tl.current.reverse();
    if (openMenu) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [tl, openMenu]);

  return (
    <MenuSection ref={menu}>
      <MenuContainer id='menu-container'>
        <Button onClick={handleMenu}>
          <Close>Close</Close>
        </Button>
        <MenuWrapper>
          <LinkContainer>
            <Links onClick={handleMenu} to='category/easy-care' ref={setLinks}>
              Easy Care
            </Links>

            <Links
              onClick={handleMenu}
              to='category/large-plants'
              ref={setLinks}>
              Large Plants
            </Links>

            <Links
              onClick={handleMenu}
              to='category/pet-friendly'
              ref={setLinks}>
              Pet Friendly
            </Links>
          </LinkContainer>

          <LinkContainer>
            <Links
              onClick={handleMenu}
              to='category/pet-friendly'
              ref={setLinks}>
              Small Plants
            </Links>

            <Links onClick={handleMenu} to='shop' ref={setLinks}>
              Shop All
            </Links>
          </LinkContainer>
        </MenuWrapper>

        {/* <Link to='/' id='menu-logo'>
          <Logo src='/images/logos/logo-rough.svg' alt='medusa logo' />
        </Link>
        <CustomDivider /> */}
        {/* <AboutContainer>
          <Subheader>About Us</Subheader>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </Text>
        </AboutContainer> */}

        {/* <CustomDivider />
        <AddressContainer>
          <Subheader>Medusa Gardens</Subheader>
          <Box>
            <Text>123 Main Street</Text>
            <Text>Dallas, Texas, 75202</Text>
            <Text>214-123-4567</Text>
          </Box>
        </AddressContainer> */}

        {/* <SocialMediaSection>
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
        </SocialMediaSection> */}
      </MenuContainer>
    </MenuSection>
  );
}
