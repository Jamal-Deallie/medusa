import {
  LandingContainer,
  FeaturedInContainer,
  NewArrivalsContainer,
  StoryContainer,
  ProcessContainer,
  CTAContainer,
} from '../../containers';

export default function HomePage() {
  return (
    <>
      <LandingContainer />
      <StoryContainer />
      <FeaturedInContainer />
      <ProcessContainer />
      <NewArrivalsContainer />
      <CTAContainer />
    </>
  );
}
