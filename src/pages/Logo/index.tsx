import { Container } from './styles';
import PpgLogo from '../../assets/ppg-logo-icon.png';

export default function Logo() {
  return (
    <Container>
      <img alt="Logo" width={120} height={70} src={PpgLogo} />
    </Container>
  );
}
