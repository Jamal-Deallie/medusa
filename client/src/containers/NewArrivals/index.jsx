import { useEffect, useRef } from 'react';
import {
  NewArrivalsSection,
  GridItem,
  Image,
  Subheader,
  ContentWrap,
  ImageReveal,
  GridContainer,
  ContentContainer,
  ImageContainer,
  Text,
} from './styles';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { Typography } from '@mui/material';
import { Heading, FlexLayout } from '../../components';

export default function NewArrivalsContainer() {
  // const tl = useRef();

  // useEffect(() => {
  //   let visitLineSplit = new SplitText('#visit-desc', { type: 'lines' });
  //   tl.current = gsap.timeline();
  //   const visitAnim = tl.current
  //     .fromTo(
  //       visitLineSplit.lines,
  //       { yPercent: 100, opacity: 0 },
  //       {
  //         opacity: 1,
  //         yPercent: 0,
  //         stagger: 0.2,
  //         duration: 0.4,
  //         overflow: 'hidden',
  //         ease: 'power3.out',
  //       }
  //     )
  //     .fromTo(
  //       '#visit-img-container',
  //       {
  //         clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
  //         webkitClipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
  //       },
  //       {
  //         clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
  //         webkitClipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
  //         duration: 1,
  //         ease: 'power3.out',
  //       }
  //     )
  //     .from('#visit-image', 4, {
  //       scale: 1.4,
  //       ease: 'power3.out',
  //       delay: -1,
  //     });

  //   ScrollTrigger.create({
  //     trigger: '#triggerVisit',
  //     markers: true,
  //     start: 'top center',
  //     end: 'bottom',
  //     animation: visitAnim,
  //   });

  //   return () => {
  //     ScrollTrigger.refresh();
  //   };
  // }, []);
  return (
    <>
      <FlexLayout
        src={
          'https://res.cloudinary.com/dtwk4dm3g/image/upload/q_100/v1655867302/Medusa/pexels-tima-miroshnichenko-6510872_obmywu.webp'
        }
        alt={'Medusa Employees'}
        title={'Come Visit'}
        description={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat ulla pariatur.'
        }
      />
    </>
  );
}

// https://res.cloudinary.com/dtwk4dm3g/image/upload/q_100/v1655867302/Medusa/pexels-tima-miroshnichenko-6510872_obmywu.webp
