import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPage from './Admin/adminPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;