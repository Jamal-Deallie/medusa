import { MenuSection, Links } from './styles';
import { useLocation } from 'react-router-dom';
export default function ShopMenu({ handleClick, open }) {
  console.log(open);
  const locaction = useLocation();

  console.log(locaction);
  return (
    <MenuSection $open={open}>
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
