import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Details from '../pages/Details';
import { MyProvider } from '../context';

export default function MainRoutes() {
  return (
    <MyProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </MyProvider>
  );
}
