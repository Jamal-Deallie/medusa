import {
  // LandingContainer,
  FeaturedInContainer,
  NewArrivalsContainer,
  StoryContainer,
  ProcessContainer,
} from '../../containers';
import Landing from '../../animations/Landing/test';
export default function HomePage() {
  return (
    <>
      <Landing />
      <StoryContainer />
      {/* <LandingContainer /> */}
      <FeaturedInContainer />
      <ProcessContainer />

      <NewArrivalsContainer />
    </>
  );
}
