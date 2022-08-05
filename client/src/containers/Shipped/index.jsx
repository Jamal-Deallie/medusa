import { ShippedSection, Image, ImageContainer} from './styles';
import { useEnhancedEffect } from '../../hooks/useEnhancedEffect';
import useRefSelector from '../../hooks/useRefSelector';
import { gsap } from 'gsap';
import { Box } from '@mui/material';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ShippedContainer() {
  const [q, ref] = useRefSelector();

  useEnhancedEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(q(`#image-parallax`), {
      backgroundSize: '120%',

      scrollTrigger: {
        trigger: ref.current,
        start: 'top+=20% 50%',
        end: 'bottom-=20% 50%',
        markers: true,
        scrub: 2,
      },
    });

    return () => {
      ScrollTrigger.refresh();
    };
  }, [q]);
  return (
    <ShippedSection>
      <Box ref={ref}>
        <ImageContainer>
          <Image id='image-parallax' />
        </ImageContainer>
      </Box>
    </ShippedSection>
  );
}
