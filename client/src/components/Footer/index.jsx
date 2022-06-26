import {
  CustomFooter,
  Icons,
  Logo,
  GridLinks,
  NavLinks,
  Text,
  Header,
  CustomDivider,
  BottomRow,
  SocialMediaSection,
} from './styles';
import { Grid } from '@mui/material/';

export default function Footer() {
  const token = JSON.parse(localStorage.getItem('token'));

  return (
    <CustomFooter>
      <Grid container sx={{ justifyContent: 'space-between' }}>
        <Grid item>
          <Logo src='/images/logos/logo-rough.svg' alt='medusa logo' />
          <Header variant='h2'>Medusa Gardens</Header>
          <Text>123 Main Street</Text>
          <Text>Dallas, Texas, 75202</Text>
          <Text>214-123-4567</Text>
        </Grid>
        <Grid item>
          <Grid container columnSpacing={10}>
            <GridLinks item>
              <NavLinks to='faqs'>Faqs</NavLinks>
              <NavLinks to='policy'>Policy</NavLinks>
              <NavLinks to='Terms & Conditions'>Terms & Conditions</NavLinks>
            </GridLinks>

            <GridLinks item>
              <NavLinks to='about'>About</NavLinks>
              <NavLinks to='contact'>Contact Us</NavLinks>
              {token ? (
                <NavLinks to='signin'>Sign In</NavLinks>
              ) : (
                <NavLinks to='account'>My Account</NavLinks>
              )}
            </GridLinks>
          </Grid>
        </Grid>
      </Grid>
      <CustomDivider />
      <BottomRow>
        <SocialMediaSection>
          <Icons
            src='/images/social-media-icons/social-media-1.svg'
            alt='twitter'
          />
          <Icons
            src='/images/social-media-icons/social-media-2.svg'
            alt='twitter'
          />
          <Icons
            src='/images/social-media-icons/social-media-3.svg'
            alt='twitter'
          />
          <Icons
            src='/images/social-media-icons/social-media-4.svg'
            alt='twitter'
          />
          <Icons
            src='/images/social-media-icons/social-media-5.svg'
            alt='twitter'
          />
        </SocialMediaSection>
        <Text>
          © {new Date().getFullYear()} Medusa.com, Inc. All Rights Reserved
        </Text>
      </BottomRow>
    </CustomFooter>
  );
}
