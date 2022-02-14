import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import TopNavBar from './pages/TopNavBar';
import Logo from './pages/Logo';
import { GlobalStyle, theme } from './styles';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Logo />
        <TopNavBar />
        <Routes />
      </Router>
      <GlobalStyle />
    </ThemeProvider>
  );
}
