import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPage from './Admin/adminPage';
import Authentification from './Authentification/index';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/*<Route path="/*" element={<AdminPage />} />*/}
         <Route path="/*" element={<Authentification />} />
      </Routes>
    </Router>
  );
}

export default App;