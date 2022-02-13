import { Container, SummaryText } from './styles';

interface NavProps {
  episodeSummary: string;
}

export function SummaryContainer({ episodeSummary }: NavProps) {
  return (
    <Container data-testid="summary-container-comp">
      {episodeSummary ? ( // Verify if there is an episode summary. If there's not, render a no data warning.
        <SummaryText>{episodeSummary}</SummaryText>
      ) : (
        <SummaryText> No data</SummaryText>
      )}
    </Container>
  );
}
