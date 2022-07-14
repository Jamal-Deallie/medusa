import { ContentLayout } from '../../components';

export default function CustomersContainer() {
  return (
    <ContentLayout
      src={
        'https://res.cloudinary.com/dtwk4dm3g/image/upload/v1655867360/Medusa/pexels-anna-nekrashevich-8989354_gvj0cz.webp'
      }
      alt={'Medusa Employees'}
      title={'Who We Are'}
      description={
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
      id='customers'
      fd='row-reverse'
    />
  );
}
