import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';
import TopNavBar from './pages/TopNavBar';
import Logo from './pages/Logo';

export default function App() {
  return (
    <Router>
      <Logo />
      <TopNavBar />
      <Routes />
    </Router>
  );
}
