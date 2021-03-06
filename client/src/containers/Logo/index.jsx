import { GridLayout } from '../../components';
import { featuredItems } from '../../shared/featuredItems';
import { BatchAnimation } from '../../animations';

export default function LogoContainer() {
  return (
    <BatchAnimation id='logo'>
      <GridLayout items={featuredItems} target='logo' />
    </BatchAnimation>
  );
}
