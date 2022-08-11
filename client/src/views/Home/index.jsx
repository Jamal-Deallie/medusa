import {
  // LandingContainer,
  HeroContainer,
  FeaturedInContainer,
  VisitContainer,
  StoryContainer,
  ProcessContainer,
  QuestionsContainer,
  CTAContainer,
  MissionContainer,
  TextPathContainer,
} from '../../containers';

export default function HomePage() {
  return (
    <>
      <HeroContainer />
      <StoryContainer />
      <FeaturedInContainer />
      <ProcessContainer />
      <VisitContainer />
      <TextPathContainer />
      <QuestionsContainer />
      <CTAContainer />
    </>
  );
}
