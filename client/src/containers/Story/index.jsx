import {
  ImageContainer,
  PlantImage,
  Subheader,
  StoryWrap,
  StorySection,
  CustomButton,
} from './styles';
import { Typography } from '@mui/material';
export default function StoryContainer() {
  return (
    <StorySection>
      <Subheader id='story-subheader'>Kindness Grows Here</Subheader>
      <StoryWrap>
        <Typography color={'primary.main'} id='story-desc'>
          Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus
          suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus
          nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
          Nulla quis lorem ut libero malesuada feugiat. Pellentesque in ipsum id
          orci porta dapibus. Praesent sapien massa, convallis a pellentesque
          nec, egestas non nisi. Sed porttitor lectus nibh. Curabitur non nulla
          sit amet nisl tempus convallis quis ac lectus. Donec rutrum congue leo
          eget malesuada.
        </Typography>
        <CustomButton id='story-button'>Learn More</CustomButton>
      </StoryWrap>
    </StorySection>
  );
}
