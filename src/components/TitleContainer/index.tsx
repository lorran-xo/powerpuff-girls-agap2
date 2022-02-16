import { Container, TitleWrapper, SubtitleWrapper } from './styles';

interface NavProps {
  title?: string;
  subtitle?: string;
}

export function TitleContainer({ title, subtitle }: NavProps) {
  return (
    <Container data-testid="title-container-comp">
      {title ? (
        <TitleWrapper>{title}</TitleWrapper>
      ) : (
        <TitleWrapper>There is no data for this episode</TitleWrapper>
      )}

      <SubtitleWrapper>
        {/* regex that removes any tags on the string */}
        {subtitle?.replace(/<\/?[^>]+(>|$)/g, '')}
      </SubtitleWrapper>
    </Container>
  );
}
