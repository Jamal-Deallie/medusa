import { ContentLayout } from '../../components';

export default function NurseryContainer() {
  return (
    <ContentLayout
      src={
        'https://res.cloudinary.com/dtwk4dm3g/image/upload/v1655867300/Medusa/pexels-teona-swift-6913653_1_meycxw.webp'
      }
      alt={'Medusa Nursery'}
      title={'Our Nursery'}
      description={
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
      id='nursery'
      fd='row-reverse'
      pb={true}
      br={'0rem'}
    />
  );
}
