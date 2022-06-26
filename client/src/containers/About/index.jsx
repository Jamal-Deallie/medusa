import { Typography, Container } from '@mui/material';
import { AboutWrap, Image, AboutSection } from './styles';
import { FlexLayout } from '../../components';

export default function AboutContainer() {
  return (
    <>
      <FlexLayout
        src={
          'https://res.cloudinary.com/dtwk4dm3g/image/upload/q_100/v1656146851/Medusa/pexels-cottonbro-10049370_ce4eee.webp'
        }
        alt={'Medusa Garden Founder'}
        title={'The Medusa Way'}
        description={
          ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Nam at lectus urna duis convallis convallis tellus. Mauris augue neque gravida in fermentum. Mollis aliquam ut porttitor leo a diam sollicitudin. Lacus sed turpis tincidunt id aliquet risus feugiat. Arcu cursus euismod quis viverra nibh cras pulvinar mattis. Sed blandit libero volutpat sed cras. Risus commodo viverra maecenas accumsan lacus. Nisl condimentum id venenatis a condimentum. Ultrices sagittis orci a scelerisque purus semper eget duis at. Malesuada fames ac turpis egestas.'
        }
        br={'55rem 55rem 0 0'}
      />
    </>
    // <AboutSection sx={{ pb: '12.5rem' }}>
    //   <Container sx={{ textAlign: 'center' }}>
    //     <Typography variant='h1' sx={{ pb: '7.5rem' }}>
    //       Mesdusa's Way
    //     </Typography>
    //     <Image
    //       src='/images/about.jpg'
    //       alt="Medusa's Way"
    //       sx={{ pb: '7.5rem' }}
    //     />

    //     <Typography sx={{ pb: '5rem' }}>

    //     </Typography>

    //     <Typography>
    //       Fermentum odio eu feugiat pretium. Tempus egestas sed sed risus
    //       pretium. Diam sit amet nisl suscipit. Scelerisque eu ultrices vitae
    //       auctor eu augue ut lectus. Gravida arcu ac tortor dignissim convallis
    //       aenean. Eget nunc lobortis mattis aliquam faucibus purus in massa. Non
    //       curabitur gravida arcu ac tortor dignissim convallis aenean. Pretium
    //       quam vulputate dignissim suspendisse in. Faucibus pulvinar elementum
    //       integer enim neque volutpat ac. Ac auctor augue mauris augue neque
    //       gravida. Libero nunc consequat interdum varius sit amet mattis
    //       vulputate enim. Amet consectetur adipiscing elit pellentesque habitant
    //       morbi tristique. Sem viverra aliquet eget sit amet tellus cras
    //       adipiscing enim.
    //     </Typography>
    //   </Container>
    // </AboutSection>
  );
}
