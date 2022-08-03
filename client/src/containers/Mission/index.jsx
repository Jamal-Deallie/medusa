import { Box, Typography } from '@mui/material';
import { MissionInner, MissionSection, Heading } from './styles';
import {
  FadeUpAnimation,
  FadeAnimation,
  TextRotateAnimation,
  ScrollLeftAnimation,
} from '../../animations';

export default function MissionContainer() {
  return (
    <MissionSection>
      <MissionInner>
        <TextRotateAnimation id={'mission'}>
          <Heading sx={{ textAlign: 'center' }} id='mission-heading'>
            Our Mission
          </Heading>
        </TextRotateAnimation>

        <ScrollLeftAnimation id={'mission'}>
          <Box id='mission-left'>
            <Typography variant='subheader2'>
              To strengthen your bond with nature
            </Typography>
          </Box>

          <Box id='mission-right'>
            <Typography variant='subheader2'>
              and to help bring joy to your space!
            </Typography>
          </Box>
        </ScrollLeftAnimation>
      </MissionInner>
    </MissionSection>
  );
}
