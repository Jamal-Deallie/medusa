import {
  ContentInner,
  Heading,
  Video,
  VideoContainer,
  Text,
  ContentContainer,
  CustomerSection,
} from './styles';
import { FadeUp, FadeIn } from '../../animations';

export default function CustomersContainer() {
  return (
    <CustomerSection>
      <ContentInner>
        <VideoContainer>
          <Video autoPlay loop muted id='video'>
            <source
              src='https://res.cloudinary.com/dtwk4dm3g/video/upload/v1659683659/Medusa/pexels-cottonbro-9725080_1_kxqaai.mp4'
              type='video/mp4'
            />
          </Video>
        </VideoContainer>

        <ContentContainer>
          <FadeUp>
            <Heading id='customer-heading'>
              Everyone Should Live with a Little More Green
            </Heading>
          </FadeUp>
          <FadeIn>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </FadeIn>
        </ContentContainer>
      </ContentInner>
    </CustomerSection>
  );
}
