import {
  LandingContainer,
  FeaturedInContainer,
  VisitContainer,
  StoryContainer,
  ProcessContainer,
  QuestionsContainer,
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
      <QuestionsContainer />
      <CTAContainer />
    </>
  );
}
