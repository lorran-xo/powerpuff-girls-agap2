import { BrowserRouter as Router, Link } from 'react-router-dom';

import Routes from './routes';

export default function App() {
  return (
    <Router>
      {/* LOGO */}
      {/* NAVBAR */}
      <div style={{ textAlign: 'center' }}>
        <h1> Oi </h1>
      </div>
      {/* SCREENS */}
      <Link to="/"> Home </Link>
      <Link to="about"> About </Link>
      <Routes />
    </Router>
  );
}
