import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Homepage/navbar/navbar';
import AdminPage from './Admin/adminPage';
import Authentification from './Authentification/index';
import './App.css';
import './Homepage/body/body.css';
import './Homepage/navbar/navbar.css';
import Body from './Homepage/body/body';


const App = () => {
  return (
      <Router>
        <Routes>
          {/* <Route path="/*" element={<AdminPage />} /> */}
          {/* <Route path="/*" element={<Authentification />} /> */}
          {/* <Route path="/*" element={<Navbar />} /> */}
          <Route path="/*" element={<Body />} />
        </Routes>
    </Router>
  );
}

export default App;