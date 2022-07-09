import {
  LandingContainer,
  FeaturedInContainer,
  VisitContainer,
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
      <VisitContainer />
      <CTAContainer />
    </>
  );
}
