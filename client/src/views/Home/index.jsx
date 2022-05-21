import {
  LandingContainer,
  FeaturedInContainer,
  NewArrivalsContainer,
  StoryContainer,
  ProcessContainer
} from '../../containers';

export default function HomePage() {
  return (
    <>
      <LandingContainer />
      <FeaturedInContainer />
      <ProcessContainer/>
      <StoryContainer />
      <NewArrivalsContainer />
    </>
  );
}
