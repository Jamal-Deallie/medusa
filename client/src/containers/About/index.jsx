import { Typography, Container } from '@mui/material';
import { AboutWrap, Image, AboutSection } from './styles';
import { ContentLayout } from '../../components';

export default function AboutContainer() {
  return (

      <ContentLayout
        src={
          'https://res.cloudinary.com/dtwk4dm3g/image/upload/q_100/v1656146851/Medusa/pexels-cottonbro-10049370_ce4eee.webp'
        }
        alt={'Medusa Garden Founder'}
        title={'The Medusa Way'}
        description={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
        br={'55rem 55rem 0 0'}
      />

  
  );
}
