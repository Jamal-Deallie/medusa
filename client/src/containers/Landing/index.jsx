import { useEffect, useRef } from 'react';
import {
  LandingSection,
  ContentContainer,
  LandingInner,
  GridItem,
  LandingImage,
  Subheader,
  Heading,
  CustomButton,
  ImageWrap,
  ImageMobile,
} from './styles';
import { Box } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

export default function LandingContainer() {
  const tl = useRef();

  useEffect(() => {
    ScrollTrigger.matchMedia({
      // desktop
      '(min-width: 1200px)': function () {
        // ScrollTrigger (this automatically gets killed when the breakpoint no longer matches...
        gsap.to('#panel', {
          scrollTrigger: {
            trigger: '#panel',
            scrub: 1,
            end: '+=500',
          },
        });
        let lineSplit = new SplitText('#text', { type: 'lines' });
        // other animations that aren't ScrollTrigger-related...
        tl.current = gsap.timeline();
        tl.current
          .from('#image', { scale: 1.3 })
          .to('#mask', {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          })
          .to('#image', {
            ease: 'power1.in',
            duration: 0.3,
            scale: 1,
          })
          .to('#image', {
            ease: 'power1.in',
            duration: 0.3,
            borderRadius: '50rem 55rem 0rem 0rem',
          })
          .fromTo(
            '#line-1',
            {
              yPercent: 100,
            },
            { yPercent: 0, duration: 0.6 },
            0
          )
          .fromTo(
            '#line-2',
            {
              yPercent: -100,
            },
            { yPercent: 0, duration: 0.6 },
            0
          )
          .from(lineSplit.lines, {
            yPercent: -100,
            stagger: 0.05,
            duration: 0.7,
            overflow: 'hidden',
          });

        // THIS IS THE KEY! Return a function that'll get called when the breakpoint no longer matches so we can kill() the animation (or whatever)
        return function () {
          tl.kill();
          // other cleanup code can go here.
        };
      },
    });
  });

  return (
    <LandingSection id='panel'>
      <LandingInner container>
        <GridItem item md={12} lg={6} sx={{ alignItems: 'center' }}>
          <ContentContainer>
            <Box sx={{ overflow: 'hidden' }}>
              <Heading variant='h1' color='secondary.main' id='line-1'>
                Medusa
              </Heading>
            </Box>
            <Box sx={{ overflow: 'hidden' }}>
              <Heading
                variant='h1'
                sx={{ ml: 10 }}
                color='secondary.main'
                id='line-2'>
                Gardens
              </Heading>
            </Box>
            <ImageMobile>
              <LandingImage
                id='image'
                src='/images/landing-placeholder.png'
                alt='Landing Image'
              />
            </ImageMobile>
            <Subheader
              id='text'
              sx={{ overflow: 'hidden', display: 'inline-block' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </Subheader>
            <CustomButton>Shop Now</CustomButton>
          </ContentContainer>
        </GridItem>
        <GridItem
          item
          md={12}
          lg={6}
          $of={true}
          sx={{ alignItems: 'center', overflow: 'hidden' }}>
          <ImageWrap id='mask'>
            <LandingImage
              id='image'
              src='/images/landing-placeholder.png'
              alt='Landing Image'
            />
          </ImageWrap>
        </GridItem>
      </LandingInner>
    </LandingSection>
  );
}
