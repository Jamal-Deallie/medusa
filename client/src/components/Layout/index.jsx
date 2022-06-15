import { Outlet } from 'react-router-dom';
import { Navigation, Footer } from '../../components';
import { NavigationContainer } from '../../containers';
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
        <NavigationContainer />
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
