import { useRef } from 'react';
import {
  ContentWrap,
  StorySection,
  CustomLink,
  Text,
  Heading,
  StoryWrap,
  ImageWrap,
  ContentContainer,
  Image,
  ImageContainer,
} from './styles';

import { ContentAnimation } from '../../components';

export default function ContainerTest() {
  const headingRef = useRef();
  const descRef = useRef();
  const imageRef = useRef();
  const linkRef = useRef();
  const containerRef = useRef();

  return (
    <ContentAnimation link={true} id={'story'} svg={true}>
      <StoryWrap id='story-container'>
        <ImageContainer ref={containerRef}>
          <Image
            id='story-image'
            $br={'55rem 55rem 0 0'}
            ref={imageRef}
            src='https://res.cloudinary.com/dtwk4dm3g/image/upload/q_92/v1655867308/Medusa/pexels-cottonbro-4505458_rvnkdo.webp'
            alt='Medusa Employees'
          />
        </ImageContainer>
        <ContentContainer>
          <ContentWrap>
            <Heading ref={headingRef} id='story-heading'>
              Kindness Grows Here
            </Heading>
            <Text sx={{ overflow: 'hidden' }} ref={descRef} id='story-text'>
              Quisque velit nisi, pretium ut lacinia in, elementum id enim.
              Vivamus suscipit tortor eget felis porttitor volutpat. Sed
              porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt
              nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat.
            </Text>
            <CustomLink ref={linkRef} to='about' id='story-link'>
              Learn More
            </CustomLink>
          </ContentWrap>
        </ContentContainer>
      </StoryWrap>
    </ContentAnimation>
  );
}
