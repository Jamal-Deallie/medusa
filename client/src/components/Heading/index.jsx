import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { Box } from '@mui/material';
import { Text, HeadingWrap, HeadingSection, HeadingContainer } from './styles';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

export default function Heading({ heading, color }) {
  const tl = useRef();

  useEffect(() => {
    let wordSplit = new SplitText('#headingText', { type: 'words' });
    const anim = gsap.fromTo(
      wordSplit.words,
      { yPercent: 100 },
      {
        yPercent: 0,
        stagger: 0.5,
        duration: 0.7,
      }
    );
    ScrollTrigger.create({
      trigger: '#triggerHeading',
      markers: true,
      start: 'top center',
      end: 'bottom',
      animation: anim,
    });

    return () => {
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <HeadingSection>
      <HeadingContainer id='triggerHeading'>
        <HeadingWrap>
          <Text color={color}id='headingText'>
            {heading}
          </Text>
        </HeadingWrap>
      </HeadingContainer>
    </HeadingSection>
  );
}
