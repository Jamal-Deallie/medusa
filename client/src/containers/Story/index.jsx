import { useEffect, useRef, useLayoutEffect } from 'react';
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
import { useEnhancedEffect } from '../../hooks/useEnhancedEffect';
import useRefSelector from '../../hooks/useRefSelector';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

export default function StoryContainer() {
  const tl = useRef();
  const headingRef = useRef();
  const descRef = useRef();
  const imageRef = useRef();
  const linkRef = useRef();
  const containerRef = useRef();
  const link = true;
  const [q, ref] = useRefSelector();

  useEnhancedEffect(() => {
    let storyLineSplit = new SplitText(q(descRef.current), {
      type: 'lines',
    });

    let wordSplit = new SplitText(q(headingRef.current), {
      type: 'words',
    });
    tl.current = gsap.timeline({
      onComplete() {
        storyLineSplit.revert();
        wordSplit.revert();
      },
    });

    if (link) {
      gsap.set(q(linkRef.current), { autoAlpha: 0 });
    }

    const flexAnimation = tl.current
      .from(wordSplit.words, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2',
        stagger: 0.05,
      })
      .fromTo(
        storyLineSplit.lines,
        { y: 40, opacity: 0 },
        {
          duration: 1,
          y: 0,
          opacity: 1,
          stagger: 0.1,
          ease: 'power4.out',
          overflow: 'hidden',
        }
      )
      .fromTo(
        q(imageRef.current),
        { autoAlpha: 0 },
        { duration: 2, autoAlpha: 1, ease: 'sine.in' }
      );

    // outro animation
    if (link) {
      flexAnimation.add(
        gsap.to(q(linkRef.current), { duration: 0.7, autoAlpha: 1 }, '-=1')
      );
    }

    let st = ScrollTrigger.create({
      trigger: q(containerRef.current),
      start: 'top center',
      end: 'bottom',
      animation: flexAnimation,
    });

    return () => {
      flexAnimation.progress(1); // reverts the SplitText in the onComplete
      st.kill();
    };
  }, []);

  return (
    <StorySection ref={ref}>
      <StoryWrap>
        <ImageContainer ref={containerRef}>
          <Image
            $br={'55rem 55rem 0 0'}
            ref={imageRef}
            src='https://res.cloudinary.com/dtwk4dm3g/image/upload/q_92/v1655867308/Medusa/pexels-cottonbro-4505458_rvnkdo.webp'
            alt='Medusa Employees'
          />
        </ImageContainer>
        <ContentContainer>
          <ContentWrap>
            <Heading ref={headingRef}>Kindness Grows Here</Heading>
            <Text sx={{ overflow: 'hidden' }} ref={descRef}>
              Quisque velit nisi, pretium ut lacinia in, elementum id enim.
              Vivamus suscipit tortor eget felis porttitor volutpat. Sed
              porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt
              nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat.
            </Text>
            <CustomLink ref={linkRef} to='about'>
              Learn More
            </CustomLink>
          </ContentWrap>
        </ContentContainer>
      </StoryWrap>
    </StorySection>
  );
}
