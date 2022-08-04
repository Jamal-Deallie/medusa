import {
  ContentInner,
  Heading,
  Image,
  ImageContainer,
  Text,
  ContentContainer,
} from './styles';
import { Typography } from '@mui/material';
import { FounderAnimation } from '../../animations';
export default function FounderContainer() {
  return (
    <FounderAnimation>
      <ContentInner id='founder-container'>
        <ImageContainer>
          <Image
            src='https://res.cloudinary.com/dtwk4dm3g/image/upload/v1656146851/Medusa/pexels-cottonbro-10049370_ce4eee.webp'
            alt='Founder'
            id='founder-image'
          />
        </ImageContainer>
        <ContentContainer>
          <Heading id='founder-header'>Plants are the world's jewels</Heading>
          <Text id='founder-text' sx={{ mt: 5 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </Text>
          <svg
            width='315'
            height='215'
            viewBox='0 0 315 215'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              id='founder-svg'
              d='M187.959 1.99182C162.748 37.2072 129.97 67.7507 100.563 99.3432C73.9237 127.962 47.4088 156.673 22.6405 186.946C15.7774 195.334 9.54062 205.006 2.18158 213.034C-0.556532 216.021 6.8522 208.537 7.39929 207.748C29.9151 175.283 55.0691 147.159 86.0081 122.274C103.838 107.932 123.124 94.9376 144.433 86.299C147.396 85.0978 144.245 88.6913 143.472 90.9674C142.69 93.2688 137.345 107.257 144.982 99.8925C147.612 97.3568 149.481 94.7252 151.435 91.654C151.923 90.8878 153.798 86.3308 152.671 89.3884C152.227 90.5934 143.049 105.504 151.435 100.167C153.595 98.7928 155.754 96.103 156.79 93.8509C161.319 84.0133 167.802 75.9874 173.13 66.6639C176.977 59.9312 187.811 38.3424 178.348 59.2493C172.975 71.1191 165.715 83.6126 165.715 97.009C165.715 102.913 169.253 95.0138 170.041 93.439C172.624 88.2727 174.471 82.212 178.622 78.0605C187.071 69.6119 180.536 84.2391 179.584 88.2213C179.308 89.3738 176.588 96.0358 178.073 92.8897C180.304 88.166 181.454 83.8792 185.213 80.1201C192.214 73.1196 192.272 83.6204 195.923 89.5944C198.044 93.0653 200.431 91.5907 196.404 89.5257C184.296 83.3165 168.9 80.9347 155.898 77.9232C134.858 73.0499 113.488 68.1804 92.0497 65.3595C74.2386 63.0159 56.7315 64.2408 38.9801 65.9774C34.351 66.4302 24.5571 66.4574 36.7832 65.7028C116.697 60.7698 196.938 68.2675 276.935 63.5058C283.394 63.1214 306.853 64.1576 313.734 59.112C313.758 59.0941 311.731 58.8373 311.537 58.8373'
              stroke='white'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <Typography id='founder-name' color='secondary.main' sx={{ mt: 5 }}>
            DORIS DIXON, CEO & CO-FOUNDER
          </Typography>
        </ContentContainer>
      </ContentInner>
    </FounderAnimation>
  );
}
