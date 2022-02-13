import { Container, TitleWrapper, SubtitleWrapper } from './styles';

interface NavProps {
  title: string;
  subtitle?: string;
}

export function TitleContainer({ title, subtitle }: NavProps) {
  return (
    <Container data-testid="title-container-comp">
      <TitleWrapper>{title}</TitleWrapper>

      <SubtitleWrapper>{subtitle}</SubtitleWrapper>
    </Container>
  );
}
