import {
  ContentInner,
  Heading,
  Image,
  ImageContainer,
  Text,
  ContentContainer,
  CustomLink,
  ContentSection,
} from './styles';
import { FadeUp, FadeIn } from '../../animations';

export default function ContentLayout({
  src,
  alt,
  fd,
  br,
  title,
  description,
  id,
  webLink,
  link,
  label,
  pd,
}) {
  return (
    <ContentSection $pd={pd}>
      <ContentInner $fd={fd} id={`${id}-container`}>
        <FadeIn>
          <ImageContainer id={`${id}-container`}>
            <Image src={src} alt={alt} />
          </ImageContainer>
        </FadeIn>

        <ContentContainer>
          <FadeUp>
            <Heading>{title}</Heading>
          </FadeUp>
          <FadeIn>
            <Text>{description}</Text>
          </FadeIn>
          {link && (
            <FadeUp>
              <CustomLink to={webLink} id={`${id}-fadeUp`}>
                {label}
              </CustomLink>
            </FadeUp>
          )}
        </ContentContainer>
      </ContentInner>
    </ContentSection>
  );
}
