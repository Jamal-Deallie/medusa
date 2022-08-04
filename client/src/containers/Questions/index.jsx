import { ContentLayout } from '../../components';

export default function QuestionsContainer() {
  return (
    <ContentLayout
      src={
        'https://res.cloudinary.com/dtwk4dm3g/image/upload/v1655867361/Medusa/pexels-anna-shvets-3771668_sjwcre.webp'
      }
      alt={'Happy Kid'}
      title={'Get In Touch'}
      description={
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
      id='visit'
      link={true}
      webLink='/contact'
      label="Contact Us"
      fd='row-reverse'
    />
  );
}
