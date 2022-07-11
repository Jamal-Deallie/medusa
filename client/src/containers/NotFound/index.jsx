import {
  Numbers,
  NotFoundInner,
  NotFoundSection,
  NotFoundOuter,
} from './styles';
import { Typography } from '@mui/material';
export default function NotFoundContainer() {
  return (
    <NotFoundSection>
      <NotFoundOuter>
        <NotFoundInner id='notFound-container'>
          <Numbers src='images/4.svg' alt='4' id='notfound-numbers' />
          <Numbers src='images/0.svg' alt='0' id='notfound-numbers' />
          <Numbers src='images/4.svg' alt='4' id='notfound-numbers' />
        </NotFoundInner>
        <Typography variant='header2'>Something Went Wrong</Typography>
      </NotFoundOuter>
    </NotFoundSection>
  );
}
