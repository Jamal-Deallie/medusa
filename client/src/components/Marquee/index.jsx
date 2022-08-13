import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import useArrayRef from '../../hooks/useArrayRef';
import { Rotate } from '../../animations';
import { horizontalLoop } from '../../helpers/horizontalLoop';
import { Image } from './styles';
export default function Marquee() {
  const [marquee, setMarquee] = useArrayRef();
  const [flower, setFlower] = useArrayRef();

  useEffect(() => {
    horizontalLoop(marquee.current);
    Rotate(flower.current);
  }, [flower, marquee]);

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        padding: '5% 0',
      }}>
      <Box
        sx={{
          width: '150%',
          position: 'relative',
          gap: '2rem',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}>
        {Array.from(Array(10), (_, x) => {
          return (
            <Box
              key={x}
              ref={setMarquee}
              sx={{
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
              }}>
              <Image src='images/flower.svg' alt='Flower' ref={setFlower} />
              <Typography variant='subheader4'>
                Magical free shipping
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
