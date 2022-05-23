import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MenuItem, Menu, Button } from '@mui/material';
import { MenuSection, Links } from './styles';

export default function ShopMenu({ handleClick, open }) {
  return (
    <MenuSection onClick={handleClick} $open={open}>
      <Links onClick={handleClick} to='shop/category/easycare'>
        Easy Care
      </Links>
      <Links onClick={handleClick} to='shop/category/largeplants'>
        Large Plants
      </Links>
      <Links onClick={handleClick} to='shop/category/petfriendly'>
        Pet Friendly
      </Links>
      <div onClick={handleClick}>
        <Links to='shop'>Shop All</Links>
      </div>
    </MenuSection>
  );
}
