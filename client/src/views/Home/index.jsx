import {
  LandingContainer,
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
      <LandingContainer />
      <StoryContainer />
      <FeaturedInContainer />
      <ProcessContainer />
      <MissionContainer />
      <VisitContainer />
      <TextPathContainer />
      <QuestionsContainer />
      <CTAContainer />
    </>
  );
}
