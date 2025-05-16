import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Homepage/navbar';
import AdminPage from './Admin/adminPage';
import Authentification from './Authentification/index';
import './App.css';

const App = () => {


  return (

    <div>
         <Router>
      <Routes>
        {/* <Route path="/*" element={<AdminPage />} /> */}
<<<<<<< HEAD
        <Route path="/*" element={<Authentification />} />
=======
        <Route path="/navbar" element={<navbar />} />
>>>>>>> ibrah
      </Routes>
    </Router>
    </div>
  );
}

export default App;

// should add backticks on the container upto to the word theme on line 12