import { useEffect, useRef, useCallback, useState } from 'react';
import {
  Button,
  Close,
  Links,
  LinkContainer,
  MenuSection,
  MenuWrapper,
  MenuContainer,
  LinkWrap,
} from './styles';
import { gsap } from 'gsap';
import useArrayRef from '../../hooks/useArrayRef';
import { navItems } from '../../shared/navItems';
import { Typography } from '@mui/material';

export default function ShopMenu() {
  const tl = useRef();
  const menu = useRef();
  const [links, setLinks] = useArrayRef();
  const token = false;
  const [openMenu, setOpenMenu] = useState(false);

  const openShopMenu = useCallback(
    () => setOpenMenu(openMenu => !openMenu),

    [setOpenMenu]
  );

  useEffect(() => {
    gsap.set(links.current, { autoAlpha: 0, yPercent: 150 });
    gsap.set(menu.current, {});
    tl.current = gsap.timeline({ pause: true });

    tl.current
      .to(menu.current, 1.5, {
        opacity: 1,
        display: 'block',
        ease: 'Power2.out',
      })
      .to(links.current, {
        autoAlpha: 1,
        duration: 2,
        ease: 'power3',
        yPercent: 0,
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
    <>
      <Typography variant='navOption' onClick={openShopMenu}>
        SHOP
      </Typography>
      <MenuSection ref={menu}>
        <MenuContainer id='menu-container'>
          <Button onClick={openShopMenu}>
            <Close>Close</Close>
          </Button>
          <MenuWrapper>
            <LinkContainer>
              {navItems.map(items => {
                const { id, label, link } = items;

                return (
                  <LinkWrap key={id}>
                    <Links onClick={openShopMenu} to={link} ref={setLinks}>
                      {label}
                    </Links>
                  </LinkWrap>
                );
              })}
              <LinkWrap>
                <Links
                  ref={setLinks}
                  onClick={openShopMenu}
                  to={token ? 'account' : 'signin'}
                  $dn={'none'}>
                  Account
                </Links>
              </LinkWrap>
            </LinkContainer>
          </MenuWrapper>
        </MenuContainer>
      </MenuSection>
    </>
  );
}
