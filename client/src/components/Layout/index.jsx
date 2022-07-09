import { Outlet } from 'react-router-dom';
import { Navigation, Footer } from '../../components';
import {
  StyledLayout,
  ContentContainer,
  NavContainer,
  FooterContainer,
} from './styles';

export default function Layout() {
  return (
    <StyledLayout>
      <NavContainer>
        <Navigation />
      </NavContainer>
      <ContentContainer>
        <Outlet />
      </ContentContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </StyledLayout>
  );
}
