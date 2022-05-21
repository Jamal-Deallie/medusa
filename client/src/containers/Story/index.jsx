import {
  ImageContainer,
  PlantImage,
  Subheader,
  StoryWrap,
  StorySection,
} from './styles';
import { Typography } from '@mui/material';
export default function StoryContainer() {
  return (
    <StorySection>
      <Subheader>Kindness Grows Here</Subheader>
      <StoryWrap>
        <ImageContainer>
          <PlantImage src='/images/plant-1.svg' alt='Landing Image' />
        </ImageContainer>
        <Typography color={'secondary.main'}>
          Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus
          suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus
          nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
          Nulla quis lorem ut libero malesuada feugiat. Pellentesque in ipsum id
          orci porta dapibus. Praesent sapien massa, convallis a pellentesque
          nec, egestas non nisi. Sed porttitor lectus nibh. Curabitur non nulla
          sit amet nisl tempus convallis quis ac lectus. Donec rutrum congue leo
          eget malesuada.
        </Typography>
        <ImageContainer $rotate='rotate(-0.15turn) '>
          <PlantImage src='/images/plant-2.svg' alt='Landing Image' />
        </ImageContainer>
      </StoryWrap>
    </StorySection>
  );
}
