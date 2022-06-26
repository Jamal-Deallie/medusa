import { useEffect, useRef, useLayoutEffect } from 'react';
import {
  ContentWrap,
  FlexLayoutSection,
  CustomLink,
  Text,
  Heading,
  FlexWrap,
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

export default function FlexLayout({
  src,
  alt,
  fd,
  br,
  title,
  description,
  webLink,
}) {
  const tl = useRef();
  const heading = useRef();
  const desc = useRef();
  const image = useRef();
  const link = useRef();
  const container = useRef();
  // tl.set(container.current, { visibility: "visible" })
  // .to(imageReveal, { duration: 1, cssRule: { width: "0%" }, ease: "power2.in" });

  useEnhancedEffect(() => {
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
    <FlexLayoutSection>
      <FlexWrap $fd={fd} ref={container}>
        <ImageContainer>
          <Image $br={br} ref={image} src={src} alt={alt} />
        </ImageContainer>
        <ContentWrap>
          <Heading ref={heading}>{title}</Heading>
          <Text sx={{ overflow: 'hidden' }} ref={desc}>
            {description}
          </Text>
          {webLink && (
            <CustomLink to={webLink} ref={link}>
              Learn More
            </CustomLink>
          )}
        </ContentWrap>
      </FlexWrap>
    </FlexLayoutSection>
  );
}
