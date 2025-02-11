import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepager from './components/Homepager';
import './App.css'


const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepager/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
