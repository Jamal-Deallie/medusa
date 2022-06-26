import { useRef, useEffect, useCallback } from 'react';
import {
  ProcessSection,
  GridItem,
  GridContainer,
  Subheader,
  IconWrap,
  Icon,
} from './styles';
import { Heading, FlexLayout } from '../../components';
import { Box, Typography } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { ourProcess } from '../../shared/ourProcess';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

export default function ProcessContainer() {
  // const tl = useRef();

  // useEffect(() => {
  //   let icons = gsap.utils.toArray('#icon');
  //   let arrows = gsap.utils.toArray('#arrow');
  //   let iconText = gsap.utils.toArray('#process-text');

  //   tl.current = gsap.timeline();
  //   const processAnim = tl.current
  //     .fromTo(icons[0], { opacity: 0 }, { opacity: 1, ease: 'power1.in' })
  //     .fromTo(arrows[0], { yPercent: -100 }, { yPercent: 0, ease: 'power1.in' })
  //     .fromTo(
  //       iconText[0],
  //       {
  //         yPercent: 100,
  //       },
  //       { yPercent: 0, duration: 0.6 }
  //     )
  //     .fromTo(icons[1], { opacity: 0 }, { opacity: 1, ease: 'power1.in' })
  //     .fromTo(arrows[1], { yPercent: -100 }, { yPercent: 0, ease: 'power1.in' })
  //     .fromTo(
  //       iconText[1],
  //       {
  //         yPercent: 100,
  //       },
  //       { yPercent: 0, duration: 0.6 }
  //     )
  //     .fromTo(icons[2], { opacity: 0 }, { opacity: 1, ease: 'power1.in' })
  //     .fromTo(arrows[2], { yPercent: -100 }, { yPercent: 0, ease: 'power1.in' })
  //     .fromTo(
  //       iconText[2],
  //       {
  //         yPercent: 100,
  //       },
  //       { yPercent: 0, duration: 0.6 }
  //     )
  //     .fromTo(icons[3], { opacity: 0 }, { opacity: 1, ease: 'power1.in' })
  //     .fromTo(arrows[3], { yPercent: -100 }, { yPercent: 0, ease: 'power1.in' })
  //     .fromTo(
  //       iconText[3],
  //       {
  //         yPercent: 100,
  //       },
  //       { yPercent: 0, duration: 0.6 }
  //     );

  //   ScrollTrigger.create({
  //     trigger: '#process-trigger',
  //     markers: true,
  //     start: 'top center',
  //     end: 'bottom 30px',
  //     toggleActions: 'play none none reverse',
  //     animation: processAnim,
  //   });
  //   return () => {
  //     ScrollTrigger.refresh();
  //   };
  // }, []);

  // const renderedIcons = ourProcess.map(process => {
  //   return (
  //     <GridItem item xs={12} md={3} key={process.id}>
  //       <IconWrap>
  //         <Icon id='icon' src={process.src} alt={process.name} />
  //       </IconWrap>
  //       <IconWrap>
  //         <Icon id='arrow' src='images/line-arrow.svg' alt='arrow' />
  //       </IconWrap>
  //       <Box sx={{ overflow: 'hidden' }}>
  //         <Typography
  //           sx={{ color: 'secondary.main' }}
  //           variant='body2'
  //           id='process-text'>
  //           {process.label}
  //         </Typography>
  //       </Box>
  //     </GridItem>
  //   );
  // });

  return (
    <>
      <FlexLayout
        src={
          'https://res.cloudinary.com/dtwk4dm3g/image/upload/q_100/v1655867298/Medusa/pexels-cottonbro-9709385_1_eykno9.webp'
        }
        alt={'Medusa Employees'}
        title={'Our Process'}
        description={
          'Quisque velit nisi, pretium ut lacinia in, elementum id enim.Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitorlectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat.Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec rutrum congue leo eget malesuada.'
        }
        fd={'row-reverse'}
      />
    </>
    // <ProcessSection id='process-trigger'>
    //   <Heading heading={'Our Process'} color={'secondary.main'} />
    //   <GridContainer container spacing={3}>
    //     {renderedIcons}
    //   </GridContainer>
    // </ProcessSection>
  );
}
