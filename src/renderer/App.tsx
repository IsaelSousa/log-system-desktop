import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './src/pages/HomePage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}
