import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Homepager';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;