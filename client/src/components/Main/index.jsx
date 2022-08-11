import { Outlet } from 'react-router-dom';
import { Navigation, Footer } from '../../components';
import {
  StyledLayout,
  ContentContainer,
  NavContainer,
  FooterContainer,
} from './styles';

export default function MainLayout() {
  return (
    <StyledLayout>
      <NavContainer id='nav'>
        <Navigation />
      </NavContainer>
      <ContentContainer id='content-container'>
        <Outlet />
      </ContentContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </StyledLayout>
  );
}
