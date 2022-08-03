import {
  LandingContainer,
  FeaturedInContainer,
  VisitContainer,
  StoryContainer,
  ProcessContainer,
  QuestionsContainer,
  CTAContainer,
  MissionContainer,
} from '../../containers';

export default function HomePage() {
  return (
    <>
      <LandingContainer />
      <StoryContainer />
      <FeaturedInContainer />
      <ProcessContainer />
      <MissionContainer />
      <VisitContainer />
      <QuestionsContainer />
      <CTAContainer />
    </>
  );
}
