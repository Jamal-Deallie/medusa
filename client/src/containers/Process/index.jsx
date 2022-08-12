import { ContentLayout } from '../../components';

export default function ProcessContainer() {
  return (
    <ContentLayout
      src={
        'https://res.cloudinary.com/dtwk4dm3g/image/upload/q_100/v1655867298/Medusa/pexels-cottonbro-9709385_1_eykno9.webp'
      }
      alt={'Medusa Employees'}
      title={'Our Process'}
      description={
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
      fd='row-reverse'
      pd='5% 0 0 0'
    />
  );
}
