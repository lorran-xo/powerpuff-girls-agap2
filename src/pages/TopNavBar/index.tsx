import { useNavigate } from 'react-router-dom';

import { NavBar } from '../../components/NavBar';
import { Container } from './styles';

export default function TopNavBar() {
  const navigate = useNavigate();

  return (
    <Container>
      <NavBar
        titleOptionOne="Home"
        titleOptionTwo="About"
        clickOptOne={() => navigate('/')}
        clickOptTwo={() => navigate('/about')}
      />
    </Container>
  );
}
