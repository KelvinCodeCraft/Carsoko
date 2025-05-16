import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Homepage/navbar/navbar';
import AdminPage from './Admin/adminPage';
import Authentification from './Authentification/index';
import Footer from './Homepage/footer/footer';
import Body from './Homepage/body/body';
import Homepage from './Homepage';
import './App.css';

const App = () => {
  return (
      <Router>
        <Routes>
          {/* <Route path="/*" element={<AdminPage />} /> */}
          {/* <Route path="/*" element={<Authentification />} /> */}
          {/* <Route path="/*" element={<Navbar />} /> */}
          {/* <Route path="/" element={<Footer />} /> */}
          {/* <Route path="/" element={<Body />} /> */}
          <Route path="/" element={<Homepage />} />
        </Routes>
    </Router>
  );
}

export default App;