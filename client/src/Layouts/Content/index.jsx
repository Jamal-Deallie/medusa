import { useRef } from 'react';
import {
  ContentWrap,
  CustomLink,
  ContentInner,
  Heading,
  Image,
  ImageContainer,
  Text,
  ContentContainer,
  ContentOuter,
} from './styles';
import { ContentAnimation } from '../../components';

export default function ContentLayout({
  src,
  alt,
  fd,
  br,
  title,
  description,
  pb,
  pt,
  id,
  webLink,
  link,
}) {
  return (
    <ContentAnimation link={link} id={id}>
      <ContentOuter $pt={pt} $pb={pb} id={`${id}-container`}>
        <ContentWrap $fd={fd}>
          <ImageContainer>
            <Image $br={br} src={src} alt={alt} id={`${id}-image`} />
          </ImageContainer>
          <ContentContainer>
            <ContentInner>
              <Heading id={`${id}-heading`}>{title}</Heading>
              <Text sx={{ overflow: 'hidden' }} id={`${id}-text`}>
                {description}
              </Text>

              {link && (
                <CustomLink to={webLink} id={`${id}-link`}>
                  Learn More
                </CustomLink>
              )}
            </ContentInner>
          </ContentContainer>
        </ContentWrap>
      </ContentOuter>
    </ContentAnimation>
  );
}
