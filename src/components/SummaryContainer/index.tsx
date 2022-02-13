import { Container, SummaryText } from './styles';

interface NavProps {
  episodeSummary: string;
}

export function SummaryContainer({ episodeSummary }: NavProps) {
  return (
    <Container data-testid="summary-container-comp">
      {episodeSummary ? (
        <SummaryText>{episodeSummary}</SummaryText>
      ) : (
        <SummaryText> No data</SummaryText>
      )}
    </Container>
  );
}
