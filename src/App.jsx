import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepager from './components/Homepager.jsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepager />} />
      </Routes>
    </Router>
  );
}
