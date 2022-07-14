import { Box } from '@mui/material';
import { useEnhancedEffect } from '../../hooks/useEnhancedEffect';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useRefSelector from '../../hooks/useRefSelector';

export default function BatchAnimation({ children, id }) {
  const [q, ref] = useRefSelector();

  useEnhancedEffect(() => {
    let targets = gsap.utils.toArray(q(`#${id}-item`));
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(targets, { opacity: 0, y: 100 });

    ScrollTrigger.batch(targets, {
      trigger: ref.current,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
      invalidateOnRefresh: true,
      onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.1 }),
    });

    return () => {
      ScrollTrigger.refresh();
    };
  }, []);

  return <Box ref={ref}>{children} </Box>;
}
