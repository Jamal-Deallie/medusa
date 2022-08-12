import { FeaturedInSection, SubheaderContainer } from './styles';
import { LogoContainer } from '../../containers';
import { Typography } from '@mui/material';
import { MaskOut } from '../../animations';

export default function FeaturedInContainer() {
  return (
    <FeaturedInSection>
      <SubheaderContainer>
        <MaskOut>
          <Typography variant='subheader1'>
            Quisque velit nisi, pretium ut lacinia in, elementum id enim.
            Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor
            lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh
            pulvinar.
          </Typography>
        </MaskOut>
      </SubheaderContainer>
      <LogoContainer />
    </FeaturedInSection>
  );
}
