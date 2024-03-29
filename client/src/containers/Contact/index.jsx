import { Grid, Paper } from '@mui/material';
import { ContactForm } from '../../components';
import { ContactSection, GridItem } from './styles';

export default function ContactContainer() {
  return (
    <ContactSection container component='section'>
      <GridItem item md={12} lg={6} component={Paper} elevation={6} square>
        <ContactForm />
      </GridItem>
      <Grid
        item
        md={false}
        lg={6}
        sx={{
          backgroundImage:
            'https://res.cloudinary.com/dtwk4dm3g/image/upload/v1655867297/Medusa/pexels-cottonbro-9720699_rn6rfu.webp',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'primary.light',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </ContactSection>
  );
}
