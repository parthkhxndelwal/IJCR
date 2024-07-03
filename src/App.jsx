import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/Main/Main';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/nitishkumarminz" element={<MainPage initialSubPage="Nitish Kumar Minz" />} />
      </Routes>
    </Router>
  );
}
