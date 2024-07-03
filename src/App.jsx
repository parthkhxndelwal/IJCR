import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/Main/Main';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage initialSubPage="Home" />} />
        <Route path="/home" element={<MainPage initialSubPage="Home" />} />
        <Route path="/editorialteam" element={<MainPage initialSubPage="Editorial Team" />} />
        <Route path="/articlesandissues" element={<MainPage initialSubPage="Articles and Issues" />} />
        <Route path="/publish" element={<MainPage initialSubPage="Publish" />} />
        <Route path="/guideforauthors" element={<MainPage initialSubPage="Guide for Authors" />} />
        <Route path="/editorialteam/nitishkumarminz" element={<MainPage initialSubPage="Nitish Kumar Minz" />} />
      </Routes>
    </Router>
  );
}
