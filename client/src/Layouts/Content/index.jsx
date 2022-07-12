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
}) {
  return (
    <ContentAnimation link={link} id={id}>
      <ContentInner $fd={fd} id={`${id}-container`}>
        <ImageContainer>
          <Image $br={br} src={src} alt={alt} id={`${id}-image`} />
        </ImageContainer>
        <ContentContainer>
          <Heading id={`${id}-heading`}>{title}</Heading>
          <Text sx={{ overflow: 'hidden' }} id={`${id}-text`}>
            {description}
          </Text>
          {link && (
            <CustomLink to={webLink} id={`${id}-link`}>
              {label}
            </CustomLink>
          )}
        </ContentContainer>
      </ContentInner>
    </ContentAnimation>
  );
}
