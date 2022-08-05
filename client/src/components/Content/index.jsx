import {
  ContentInner,
  Heading,
  Image,
  ImageContainer,
  Text,
  ContentContainer,
  CustomLink,
} from './styles';
import {
  FadeUpAnimation,
  FadeAnimation,
  TextFadeAnimation,
  TextRotateAnimation,
} from '../../animations';

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
    <ContentInner $fd={fd} $pb={pb} id={`${id}-container`}>
      <FadeAnimation id={id}>
        <ImageContainer id={`${id}-container`}>
          <Image $br={br} src={src} alt={alt} id={`${id}-fade`} />
        </ImageContainer>
      </FadeAnimation>

      <ContentContainer>
        <TextRotateAnimation id={id}>
          <Heading id={`${id}-heading`}>{title}</Heading>
        </TextRotateAnimation>
        <TextFadeAnimation id={id}>
          <Text sx={{ overflow: 'hidden' }} id={`${id}-text`}>
            {description}
          </Text>
        </TextFadeAnimation>

        {link && (
          <FadeUpAnimation id={id}>
            <CustomLink to={webLink} id={`${id}-fadeUp`}>
              {label}
            </CustomLink>
          </FadeUpAnimation>
        )}
      </ContentContainer>
    </ContentInner>
  );
}
