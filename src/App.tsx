import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';
import TopNavBar from './pages/TopNavBar';

export default function App() {
  return (
    <Router>
      {/* <Logo /> */}
      <TopNavBar />
      <Routes />
    </Router>
  );
}
