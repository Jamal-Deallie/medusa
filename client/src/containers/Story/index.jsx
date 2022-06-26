import { useEffect, useRef, useLayoutEffect } from 'react';
import {
  ContentWrap,
  StorySection,
  CustomLink,
  Text,
  Heading,
  StoryWrap,
  ImageWrap,
  Image,
  ImageContainer,
} from './styles';
import { useEnhancedEffect } from '../../hooks/useEnhancedEffect';
import { Typography } from '@mui/material';
import { flexAnimation } from '../../animations/flexLayout';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

export default function StoryContainer() {
  const tl = useRef();
  const heading = useRef();
  const desc = useRef();
  const image = useRef();
  const link = useRef();
  const container = useRef();
  // tl.set(container.current, { visibility: "visible" })
  // .to(imageReveal, { duration: 1, cssRule: { width: "0%" }, ease: "power2.in" });

  useEffect(() => {
    flexAnimation(
      tl.current,
      heading.current,
      desc.current,
      image.current,
      link.current,
      container.current
    );
  });
  // useEnhancedEffect(() => {
  //   let storyLineSplit = new SplitText(desc.current, {
  //     type: 'lines',
  //   });
  //   let wordParent = new SplitText('#heading-story', {
  //     type: 'words',
  //     linesClass: 'headingParent',
  //   });

  //   let wordSplit = new SplitText(heading.current, {
  //     type: 'words',
  //     linesClass: 'headingChildren',
  //   });

  //   tl.current = gsap.timeline();
  //   const storyAnim = tl.current
  //     // .to(wordSplit.words, {
  //     //   duration: 1,
  //     //   y: 0,
  //     //   opacity: 1,
  //     //   stagger: 0.1,
  //     //   ease: 'power2',
  //     // })
  //     .fromTo(
  //       image.current,
  //       { autoAlpha: 0 },
  //       { duration: 2, ease: 'power4.out', autoAlpha: 1 }
  //     )
  //     .from(wordSplit.words, {
  //       opacity: 0,
  //       y: 50,
  //       duration: 1,
  //       ease: 'power2',
  //       stagger: 0.05,
  //     })
  //     .fromTo(
  //       storyLineSplit.lines,
  //       { y: 40, opacity: 0 },
  //       {
  //         duration: 1,
  //         y: 0,
  //         opacity: 1,
  //         stagger: 0.1,
  //         ease: 'power4.out',
  //         overflow: 'hidden',
  //       }
  //     )
  //     .fromTo(
  //       link.current,
  //       { yPercent: 100, opacity: 0 },
  //       {
  //         opacity: 1,
  //         yPercent: 0,
  //         stagger: 0.3,
  //         duration: 0.4,
  //         overflow: 'hidden',
  //       }
  //     );

  //   ScrollTrigger.create({
  //     trigger: container.current,
  //     markers: true,
  //     start: 'top center',
  //     end: 'bottom',
  //     animation: storyAnim,
  //   });

  //   return () => {
  //     ScrollTrigger.refresh();
  //   };
  // }, []);
  return (
    <StorySection>
      <StoryWrap>
        <ImageContainer ref={container}>
          <Image
            $br={'55rem 55rem 0 0'}
            ref={image}
            src='https://res.cloudinary.com/dtwk4dm3g/image/upload/q_92/v1655867308/Medusa/pexels-cottonbro-4505458_rvnkdo.webp'
            alt='Medusa Employees'
          />
        </ImageContainer>
        <ContentWrap>
          <Heading id='heading-story' ref={heading}>
            Kindness Grows Here
          </Heading>
          <Text id='story-desc' sx={{ overflow: 'hidden' }} ref={desc}>
            Quisque velit nisi, pretium ut lacinia in, elementum id enim.
            Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor
            lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh
            pulvinar a. Nulla quis lorem ut libero malesuada feugiat.
            Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa,
            convallis a pellentesque nec, egestas non nisi. Sed porttitor lectus
            nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac
            lectus. Donec rutrum congue leo eget malesuada.
          </Text>
          <CustomLink id='story-button' to='about' ref={link}>
            Learn More
          </CustomLink>
        </ContentWrap>
      </StoryWrap>
    </StorySection>
  );
}
