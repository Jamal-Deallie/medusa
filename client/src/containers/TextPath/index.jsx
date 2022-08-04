import { useEffect } from 'react';
import { Text } from './styles';
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
        start: 'top top',
        scrub: 2,
        invalidateOnRefresh: true,
      },
      attr: {
        startOffset: 1100,
      },
    });
  }, [ref]);

  return (
    //container
    <Box
      ref={ref}
      sx={{
        padding: '10.5rem 0',
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
      }}>
      <Box sx={{ height: '50vh' }}>
        <Box>
          <svg viewBox='0 0 1000 200' xmlns='http://www.w3.org/2000/svg'>
            <path
              id='a'
              d='M0 100s269.931 86.612 520 0c250.069-86.612 480 0 480 0'
              fill='none'
            />
            <Text y={40} fontSize={26}>
              <textPath id='myPath' href='#a' startOffset={0}>
                {
                  '\n      Don’t judge each day by the harvest you reap, but by the seeds that you plant.\n    '
                }
              </textPath>
            </Text>
          </svg>
        </Box>
      </Box>
    </Box>
  );
}
