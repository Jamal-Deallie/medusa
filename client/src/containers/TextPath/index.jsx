import { useEffect } from 'react';
import { Text, ContentSection } from './styles';
import { Box } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useRefSelector from '../../hooks/useRefSelector';

export default function TextPathContainer() {
  const [q, ref] = useRefSelector();
  // const smoother = useContext(SmootherContext);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('#myPath', {
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 100px',
        scrub: 2,
        invalidateOnRefresh: true,
        pin: true,
      },
      attr: {
        startOffset: 1100,
      },
    });
    return () => {
      ScrollTrigger.refresh();
    };
  }, [ref]);

  return (
    //container
    <ContentSection
      ref={ref}
      sx={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        background: 'red',
      }}>
      <Box sx={{}}>
        <svg viewBox='0 0 1000 200' xmlns='http://www.w3.org/2000/svg'>
          <path
            id='a'
            d='M0 100s269.931 86.612 520 0c250.069-86.612 480 0 480 0'
            fill='none'
          />
          <Text y={40} fontSize={32}>
            <textPath id='myPath' href='#a' startOffset={-1000}>
              {
                '\n      Don’t judge each day by the harvest you reap, but by the seeds that you plant.\n    '
              }
            </textPath>
          </Text>
        </svg>
      </Box>
    </ContentSection>
  );
}
