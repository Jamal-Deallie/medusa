import { CustomFooter, FooterInner, FooterOuter } from './styles';
import { Typography } from '@mui/material';

export default function Footer() {
  return (
    <CustomFooter>
      <FooterOuter>
        <FooterInner>
          <h1>Footer</h1>
        </FooterInner>
      </FooterOuter>
    </CustomFooter>
  );
}
