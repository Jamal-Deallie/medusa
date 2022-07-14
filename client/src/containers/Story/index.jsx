import { ContentLayout } from '../../components';

export default function StoryContainer() {
  return (
    <ContentLayout
      src={
        'https://res.cloudinary.com/dtwk4dm3g/image/upload/q_80/v1655867308/Medusa/pexels-cottonbro-4505458_rvnkdo.webp'
      }
      alt={'Medusa Gardens'}
      title={'Kindness Grows Here'}
      description={
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
      link={true}
      webLink={'about'}
      label='Learn'
      id='story'
    />
  );
}
