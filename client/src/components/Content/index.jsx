import {
  ContentInner,
  Heading,
  Image,
  ImageContainer,
  Text,
  ContentContainer,
  CustomLink,
} from './styles';
import { ContentAnimation } from '../../animations';
import { FadeUpAnimation, TextFadeAnimation } from '../../animations';

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
  pb,
}) {
  return (
    // <ContentAnimation link={link} id={id}>
    <ContentInner $fd={fd} $pb={pb} id={`${id}-container`}>
      <FadeUpAnimation id={id}>
        <ImageContainer id={`${id}-container`}>
          <Image $br={br} src={src} alt={alt} id={`${id}-fadeUp`} />
        </ImageContainer>
      </FadeUpAnimation>

      <ContentContainer>
        <Heading id={`${id}-heading`}>{title}</Heading>
        <TextFadeAnimation id={id}>
          <Text sx={{ overflow: 'hidden' }} id={`${id}-text`}>
            {description}
          </Text>
        </TextFadeAnimation>

        {link && (
          <CustomLink to={webLink} id={`${id}-link`}>
            {label}
          </CustomLink>
        )}
      </ContentContainer>
    </ContentInner>
    // </ContentAnimation>
  );
}
