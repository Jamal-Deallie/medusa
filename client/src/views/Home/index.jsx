import {
  HeroContainer,
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
      <HeroContainer />
      <StoryContainer />
      <FeaturedInContainer />
      <ProcessContainer />
      <VisitContainer />
      <QuestionsContainer />
      <CTAContainer />
    </>
  );
}
