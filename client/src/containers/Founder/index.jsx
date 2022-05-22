import {
  FounderSection,
  QuoteContainer,
  FounderImage,
  SignatureWrap,
  Signature,
  FounderWrap,
} from './styles';
import { Grid, Typography } from '@mui/material';
export default function FounderContainer() {
  return (
    <FounderSection>
      <FounderWrap>
        <Grid container spacing={10}>
          <Grid item md={6}>
            <Typography
              variant='h1'
              sx={{ textAlign: 'center' }}
              color='secondary.main'>
              tempor incididunt ut labore
            </Typography>
            <QuoteContainer>
              <Typography color='secondary.main'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </Typography>
              <SignatureWrap>
                <Signature
                  src='/images/fake_signature.svg'
                  alt='Founder Signature'
                  sx={{ mt: 5 }}
                />
                <Typography color='secondary.main' sx={{ mt: 5 }}>
                  DORIS DIXON, CEO & CO-FOUNDER
                </Typography>
              </SignatureWrap>
            </QuoteContainer>
          </Grid>
          <Grid item md={6}>
            <FounderImage
              src='/images/medusa-founder.png'
              alt='Founder of Medusa'
            />
          </Grid>
        </Grid>
      </FounderWrap>
    </FounderSection>
  );
}
