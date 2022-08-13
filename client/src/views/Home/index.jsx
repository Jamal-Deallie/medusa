import {
  HeroContainer,
  FeaturedInContainer,
  VisitContainer,
  StoryContainer,
  ProcessContainer,
  QuestionsContainer,
  CTAContainer,
} from '../../containers';
import { Marquee } from '../../components';

export default function HomePage() {
  return (
    <>
      <HeroContainer />
      <Marquee />
      <StoryContainer />
      <FeaturedInContainer />
      <ProcessContainer />
      <VisitContainer />
      <QuestionsContainer />
      <CTAContainer />
    </>
  );
}
