import { Box } from '@mui/material';
import { MissionInner, MissionSection, Cite, Quote } from './styles';
import { TextRotateAnimation, ScrollLeftAnimation } from '../../animations';

export default function MissionContainer() {
  return (
    <ScrollLeftAnimation id={'mission'}>
      <MissionSection>
        <MissionInner>
          <Box id='mission-scroll'>
            <Quote>"All the flowers of all the tomorrows</Quote>
          </Box>

          <Box id='mission-scroll'>
            <Quote>are in the seeds of today"</Quote>
          </Box>

          <Cite id='mission-heading'>— Doris Dixon, CEO & Founder</Cite>
        </MissionInner>
      </MissionSection>
    </ScrollLeftAnimation>
  );
}
