import { useEnhancedEffect } from '../../hooks/useEnhancedEffect';
import useRefSelector from '../../hooks/useRefSelector';
import { gsap } from 'gsap';
import { Box } from '@mui/material';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function FadeAnimation({ children, id }) {

  const [q, ref] = useRefSelector();

  useEnhancedEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      q(`#${id}-fade`),
      { opacity: 0 },
      {
        duration: 1,
        opacity: 1,
        ease: 'sine.in',

        scrollTrigger: {
          trigger: ref.current,
          start: 'top 50%',
   
        },
      }
    );

    return () => {
      ScrollTrigger.refresh()
    };
  }, [q, id, ref]);

  return <Box ref={ref}>{children}</Box>;
}
