import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Grammar from './pages/Grammar';
import Tajweed from './pages/Tajweed';
import Practice from './pages/Practice';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grammar" element={<Grammar />} />
        <Route path="/tajweed" element={<Tajweed />} />
        <Route path="/practice" element={<Practice />} />
      </Routes>
    </BrowserRouter>
  );
}
